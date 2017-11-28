import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearcherComponent } from './git-searcher.component';

describe('GitSearcherComponent', () => {
  let component: GitSearcherComponent;
  let fixture: ComponentFixture<GitSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
