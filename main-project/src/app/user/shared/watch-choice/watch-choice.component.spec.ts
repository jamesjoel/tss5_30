import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchChoiceComponent } from './watch-choice.component';

describe('WatchChoiceComponent', () => {
  let component: WatchChoiceComponent;
  let fixture: ComponentFixture<WatchChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
