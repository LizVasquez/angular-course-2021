import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1cComponent } from './home1c.component';

describe('Home1cComponent', () => {
  let component: Home1cComponent;
  let fixture: ComponentFixture<Home1cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home1cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home1cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
