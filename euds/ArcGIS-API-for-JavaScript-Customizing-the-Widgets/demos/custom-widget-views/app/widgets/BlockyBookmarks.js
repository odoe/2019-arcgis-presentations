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
define(["require", "exports", "esri/widgets/Bookmarks", "esri/core/accessorSupport/decorators"], function (require, exports, Bookmarks, decorators_1) {
    "use strict";
    var CSS = {
        bookmark: "esri-bookmarks__bookmark",
        bookmarkButton: "esri-bookmarks__bookmark-button",
        bookmarkImageContainer: "esri-bookmarks__bookmark-image-container",
        bookmarkIcon: "esri-bookmarks__bookmark-icon",
        bookmarkImage: "esri-bookmarks__image",
        bookmarkName: "esri-bookmarks__bookmark-name",
        bookmarkActive: "esri-bookmarks__bookmark--active",
        // common
        esriButton: "esri-button",
        esriButtonTertiary: "esri-button--tertiary",
        iconEdit: "esri-icon-edit",
        widgetIcon: "esri-icon-bookmark"
    };
    var BlockyBookmarks = /** @class */ (function (_super) {
        __extends(BlockyBookmarks, _super);
        function BlockyBookmarks() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BlockyBookmarks = __decorate([
            decorators_1.subclass("esri.demos.BlockyBookmarks")
        ], BlockyBookmarks);
        return BlockyBookmarks;
    }(decorators_1.declared(Bookmarks)));
    return BlockyBookmarks;
});
//# sourceMappingURL=BlockyBookmarks.js.map