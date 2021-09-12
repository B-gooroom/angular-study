import { Injectable } from '@angular/core';
import axios from 'axios';
import { CommonService } from './common.service';
import { FormControl, FormsModule, Validators } from '@angular/forms';

declare interface Member {
  name: string,
  age?: number
}

declare interface OptionalChaining {
  func1?: Function,
  any1: any
}

declare interface MemberForm {
  name?: FormControl,
  age: FormControl
}

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  constructor(private commonService: CommonService) {
    this.memberForm.age.valueChanges.subscribe((value: string) => {
      this.member.age = Number(value);
    });
  }

  members: Array<Member> = [];
  // members: Member[] = [];
  member: Member = {
    name: '',
    age: undefined
  };

  optionalChaining: OptionalChaining = {
    // func1: function() {
    //   console.log('func1');
    //   return '리턴 func1';
    // },
    func1: undefined,
    // any1: {
    //   // func2: function() {
    //   //   console.log('func2');
    //   // }
    //   func2: undefined
    // }
    any1: undefined
  }

  memberForm: MemberForm = {
    age: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(3),
      Validators.pattern('^[0-9]+$')
      // Validators.pattern('^[a-zA-Z0-9]+$')
    ])
  }

  membersCreate() {
    axios.post('/api/v1/members', this.member).then((response) => {
      console.log('Done membersCreate', response);
      this.membersRead();
    }).catch((error) => {
      this.commonService.axiosError(error);
    });
  }

  membersRead() {
    axios.get('/api/v1/members').then((response) => {
      console.log('Done membersRead', response);
      this.members = response.data.members;
    }).catch((error) => {
      this.commonService.axiosError(error);
    });
  }
  
  membersUpdate(index: number, member: Member) {
    const memberUpdate = {
      index: index,
      member: member
    };
    axios.patch('/api/v1/members', memberUpdate).then((response) => {
      console.log('Done membersUpdate', response);
      this.membersRead();
    }).catch((error) => {
      this.commonService.axiosError(error);
    });
  }
  
  membersDelete(index: number) {
    axios.delete('/api/v1/members/' + index).then((response) => {
      console.log('Done membersDelete', response);
      this.membersRead();
    }).catch((error) => {
      this.commonService.axiosError(error);
    });
  }
  
}
