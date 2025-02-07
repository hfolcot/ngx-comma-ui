import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should emit click event when clicked", () => {
    const spy = jest.spyOn(component.click, "emit");

    const button = fixture.debugElement.query(By.css("[data-testid='button']"));
    button.nativeElement.click();

    fixture.detectChanges();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should not be clickable when disabled", () => {
    const spy = jest.spyOn(component.click, "emit");

    fixture.componentRef.setInput("disabled", true);
    const button = fixture.debugElement.query(By.css("[data-testid='button']"));
    button.nativeElement.click();

    fixture.detectChanges();

    expect(spy).not.toHaveBeenCalled();
  });

  it("should apply the disabled class when disabled", () => {
    fixture.componentRef.setInput("disabled", true);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("[data-testid='button']"));

    expect(button.nativeElement.classList.contains("disabled")).toBe(true);

  })
});
