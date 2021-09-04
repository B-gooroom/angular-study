import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  static members: any;
  constructor() { }

  members: any = [];
  member: any = {
    name: '',
    age: ''
  }
  CommonService: any;
  
  membersCreate() {
    axios.post('http://localhost:3100/api/v1/members', this.members).then((response) => {
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
    axios.get('http://localhost:3100/api/v1/members').then((response) => {
      console.log('Done membersRead', response);
      this.members = response.data.members;
    }).catch((error) => {
      this.CommonService.axiosError(error);
    });

    // this.members = [{
    //   name: '홍길동',
    //   age: 20
    // }, {
    //   name: '춘향이',
    //   age: 16
    // }];
    // console.log('Done membersRead', this.members);
  }
  
  membersUpdate() {
    const memberUpdate = {
      index: this.members.index,
      member: this.member,
    }
    axios.patch('http://localhost:3100/api/v1/members', memberUpdate).then((response) => {
      console.log('Done membersUpdate', response);
      this.membersRead();
    }).catch((error) => {
      this.CommonService.axiosError(error);
    });
    
    // this.members[this.members.index] = this.member;
    // console.log('Done membersUpdate', this.members);
  }

  membersDelete() {
    axios.delete('http://localhost:3100/api/v1/members/' + this.members.index).then((response) => {
      console.log('Done membersDelete', response);
      this.membersRead();
    }).catch((error) => {
      this.CommonService.axiosError(error);
    });

    // this.members.splice(this.members.index, 1);
    // console.log('Done membersDelete', this.members);
  }
}
