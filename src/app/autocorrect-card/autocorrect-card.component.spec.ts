import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocorrectCardComponent } from './autocorrect-card.component';

describe('AutocorrectCardComponent', () => {
  let component: AutocorrectCardComponent;
  let fixture: ComponentFixture<AutocorrectCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocorrectCardComponent]
    });
    fixture = TestBed.createComponent(AutocorrectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
