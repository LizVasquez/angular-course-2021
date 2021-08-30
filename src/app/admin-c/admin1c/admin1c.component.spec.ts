import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin1cComponent } from './admin1c.component';

describe('Admin1cComponent', () => {
  let component: Admin1cComponent;
  let fixture: ComponentFixture<Admin1cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Admin1cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin1cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
