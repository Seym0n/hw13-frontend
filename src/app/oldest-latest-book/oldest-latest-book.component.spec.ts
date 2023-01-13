import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestLatestBookComponent } from './oldest-latest-book.component';

describe('OldestLatestBookComponent', () => {
  let component: OldestLatestBookComponent;
  let fixture: ComponentFixture<OldestLatestBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldestLatestBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldestLatestBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
