import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationclientComponent } from './creationclient.component';

describe('CreationclientComponent', () => {
  let component: CreationclientComponent;
  let fixture: ComponentFixture<CreationclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
