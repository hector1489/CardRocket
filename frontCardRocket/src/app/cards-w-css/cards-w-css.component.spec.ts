import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWCssComponent } from './cards-w-css.component';

describe('CardsWCssComponent', () => {
  let component: CardsWCssComponent;
  let fixture: ComponentFixture<CardsWCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsWCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsWCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
