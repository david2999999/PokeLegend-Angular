import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle-screen',
  templateUrl: './battle-screen.component.html',
  styleUrls: ['./battle-screen.component.css']
})
export class BattleScreenComponent implements OnInit {
  skills: any = [
    {
      skillName: 'Hypnosis',
      type: 'Psychic',
      ppTotal: 10,
      ppLeft: 5
    },
    {
      skillName: 'Absorb',
      type: 'Grass',
      ppTotal: 25,
      ppLeft: 10
    },
    {
      skillName: 'Acid',
      type: 'Poison',
      ppTotal: 30,
      ppLeft: 18
    },
    {
      skillName: 'Accelerock',
      type: 'Rock',
      ppTotal: 20,
      ppLeft: 18
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
