import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './components/my.component';
import { FontCustomizationDirective } from './directives/font-customization.directive';
import { ShowHideDirective } from './directives/show-hide.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MyComponent,
    FontCustomizationDirective,
    ShowHideDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
