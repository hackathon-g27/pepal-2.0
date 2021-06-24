import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendusComponent } from './rendus.component';

describe('RendusComponent', () => {
  let component: RendusComponent;
  let fixture: ComponentFixture<RendusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
