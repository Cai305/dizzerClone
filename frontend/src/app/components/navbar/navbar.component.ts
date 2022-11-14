import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { DeezerService } from 'src/app/services/deezer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchForm!: FormGroup;
  error: boolean = false;
  

  constructor( private router: Router) { }

  ngOnInit(): void {

   
    this.searchForm = new FormGroup({
      artist_name: new FormControl('',[Validators.required , Validators.minLength(1)])
   });

  //  if(this.searchForm.value.artist !> 0){
  //   alert('Please select enter artist name');
  // }
  }

  search(){
    console.log(this.searchForm.value.artist_name);
    let artistName = this.searchForm.value.artist_name;

    console.log( artistName.length )
    if(artistName.length > 2){
      this.router.navigate(['/search/'+artistName]);
    }  else {
      this.error = true;
      setInterval(()=>{this.error = false;}, 5000)
    }
       
  }
}
