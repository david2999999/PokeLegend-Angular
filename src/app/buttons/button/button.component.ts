import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() size: string;
  @Input() text: string;
  buttonClass: string;


  constructor() { }

  ngOnInit() {
    this.buttonClass = `button button-${this.text} button-${this.size}`;
  }
}
