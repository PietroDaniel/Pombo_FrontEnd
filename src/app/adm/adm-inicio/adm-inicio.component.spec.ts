import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmInicioComponent } from './adm-inicio.component';

describe('AdmInicioComponent', () => {
  let component: AdmInicioComponent;
  let fixture: ComponentFixture<AdmInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
