import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }


  getSearchText() {
      return this.router.navigate(['/search/'+this.searchForm.value.search]);
  }



}
