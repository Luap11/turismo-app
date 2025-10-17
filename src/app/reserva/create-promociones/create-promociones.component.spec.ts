import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePromocionesComponent } from './create-promociones.component';

describe('CreatePromocionesComponent', () => {
  let component: CreatePromocionesComponent;
  let fixture: ComponentFixture<CreatePromocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePromocionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
