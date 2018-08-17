import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdpOublierComponent } from './mdp-oublier.component';

describe('MdpOublierComponent', () => {
  let component: MdpOublierComponent;
  let fixture: ComponentFixture<MdpOublierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdpOublierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdpOublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
