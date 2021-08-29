import { Injectable } from '@angular/core';
import axios from 'axios';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  constructor() { }

  members: any = [];
  member: any = {
    name: '',
    age: ''
  }
  CommonService: any
  
  membersCreate() {
    axios.post('http://localhost:3100/api/v1/members', this.member).then((response) => {
      console.log('Done membersCreate', response);
      this.membersRead();
    }).catch((error) => {
      this.CommonService.axiosError(error);
    });

    // this.members.push({
    //   name: this.member.name,
    //   age: this.member.age
    // });
    // console.log('Done membersCreate', this.members);
  }

  membersRead() {
    this.members = [{
      name: '홍길동',
      age: 20
    }, {
      name: '춘향이',
      age: 16
    }];
    console.log('Done membersRead', this.members);
  }
  
  membersUpdate() {
    this.members[this.members.index] = this.member;
    console.log('Done membersUpdate', this.members);
  }

  membersDelete() {
    this.members.splice(this.members.index, 1);
    console.log('Done membersDelete', this.members);
  }
}
