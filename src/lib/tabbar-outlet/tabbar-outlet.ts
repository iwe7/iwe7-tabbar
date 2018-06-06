import { ViewContainerRef, TemplateRef, Injector } from '@angular/core';
import { Component, OnInit, ViewEncapsulation, AfterContentInit, ElementRef, ViewChild } from '@angular/core';
import { Iwe7BaseComponent } from 'iwe7-base';

@Component({
    selector: 'tabbar-outlet',
    templateUrl: './tabbar-outlet.html',
    styleUrls: ['./tabbar-outlet.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TabbarOutletComponent extends Iwe7BaseComponent {
    @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;
    @ViewChild('after', { read: ViewContainerRef }) after: ViewContainerRef;
    @ViewChild('before', { read: ViewContainerRef }) before: ViewContainerRef;
    bottom: string = '0px';
    position: string = 'absolute';
    constructor(
        public ele: ElementRef,
        injector: Injector
    ) {
        super(injector, 'jd-tabbar');
        this.setStyleInputs(['bottom']);
        this.getCyc('ngOnInit').subscribe(res => {
            this.listen(document, 'scroll').subscribe(res => {
                this.styleObj = {
                    position: 'fixed',
                };
            });
        });
    }

    attachContent(tpl: TemplateRef<any>) {
        this.getCyc('ngAfterViewInit').subscribe(res => {
            this.content.createEmbeddedView(tpl);
        });
    }
    attachTop(tpl: TemplateRef<any>) {
        this.getCyc('ngAfterViewInit').subscribe(res => {
            this.before.createEmbeddedView(tpl);
        });
    }
    attachBottom(tpl: TemplateRef<any>) {
        this.getCyc('ngAfterViewInit').subscribe(res => {
            this.after.createEmbeddedView(tpl);
        });
    }
}
