import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaListagemComponent } from './denuncia-listagem.component';

describe('DenunciaListagemComponent', () => {
  let component: DenunciaListagemComponent;
  let fixture: ComponentFixture<DenunciaListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DenunciaListagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenunciaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
