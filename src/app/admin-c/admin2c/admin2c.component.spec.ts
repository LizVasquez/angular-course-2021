import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin2cComponent } from './admin2c.component';

describe('Admin2cComponent', () => {
  let component: Admin2cComponent;
  let fixture: ComponentFixture<Admin2cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Admin2cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
