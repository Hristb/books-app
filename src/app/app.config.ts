import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { MyPreloadingStrategy } from './core/strategies/my-preloading-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    MyPreloadingStrategy,
    provideRouter(routes,withPreloading(MyPreloadingStrategy)),
  ]
};