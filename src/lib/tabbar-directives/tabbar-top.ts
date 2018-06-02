import { TabbarOutletComponent } from './../tabbar-outlet/tabbar-outlet';
import { Directive, Optional, SkipSelf, TemplateRef, AfterViewInit } from '@angular/core';
@Directive({ selector: '[tabbarTop]' })
export class TabbarTopDirective implements AfterViewInit {
    constructor(
        public template: TemplateRef<any>,
        @Optional()
        @SkipSelf()
        public outlet: TabbarOutletComponent
    ) { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.outlet.attachTop(this.template);
        });
    }
}
