import {Injectable} from 'angular2/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(){
    return Promise.resolve(HEROES);
  }
  // See the "Take it slow" appendix
  getHeroSlowly(){
    return new Promise<Hero[]>(resolve =>
                               setTimeout(() => resolve(HEROES), 2000) // 2 second
                              );
  }
}
