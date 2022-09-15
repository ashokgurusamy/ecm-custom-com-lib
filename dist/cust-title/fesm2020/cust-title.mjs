import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';

class CustTitleService {
    constructor() { }
}
CustTitleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: CustTitleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CustTitleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: CustTitleService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: CustTitleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CustTitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustTitleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: CustTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustTitleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.1", type: CustTitleComponent, selector: "ui-cust-title", inputs: { title: "title" }, ngImport: i0, template: `
    <h1>
      {{title}}
    </h1>
  `, isInline: true, styles: ["h1{font-weight:700;color:#04048f}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: CustTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-cust-title', template: `
    <h1>
      {{title}}
    </h1>
  `, styles: ["h1{font-weight:700;color:#04048f}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }] } });

class CustTitleModule {
}
CustTitleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: CustTitleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CustTitleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.1", ngImport: i0, type: CustTitleModule, declarations: [CustTitleComponent], exports: [CustTitleComponent] });
CustTitleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: CustTitleModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: CustTitleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CustTitleComponent
                    ],
                    imports: [],
                    exports: [
                        CustTitleComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of cust-title
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CustTitleComponent, CustTitleModule, CustTitleService };
//# sourceMappingURL=cust-title.mjs.map
