import WebMap from "esri/WebMap";
import MapView from "esri/views/MapView";
import LayerList from "esri/widgets/LayerList";

import esri = __esri;

const map = new WebMap({
  portalItem: {
    id: "d5dda743788a4b0688fe48f43ae7beb9"
  }
});

// Add the map to a MapView
const view = new MapView({
  container: "viewDiv",
  map
});

// Add a legend instance to the panel of a
// ListItem in a LayerList instance
const layerList = new LayerList({
  view,
  listItemCreatedFunction: event => {
    const item: esri.ListItem = event.item;
    if (item.layer.type != "group") {
      item.panel = {
        content: "legend",
        open: true
      } as esri.ListItemPanel;
    }
  }
});
// view.ui.add(layerList, "top-right");

