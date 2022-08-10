import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementComponent } from './form-element.component';
import { INPUT_TYPE } from '../../models';

describe('FormElementComponent', () => {
  let component: FormElementComponent;
  let fixture: ComponentFixture<FormElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormElementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return string and some of input types', () => {
    expect(component.getTypeOfInput()).toBeTruthy();
    expect(() => typeof component.getTypeOfInput()).toBe('string');
    component.fieldName = 'email';
    expect(() => component.getTypeOfInput()).toBe(INPUT_TYPE.EMAIL);
  });

  it('should triggered change event', () => {
    const spy = spyOn(component, 'changed');
    const value = 'test';
    const eventValue = { target: { value } } as any as Event;
    component.onChange(eventValue);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('test');
  });

  it("should return true if it's email formField", () => {
    component.fieldName = 'email';
    expect(component.isEmailField).toBeTruthy();
  });
});
