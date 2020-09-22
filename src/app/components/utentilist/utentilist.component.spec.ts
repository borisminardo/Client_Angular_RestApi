import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentilistComponent } from './utentilist.component';

describe('UtentilistComponent', () => {
  let component: UtentilistComponent;
  let fixture: ComponentFixture<UtentilistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtentilistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtentilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
