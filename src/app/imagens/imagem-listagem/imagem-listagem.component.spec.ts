import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemListagemComponent } from './imagem-listagem.component';

describe('ImagemListagemComponent', () => {
  let component: ImagemListagemComponent;
  let fixture: ComponentFixture<ImagemListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagemListagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagemListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
