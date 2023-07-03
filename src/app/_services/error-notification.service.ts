import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {
  private errorSubject = new Subject<string>();
  error$ = this.errorSubject.asObservable();

  constructor() { }

  showError(errorMessage: string) {
    this.errorSubject.next(errorMessage);
  }

  clearError() {
    this.errorSubject.next('');
  }
}
