import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComplexFormControlModule } from './complex-form-control/complex-form-control.module';
import { RegistrationFormModule } from './registration-form/registration-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComplexFormControlModule,
    RegistrationFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
