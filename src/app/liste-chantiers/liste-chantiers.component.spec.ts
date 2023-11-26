import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChantiersComponent } from './liste-chantiers.component';

describe('ListeChantiersComponent', () => {
  let component: ListeChantiersComponent;
  let fixture: ComponentFixture<ListeChantiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChantiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeChantiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
