import { Component } from '@angular/core';
import { Button } from '../button/button';
import { RandomFigure } from '../random-figure/random-figure';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-board',
  imports: [Button, RandomFigure, Counter],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board {
  counter: number = 0;
  currentFigureClass: string = '';

  handleFigureChange(className: string) {
    this.currentFigureClass = className;
  }

  handleButtonClick(buttonClass: string) {
    if (this.currentFigureClass.includes(buttonClass)) {
      this.counter++;
    } else {
      this.counter--;
    }
  }
}
