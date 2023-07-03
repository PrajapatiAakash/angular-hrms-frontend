import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFlashMessageComponent } from './error-flash-message.component';

describe('ErrorFlashMessageComponent', () => {
  let component: ErrorFlashMessageComponent;
  let fixture: ComponentFixture<ErrorFlashMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorFlashMessageComponent]
    });
    fixture = TestBed.createComponent(ErrorFlashMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
