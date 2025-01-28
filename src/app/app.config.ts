import { ApplicationConfig, provideZoneChangeDetection, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { Router } from '@angular/router';
import * as Sentry from "@sentry/angular";
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        extractor: (error) => {
          console.log('logging error', error);
          return error;
        }
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ]
};

