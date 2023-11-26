import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOuvrierComponent } from './update-ouvrier.component';

describe('UpdateOuvrierComponent', () => {
  let component: UpdateOuvrierComponent;
  let fixture: ComponentFixture<UpdateOuvrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOuvrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOuvrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
