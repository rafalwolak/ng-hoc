import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './tooltip.directive';
import { DragNDropDirective } from './drag-n-drop.directive';
import { TestComponent } from './test/test.component';
import { PageComponent } from './page/page.component';
import { PagerComponent } from './pager/pager.component';
import { BubblyEffectDirective } from './bubbly-effect.directive';
import { PopoverComponent } from './popover/popover.component';
import { ClearAllSubscriptionComponent } from './clear-all-subscription/clear-all-subscription.component';
import { WithRouterComponent } from './with-router/with-router.component';

@Component({
  selector: 'app-test',
  template: '<div>Test Text</div>'
})
export class NewComponent extends TooltipDirective {
  
}

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    NewComponent,
    DragNDropDirective,
    TestComponent,
    PageComponent,
    PagerComponent,
    BubblyEffectDirective,
    PopoverComponent,
    ClearAllSubscriptionComponent,
    WithRouterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
