import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticedialogComponent } from './noticedialog.component';

describe('NoticedialogComponent', () => {
  let component: NoticedialogComponent;
  let fixture: ComponentFixture<NoticedialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticedialogComponent]
    });
    fixture = TestBed.createComponent(NoticedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

