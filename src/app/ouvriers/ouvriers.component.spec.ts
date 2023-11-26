import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvriersComponent } from './ouvriers.component';

describe('OuvriersComponent', () => {
  let component: OuvriersComponent;
  let fixture: ComponentFixture<OuvriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuvriersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuvriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
