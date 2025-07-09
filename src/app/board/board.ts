import { Component } from '@angular/core';
import { Button } from '../button/button';
import { RandomFigure } from '../random-figure/random-figure';

@Component({
  selector: 'app-board',
  imports: [Button, RandomFigure],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board {}
