import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfavoritethingComponent } from './editfavoritething.component';

describe('EditfavoritethingComponent', () => {
  let component: EditfavoritethingComponent;
  let fixture: ComponentFixture<EditfavoritethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfavoritethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfavoritethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
