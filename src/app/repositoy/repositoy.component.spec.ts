import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoyComponent } from './repositoy.component';

describe('RepositoyComponent', () => {
  let component: RepositoyComponent;
  let fixture: ComponentFixture<RepositoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
