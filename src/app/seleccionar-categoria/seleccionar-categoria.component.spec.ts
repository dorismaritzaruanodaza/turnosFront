import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarCategoriaComponent } from './seleccionar-categoria.component';

describe('SeleccionarCategoriaComponent', () => {
  let component: SeleccionarCategoriaComponent;
  let fixture: ComponentFixture<SeleccionarCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionarCategoriaComponent]
    });
    fixture = TestBed.createComponent(SeleccionarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
