import { Component, OnInit } from '@angular/core';
import { DeezerService } from 'src/app/services/deezer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/interfaces/artist';
import { Album } from 'src/app/interfaces/album';



@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  total_albums :number = 0; 
  listOfArtists:any;
  private id!: number;
  public artist!: Artist;
  albums!:Array<Album>;
  top5Songs: any;

  constructor(
    private deezer:DeezerService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    this.id = parseInt(this.route.snapshot.params['id']); //get id from routes param

    //getting Artist , Artist Albums, Artist Top 5 songs using the id from the params
    this.get_Artist(this.id);
    this.get_Artist_Albums(this.id);
    this.get_Artist_Top5(this.id);

  }

  get_Artist(id:number): void {
    this.deezer.get_One_Artist(id).subscribe((artist:any)=>{
      this.artist = artist;
    })
  }

  get_Artist_Albums(id:number): void {
    this.deezer.get_Artist_Albums(id).subscribe((artist:any)=>{
      this.total_albums = artist.total;
      this.albums= artist.data;
    })
  }

  get_Artist_Top5(id:number){
    this.deezer.get_Top_Songs(id).subscribe((songs:any)=>{
      this.top5Songs= songs.data;
    })
  }


}
