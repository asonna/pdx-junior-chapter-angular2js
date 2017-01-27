/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MembersRepoComponent } from './members-repo.component';

describe('MembersRepoComponent', () => {
  let component: MembersRepoComponent;
  let fixture: ComponentFixture<MembersRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
