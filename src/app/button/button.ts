import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() buttonClass!: string;
  @Input() iconPath?: string;
  @Input() label?: string;

  @Output() click = new EventEmitter<string>();

  handleClick() {
    this.click.emit(this.buttonClass);
  }
}
