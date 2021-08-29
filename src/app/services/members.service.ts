import { stringify } from '@angular/compiler/src/util';
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
  CommonService: any;
  
  membersCreate() {
    axios.post('http://localhost:4200/api/v1/members', this.members).then((response) => {
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
    axios.get('http://localhost:4200/api/v1/members').then((response) => {
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
    this.members[this.members.index] = this.member;
    console.log('Done membersUpdate', this.members);
  }

  membersDelete() {
    this.members.splice(this.members.index, 1);
    console.log('Done membersDelete', this.members);
  }
}
