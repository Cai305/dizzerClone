import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/interfaces/artist';
import { DeezerService } from 'src/app/services/deezer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artists:Artist[] = [];
  constructor(private deezer:DeezerService) { }

  ngOnInit(): void {
    this.deezer.get_All_Artist().subscribe((data:Artist[]) => {
      this.artists = data;
      console.log(data);
    })
  }

  
}
