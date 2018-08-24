import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-battle-button',
  templateUrl: './battle-button.component.html',
  styleUrls: ['./battle-button.component.css']
})
export class BattleButtonComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  @Input() ppTotal: string;
  @Input() ppLeft: string;

  buttonClass: string;

  constructor() { }

  ngOnInit() {
    this.buttonClass = `battle-button battle-button__${this.type}`;
  }

}
