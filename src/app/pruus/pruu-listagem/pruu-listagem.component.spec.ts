import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruuListagemComponent } from './pruu-listagem.component';

describe('PruuListagemComponent', () => {
  let component: PruuListagemComponent;
  let fixture: ComponentFixture<PruuListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruuListagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruuListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
