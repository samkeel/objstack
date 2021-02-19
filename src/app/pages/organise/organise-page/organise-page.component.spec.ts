import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisePageComponent } from './organise-page.component';

describe('OrganisePageComponent', () => {
  let component: OrganisePageComponent;
  let fixture: ComponentFixture<OrganisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
