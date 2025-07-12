import { Component } from '@angular/core';
import { Button } from '../button/button';
import { RandomFigure } from '../random-figure/random-figure';
import { Counter } from '../counter/counter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  imports: [Button, RandomFigure, Counter, CommonModule],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board {
  counter: number = 0;
  currentFigureClass: string = '';
  showFinalResult: boolean = false;
  showBoard: boolean = true;

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

  handleFinished() {
    this.showFinalResult = true;
    this.showBoard = false;
  }

  closeResult() {
    this.showFinalResult = false;
    this.showBoard = true;
  }
}
