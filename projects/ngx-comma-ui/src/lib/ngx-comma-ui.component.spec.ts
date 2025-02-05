import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCommaUiComponent } from './ngx-comma-ui.component';

describe('NgxCommaUiComponent', () => {
  let component: NgxCommaUiComponent;
  let fixture: ComponentFixture<NgxCommaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCommaUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCommaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
