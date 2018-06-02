import { TabbarOutletComponent } from './../tabbar-outlet/tabbar-outlet';
import { Directive, Optional, SkipSelf, TemplateRef, AfterViewInit } from '@angular/core';

@Directive({ selector: '[tabbarBottom]' })
export class TabbarBottomDirective implements AfterViewInit {
    constructor(
        public template: TemplateRef<any>,
        @Optional()
        @SkipSelf()
        public outlet: TabbarOutletComponent
    ) { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.outlet.attachBottom(this.template);
        });
    }
}
