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

  public heroName: any = {
    name: ''
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getAllHeroes().subscribe(heroesData => {
      this.heroes = heroesData;
    });
  }

  onSubmit() {
    (this.heroName.name === 'Vision' ?
      alert('You find the killer!!!')
    :
      alert(`${this.heroName.name} is not a killer.`)
    )
    this.heroName.name = ''
  }

}
