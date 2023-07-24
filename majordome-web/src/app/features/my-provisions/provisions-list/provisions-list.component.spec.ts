import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionsListComponent } from './provisions-list.component';

describe('ProvisionsListComponent', () => {
  let component: ProvisionsListComponent;
  let fixture: ComponentFixture<ProvisionsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvisionsListComponent],
    });
    fixture = TestBed.createComponent(ProvisionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
