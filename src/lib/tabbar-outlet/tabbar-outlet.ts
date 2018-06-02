import { ViewContainerRef, TemplateRef } from '@angular/core';
import { Component, OnInit, ViewEncapsulation, AfterContentInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'tabbar-outlet',
    templateUrl: './tabbar-outlet.html',
    styleUrls: ['./tabbar-outlet.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TabbarOutletComponent {
    @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;
    @ViewChild('after', { read: ViewContainerRef }) after: ViewContainerRef;
    @ViewChild('before', { read: ViewContainerRef }) before: ViewContainerRef;

    constructor(
        public ele: ElementRef
    ) { }

    attachContent(tpl: TemplateRef<any>) {
        this.content.createEmbeddedView(tpl);
    }
    attachTop(tpl: TemplateRef<any>) {
        this.before.createEmbeddedView(tpl);
    }
    attachBottom(tpl: TemplateRef<any>) {
        this.after.createEmbeddedView(tpl);
    }
}
