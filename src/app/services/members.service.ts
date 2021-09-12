import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: any = [];
  member: any = {
    name: '',
    age: ''
  };

  membersCreate() {
    this.members.push({
      name: this.member.name,
      age: this.member.age
    });
    console.log('Done membersCreate', this.members);
  }
}
