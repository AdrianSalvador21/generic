import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueDateComponent } from './unique-date.component';

describe('UniqueDateComponent', () => {
  let component: UniqueDateComponent;
  let fixture: ComponentFixture<UniqueDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
