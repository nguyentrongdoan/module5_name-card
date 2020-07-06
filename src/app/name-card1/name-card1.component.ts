import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card1',
  templateUrl: './name-card1.component.html',
  styleUrls: ['./name-card1.component.css']
})
export class NameCard1Component implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  constructor() { }

  ngOnInit(): void {
  }

}
