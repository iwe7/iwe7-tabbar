import { TabbarContentDirective } from './tabbar-directives/tabbar-content';
import { TabbarBottomDirective } from './tabbar-directives/tabbar-bottom';
import { TabbarOutletComponent } from './tabbar-outlet/tabbar-outlet';
import { TabbarItemDirective } from './tabbar-item/tabbar-item';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabbarTopDirective } from './tabbar-directives/tabbar-top';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabbarItemDirective,
    TabbarOutletComponent,
    TabbarTopDirective,
    TabbarBottomDirective,
    TabbarContentDirective
  ],
  exports: [
    TabbarItemDirective,
    TabbarOutletComponent,
    TabbarTopDirective,
    TabbarBottomDirective,
    TabbarContentDirective
  ]
})
export class Iwe7TabbarModule { }
