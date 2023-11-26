import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParChantierComponent } from './recherche-par-chantier.component';

describe('RechercheParChantierComponent', () => {
  let component: RechercheParChantierComponent;
  let fixture: ComponentFixture<RechercheParChantierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParChantierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
