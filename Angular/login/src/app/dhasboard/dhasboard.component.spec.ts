import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhasboardComponent } from './dhasboard.component';

describe('DhasboardComponent', () => {
  let component: DhasboardComponent;
  let fixture: ComponentFixture<DhasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhasboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
