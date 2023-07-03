import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-flash-message',
  templateUrl: './error-flash-message.component.html',
  styleUrls: ['./error-flash-message.component.css']
})
export class ErrorFlashMessageComponent {
  @Input() errorMessage: string;
  @Output() close = new EventEmitter<void>();
}
