import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../../services/members.service';
import { SearchService } from '../../../services/search.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public membersService: MembersService,
    public searchService: SearchService
  ) {
    this.route.queryParams.subscribe(queryParams => {
      this.q = queryParams.q || ''
      this.searchService.searchRead(this.q);
    });
  }    
  
  q = '';
  
  ngOnInit(): void {
  }

  searchRead(q: string): void {
    this.router.navigate(['/search'], {
      queryParams: {
        q: q
      }
    });
  }
  
}
