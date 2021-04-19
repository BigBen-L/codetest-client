import { Component, OnInit } from '@angular/core';
import { HeroService } from '../common/services/hero.service';
class Hero {

  id: string;
 
  name: string;
 
  photo: string;

  bio: string;

}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getAllHeroes().subscribe(heroesData => {
      this.heroes = heroesData;
    });
  }

}
