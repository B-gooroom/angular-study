import { importType } from '@angular/compiler/src/output/output_ast';
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
    this.membersService.member.age = '';
    this.membersService.membersRead();
  }

}
