

import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import ROUTE from './app/app-routing';


bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(ROUTE, withComponentInputBinding()),
        provideHttpClient(),
        provideAnimations()
    ]
})
    .catch(err => console.error(err));
