import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../../services/members.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(public membersService: MembersService) { }

  ngOnInit(): void {
    this.membersService.member.name = '';
    this.membersService.member.age = undefined;
    this.membersService.membersRead();
    const r = this.membersService.optionalChaining.func1?.();
    this.membersService.optionalChaining.any1?.func2?.();
    console.log(r);
  }

  insertMemberAge($event: string): void {
    // this.membersService.member.age = Number($event);
    this.membersService.member.age = $event === '' ? undefined : Number($event);
  }
}
