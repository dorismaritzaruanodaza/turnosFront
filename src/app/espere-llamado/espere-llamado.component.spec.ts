import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspereLlamadoComponent } from './espere-llamado.component';

describe('EspereLlamadoComponent', () => {
  let component: EspereLlamadoComponent;
  let fixture: ComponentFixture<EspereLlamadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspereLlamadoComponent]
    });
    fixture = TestBed.createComponent(EspereLlamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
