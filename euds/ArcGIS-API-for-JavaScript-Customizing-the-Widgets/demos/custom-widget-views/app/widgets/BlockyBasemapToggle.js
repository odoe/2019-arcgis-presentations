var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/widgets/BasemapToggle", "dojo/i18n!esri/widgets/BasemapToggle/nls/BasemapToggle", "../support/blockify", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget"], function (require, exports, BasemapToggle, i18n, blockify_1, decorators_1, widget_1) {
    "use strict";
    var CSS = {
        base: "esri-basemap-toggle esri-widget",
        secondaryBasemapImage: "esri-basemap-toggle__image--secondary",
        container: "esri-basemap-thumbnail esri-basemap-toggle__container",
        image: "esri-basemap-thumbnail__image esri-basemap-toggle__image",
        overlay: "esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",
        title: "esri-basemap-thumbnail__title esri-basemap-toggle__title",
    };
    var BlockyBasemapToggle = /** @class */ (function (_super) {
        __extends(BlockyBasemapToggle, _super);
        function BlockyBasemapToggle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // based on https://github.com/Esri/arcgis-js-api/blob/4master/widgets/BasemapToggle.tsx
        BlockyBasemapToggle.prototype.render = function () {
            var vm = this.viewModel;
            var activeBasemap = vm.state === "disabled" ? null : vm.activeBasemap;
            var nextBasemap = vm.state === "disabled" ? null : vm.nextBasemap;
            var title = nextBasemap ? nextBasemap.title : "";
            var titleNode;
            if (this.titleVisible && title) {
                titleNode = (widget_1.tsx("div", { class: CSS.overlay, key: "esri-basemap-toggle__overlay" },
                    widget_1.tsx("span", { class: CSS.title, title: title }, title)));
            }
            return (widget_1.tsx("div", { class: CSS.base, role: "button", "data-basemap-id": nextBasemap ? nextBasemap.id : "", bind: this, onclick: this._toggle, onkeydown: this._toggle, tabIndex: 0, title: i18n.toggle },
                widget_1.tsx("div", { class: this.classes(CSS.container, CSS.secondaryBasemapImage) }, activeBasemap ? widget_1.tsx("img", { afterCreate: blockify_1.transform, afterUpdate: blockify_1.transform, class: CSS.image, key: nextBasemap.thumbnailUrl, src: blockify_1.proxyUrl(activeBasemap.thumbnailUrl) }) : null),
                widget_1.tsx("div", { class: CSS.container },
                    nextBasemap ? widget_1.tsx("img", { afterCreate: blockify_1.transform, afterUpdate: blockify_1.transform, class: CSS.image, key: nextBasemap.thumbnailUrl, src: blockify_1.proxyUrl(nextBasemap.thumbnailUrl) }) : null,
                    titleNode)));
        };
        BlockyBasemapToggle = __decorate([
            decorators_1.subclass("esri.demos.BlockyBasemapToggle")
        ], BlockyBasemapToggle);
        return BlockyBasemapToggle;
    }(decorators_1.declared(BasemapToggle)));
    return BlockyBasemapToggle;
});
//# sourceMappingURL=BlockyBasemapToggle.js.map