import { TabbarOutletComponent } from './../tabbar-outlet/tabbar-outlet';
import {
    Directive, TemplateRef,
    Optional, SkipSelf, AfterViewInit
} from '@angular/core';

@Directive({
    selector: '[tabbarItem]',
    host: {
        '[class.am-tab-bar-tab]': '"true"'
    }
})
export class TabbarItemDirective implements AfterViewInit {
    constructor(
        public template: TemplateRef<any>,
        @Optional()
        @SkipSelf()
        public outlet: TabbarOutletComponent
    ) { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.outlet.attachContent(this.template);
        }, 0);
    }
}
