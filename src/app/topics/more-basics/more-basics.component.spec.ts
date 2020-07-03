import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBasicsComponent } from './more-basics.component';

describe('MoreBasicsComponent', () => {
  let component: MoreBasicsComponent;
  let fixture: ComponentFixture<MoreBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
