import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/interfaces/artist';
import { DeezerService } from 'src/app/services/deezer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

listOfArtists!: Array<Artist>;

  constructor(private deezer:DeezerService, private router:Router) { }

  ngOnInit(): void {

     this.deezer.get_User_Artist().subscribe((data:any)=>{
      this.listOfArtists = data.data;
      console.log(this.listOfArtists[0]);
    })
  
    
  }


  gotoArtist(id:any){
   return this.router.navigate(['/artist/'+id]);
  }

}
