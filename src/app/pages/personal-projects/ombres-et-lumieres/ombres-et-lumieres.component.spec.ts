import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmbresEtLumieresComponent } from './ombres-et-lumieres.component';

describe('OmbresEtLumieresComponent', () => {
  let component: OmbresEtLumieresComponent;
  let fixture: ComponentFixture<OmbresEtLumieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmbresEtLumieresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmbresEtLumieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
