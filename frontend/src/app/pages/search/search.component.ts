import { Component, OnInit } from '@angular/core';
import { DeezerService } from 'src/app/services/deezer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/interfaces/artist';
import { Observable }  from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public _artist: Artist = {
    "id": 21,
    "name": "Renaud",
    "link": "https://www.deezer.com/artist/21",
    "share": "https://www.deezer.com/artist/21?utm_source=deezer&utm_content=artist-21&utm_term=0_1668229879&utm_medium=web",
    "picture": "https://api.deezer.com/artist/21/image",
    "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/7fb8883264e8b6f598a55e3d88aacc04/56x56-000000-80-0-0.jpg",
    "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/7fb8883264e8b6f598a55e3d88aacc04/250x250-000000-80-0-0.jpg",
    "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/7fb8883264e8b6f598a55e3d88aacc04/500x500-000000-80-0-0.jpg",
    "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/7fb8883264e8b6f598a55e3d88aacc04/1000x1000-000000-80-0-0.jpg",
    "nb_album": 38,
    "nb_fan": 1008614,
    "radio": true,
    "tracklist": "https://api.deezer.com/artist/21/top?limit=50",
    "type": "artist"
  }
  artist!: Observable<Artist[]> ;
  artist_name:string= this.route.snapshot.params['name'];

  constructor(
    private deezer:DeezerService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
     
    this.get_Artist(this.artist_name);
  }

  get_Artist(name:string) {
    // this.artist = this.deezer.search_Artist(name).pipe();
  }


  

}
