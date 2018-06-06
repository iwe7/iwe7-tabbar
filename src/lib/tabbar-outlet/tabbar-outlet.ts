import { Iwe7CoreComponent } from 'iwe7-core';
import { ViewContainerRef, TemplateRef, Injector } from '@angular/core';
import { Component, OnInit, ViewEncapsulation, AfterContentInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'tabbar-outlet',
    templateUrl: './tabbar-outlet.html',
    styleUrls: ['./tabbar-outlet.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TabbarOutletComponent extends Iwe7CoreComponent {
    @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;
    @ViewChild('after', { read: ViewContainerRef }) after: ViewContainerRef;
    @ViewChild('before', { read: ViewContainerRef }) before: ViewContainerRef;

    constructor(
        public ele: ElementRef,
        injector: Injector
    ) {
        super(injector);
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
