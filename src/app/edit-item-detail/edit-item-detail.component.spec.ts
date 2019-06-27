import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemDetailComponent } from './edit-item-detail.component';

describe('EditItemDetailComponent', () => {
  let component: EditItemDetailComponent;
  let fixture: ComponentFixture<EditItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
