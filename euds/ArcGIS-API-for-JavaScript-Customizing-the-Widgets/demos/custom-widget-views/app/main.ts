import BasemapToggle = require("esri/widgets/BasemapToggle");
import BasemapGallery = require("esri/widgets/BasemapGallery");
import Bookmarks = require("esri/widgets/Bookmarks");
import Expand = require("esri/widgets/Expand");

import Map = require("esri/Map");
import MapView = require("esri/views/MapView");
import { bookmarks as bookmarksJSON } from "./support/json";

// map setup

const map = new Map({
  basemap: "topo"
});

const view = new MapView({
  container: "viewDiv",
  map,
  center: [-86.049, 38.485],
  zoom: 3
});

// widget setup

const group = "demo";

const basemapGalleryExpand = new Expand({
  group,
  view,
  content: new BasemapGallery({ view })
});

const bookmarksExpand = new Expand({
  group,
  view,
  content: new Bookmarks({ view, bookmarks: bookmarksJSON })
});

const basemapToggle = new BasemapToggle({
  view,
  nextBasemap: "hybrid"
});

// add widgets to our map

view.ui.add(basemapGalleryExpand, "top-right");
view.ui.add(bookmarksExpand, "top-right");
view.ui.add(basemapToggle, "bottom-right");
