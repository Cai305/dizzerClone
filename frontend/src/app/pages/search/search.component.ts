import { Component, OnInit } from '@angular/core';
import { DeezerService } from 'src/app/services/deezer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/interfaces/artist';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  artist!: any;
  listOfsearch: Array<any> = [];
  resultOfsearch: Array<any> = [];
  searchName!: string;

  constructor(
    private deezer: DeezerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchName = this.route.snapshot.params['name'];
    this.get_Artist_details(this.searchName);
  }

  get_Artist_details(search: string): void {
    this.deezer.search_Artist(search).subscribe((artist: any) => {
      this.resultOfsearch = artist.data;
      console.log('hhiiiiii', artist.data);
      this.getResult(artist.data);
    });
  }

  getResult(results: any) {
    if (results) {
      results.forEach((element: any) => {
        this.listOfsearch.push(element.album);
      });
    }
  }

  gotoArtist(id: any) {

    let album_id = this.resultOfsearch[id].album.id;
    let artist_id;

    this.deezer.get_One_Album(album_id).subscribe((album: any) => {
      artist_id = album.artist.id;
      return this.router.navigate(['/artist/' + artist_id]);
    });
  }
}
