import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

interface ImageItem {
  src: string;
  class: string;
}

@Component({
  selector: 'app-random-figure',
  imports: [CommonModule],
  templateUrl: './random-figure.html',
  styleUrl: './random-figure.css',
})
export class RandomFigure implements OnInit, OnDestroy {
  @Output() figureChanged = new EventEmitter<string>();
  @Output() finished = new EventEmitter<void>();
  images: ImageItem[] = [
    { src: 'assets/circle1.png', class: 'circle figure-size' },
    { src: 'assets/circle2.png', class: 'circle figure-size' },
    { src: 'assets/circle3.png', class: 'circle figure-size' },
    { src: 'assets/circle4.png', class: 'circle figure-size' },
    { src: 'assets/square1.png', class: 'square figure-size' },
    { src: 'assets/square2.png', class: 'square figure-size' },
    { src: 'assets/square3.png', class: 'square figure-size' },
    { src: 'assets/square4.png', class: 'square figure-size' },
    { src: 'assets/figure1.png', class: 'other figure-size' },
    { src: 'assets/figure2.png', class: 'other figure-size' },
    { src: 'assets/figure3.png', class: 'other figure-size' },
    { src: 'assets/figure4.png', class: 'other figure-size' },
  ];

  currentImage: ImageItem | null = null;
  intervalId: any;

  showCount = 0;
  maxShows = 30;
  showResult = false;
  counter = 0;

  ngOnInit() {
    this.startRandomizing();
  }
  startRandomizing() {
    this.showCount = 0;
    this.showRandomImage();
    this.intervalId = setInterval(() => {
      if (this.showCount >= this.maxShows) {
        clearInterval(this.intervalId);
        this.finished.emit();
        return;
      }
      this.showRandomImage();
    }, 2000);
  }
  currentFigureClass: string = '';

  showRandomImage() {
    this.showCount++;

    if (this.showCount > this.maxShows) {
      clearInterval(this.intervalId);
      this.finished.emit();
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.currentImage = this.images[randomIndex];
    this.currentFigureClass = this.currentImage.class;
    this.figureChanged.emit(this.currentFigureClass);
  }
  showResultOverlay() {
    this.showResult = true;
  }

  closeOverlay() {
    this.showResult = false;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
