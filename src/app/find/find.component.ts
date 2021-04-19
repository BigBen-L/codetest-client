import { Component, OnInit } from '@angular/core';
import { HeroService } from '../common/services/hero.service';
import Hero from '../../../../server/src/models/hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent implements OnInit {
  hero: Hero;
  character: any = {};

  constructor(private heroService: HeroService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.findHero(params.id);
      }
    });
  }

  ngOnInit(): void {}

  findHero(id: string) {
    this.heroService.getHeroById(id).subscribe((heroesData) => {
      this.hero = heroesData;
    });
  }
}
