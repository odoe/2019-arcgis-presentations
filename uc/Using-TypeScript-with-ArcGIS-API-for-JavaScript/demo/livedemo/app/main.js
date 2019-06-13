var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/WebMap", "esri/views/MapView", "esri/widgets/LayerList"], function (require, exports, WebMap_1, MapView_1, LayerList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    WebMap_1 = __importDefault(WebMap_1);
    MapView_1 = __importDefault(MapView_1);
    LayerList_1 = __importDefault(LayerList_1);
    var map = new WebMap_1.default({
        portalItem: {
            id: "d5dda743788a4b0688fe48f43ae7beb9"
        }
    });
    // Add the map to a MapView
    var view = new MapView_1.default({
        container: "viewDiv",
        map: map
    });
    // Add a legend instance to the panel of a
    // ListItem in a LayerList instance
    var layerList = new LayerList_1.default({
        view: view,
        listItemCreatedFunction: function (event) {
            var item = event.item;
            if (item.layer.type != "group") {
                item.panel = {
                    content: "legend",
                    open: true
                };
            }
        }
    });
    view.ui.add(layerList, "top-right");
});
//# sourceMappingURL=main.js.map