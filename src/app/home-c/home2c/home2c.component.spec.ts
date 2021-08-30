import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2cComponent } from './home2c.component';

describe('Home2cComponent', () => {
  let component: Home2cComponent;
  let fixture: ComponentFixture<Home2cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home2cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
