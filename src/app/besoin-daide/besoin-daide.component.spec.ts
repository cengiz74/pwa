import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinDaideComponent } from './besoin-daide.component';

describe('BesoinDaideComponent', () => {
  let component: BesoinDaideComponent;
  let fixture: ComponentFixture<BesoinDaideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BesoinDaideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BesoinDaideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
