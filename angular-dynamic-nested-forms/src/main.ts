import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/components/app/configs/app.config';
import { AppComponent } from './app/components/app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
