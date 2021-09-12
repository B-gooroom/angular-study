import { Injectable } from '@angular/core';
import axios from 'axios';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  constructor(private commonService: CommonService) {}

  members: any = [];
  member: any = {
    name: '',
    age: ''
  };

  membersCreate() {
    axios.post('http://localhost:3100/api/v1/members', this.member).then((response) => {
      console.log('Done membersCreate', response);
      this.membersRead();
    }).catch((error) => {
      this.commonService.axiosError(error);
    });
  }

  membersRead() {
    axios.get('http://localhost:3100/api/v1/members').then((response) => {
      console.log('Done membersRead', response);
      this.members = response.data.members;
    }).catch((error) => {
      this.commonService.axiosError(error);
    });
  }
  
  membersUpdate(index: number, member: any) {
    const memberUpdate = {
      index: index,
      member: member
    };
    axios.patch('http://localhost:3100/api/v1/members', memberUpdate).then((response) => {
      console.log('Done membersUpdate', response);
      this.membersRead();
    }).catch((error) => {
      this.commonService.axiosError(error);
    });
  }
  
  membersDelete(index: number) {
    axios.delete('http://localhost:3100/api/v1/members/' + index).then((response) => {
      console.log('Done membersDelete', response);
      this.membersRead();
    }).catch((error) => {
      this.commonService.axiosError(error);
    });
  }
  
}
