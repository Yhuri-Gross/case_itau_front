import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

import { authInterceptor } from './auth.interceptor';

import { LOCALE_ID } from '@angular/core';


export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    
    provideBrowserGlobalErrorListeners(),

    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor])
    ),

    provideRouter(routes),

    provideClientHydration(withEventReplay())

    

  ]
};