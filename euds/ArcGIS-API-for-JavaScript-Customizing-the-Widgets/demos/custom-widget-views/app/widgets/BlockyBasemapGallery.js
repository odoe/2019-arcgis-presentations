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
define(["require", "exports", "esri/widgets/BasemapGallery", "../support/blockify", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget"], function (require, exports, BasemapGallery, blockify_1, decorators_1, widget_1) {
    "use strict";
    var CSS = {
        loader: "esri-basemap-gallery__loader",
        item: "esri-basemap-gallery__item",
        itemTitle: "esri-basemap-gallery__item-title",
        itemThumbnail: "esri-basemap-gallery__item-thumbnail",
        selectedItem: "esri-basemap-gallery__item--selected",
        itemLoading: "esri-basemap-gallery__item--loading",
        itemError: "esri-basemap-gallery__item--error"
    };
    var BlockyBasemapGallery = /** @class */ (function (_super) {
        __extends(BlockyBasemapGallery, _super);
        function BlockyBasemapGallery() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // based on https://github.com/Esri/arcgis-js-api/blob/4master/widgets/BasemapGallery.tsx
        BlockyBasemapGallery.prototype._renderBasemapGalleryItem = function (item) {
            var _a;
            var thumbnailUrl = item.get("basemap.thumbnailUrl");
            var thumbnailSource = thumbnailUrl;
            var title = item.get("basemap.title");
            var snippet = item.get("basemap.portalItem.snippet");
            var tooltip = item.get("error.message") || snippet || title;
            var tabIndex = item.state === "ready" ? 0 : -1;
            var isSelected = this.viewModel.basemapEquals(item.basemap, this.activeBasemap);
            var itemClasses = (_a = {},
                _a[CSS.selectedItem] = isSelected,
                _a[CSS.itemLoading] = item.state === "loading",
                _a[CSS.itemError] = item.state === "error",
                _a);
            var loader = item.state === "loading" ? (widget_1.tsx("div", { class: CSS.loader, key: "esri-basemap-gallery__loader" })) : null;
            return (widget_1.tsx("li", { "aria-selected": isSelected, bind: this, class: this.classes(CSS.item, itemClasses), "data-item": item, onkeydown: this._handleClick, onclick: this._handleClick, role: "menuitem", tabIndex: tabIndex, title: tooltip },
                loader,
                thumbnailSource ?
                    widget_1.tsx("img", { afterCreate: blockify_1.transform, alt: "", class: CSS.itemThumbnail, src: blockify_1.proxyUrl(thumbnailSource) }) : null,
                widget_1.tsx("div", { class: CSS.itemTitle }, title)));
        };
        BlockyBasemapGallery = __decorate([
            decorators_1.subclass("esri.demos.BlockyBasemapGallery")
        ], BlockyBasemapGallery);
        return BlockyBasemapGallery;
    }(decorators_1.declared(BasemapGallery)));
    return BlockyBasemapGallery;
});
//# sourceMappingURL=BlockyBasemapGallery.js.map