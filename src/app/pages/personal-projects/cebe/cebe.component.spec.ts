import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CebeComponent } from './cebe.component';

describe('CebeComponent', () => {
  let component: CebeComponent;
  let fixture: ComponentFixture<CebeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CebeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
