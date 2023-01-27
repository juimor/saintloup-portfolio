import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheironComponent } from './cheiron.component';

describe('CheironComponent', () => {
  let component: CheironComponent;
  let fixture: ComponentFixture<CheironComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheironComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheironComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
