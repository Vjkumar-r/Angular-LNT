import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//step 2 : every ng app should be kickstart with module--Appmodule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
