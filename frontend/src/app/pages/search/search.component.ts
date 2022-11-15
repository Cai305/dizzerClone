import { Component, OnInit } from '@angular/core';
import { DeezerService } from 'src/app/services/deezer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/interfaces/artist';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  total_albums :number = 0;
  listOfArtists:any;
  private id!: number;
  public artist!: Artist;
  albums!:Array<Album>;
  top5Songs: any;
  searchName!: string;

  constructor(
    private deezer:DeezerService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {

    this.searchName = this.route.snapshot.params['name'];
    this.get_Artist(this.searchName);
    this.get_Artist_Albums(this.id);
    this.get_Artist_Top5(this.id);
  }

  get_Artist(search:string): void {
    this.deezer.search_Artist(search).subscribe((artist:any)=>{
      
      this.artist = artist;
      this.get_Artist_Albums(artist.id);
      this.get_Artist_Top5(artist.id);
    })
  }

  get_Artist_Albums(id:number): void {
    this.deezer.get_Artist_Albums(id).subscribe((artist:any)=>{
      console.log(artist.data);
      this.total_albums = artist.total;
      this.albums= artist.data;
    })
  }

  get_Artist_Top5(id:number){
    this.deezer.get_Top_Songs(id).subscribe((songs:any)=>{
      console.log(songs.data);
      this.top5Songs= songs.data;
    })
  }

}
