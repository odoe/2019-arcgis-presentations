define(["require", "exports", "esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery", "esri/widgets/Bookmarks", "esri/widgets/Expand", "esri/Map", "esri/views/MapView", "./support/json"], function (require, exports, BasemapToggle, BasemapGallery, Bookmarks, Expand, Map, MapView, json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // map setup
    var map = new Map({
        basemap: "topo"
    });
    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-86.049, 38.485],
        zoom: 3
    });
    // widget setup
    var group = "demo";
    var basemapGalleryExpand = new Expand({
        group: group,
        view: view,
        content: new BasemapGallery({ view: view })
    });
    var bookmarksExpand = new Expand({
        group: group,
        view: view,
        content: new Bookmarks({ view: view, bookmarks: json_1.bookmarks })
    });
    var basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "hybrid"
    });
    // add widgets to our map
    view.ui.add(basemapGalleryExpand, "top-right");
    view.ui.add(bookmarksExpand, "top-right");
    view.ui.add(basemapToggle, "bottom-right");
});
//# sourceMappingURL=main.js.map