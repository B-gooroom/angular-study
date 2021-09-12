import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../../services/members.service';
import { SearchService } from '../../../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    public membersService: MembersService,
    public searchService: SearchService
  ) { }
  
  q = '';
  
  ngOnInit(): void {
    this.searchService.searchRead(this.q);
  }

}
