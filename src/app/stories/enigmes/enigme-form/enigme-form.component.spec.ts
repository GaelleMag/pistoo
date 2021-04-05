import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeFormComponent } from './enigme-form.component';

describe('EnigmeFormComponent', () => {
  let component: EnigmeFormComponent;
  let fixture: ComponentFixture<EnigmeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
