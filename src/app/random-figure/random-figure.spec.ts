import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomFigure } from './random-figure';

describe('RandomFigure', () => {
  let component: RandomFigure;
  let fixture: ComponentFixture<RandomFigure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomFigure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomFigure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
