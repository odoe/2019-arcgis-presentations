<!-- .slide: data-background="./Images/bg-1.jpeg" -->
<!-- .slide: class="title" -->

<h1 style="text-align: right; font-size: 80px;">Leveraging Vector Tile Layers</h1>
<h2 style="text-align: right; font-size: 60px;">in Web Apps</h2>
<p style="text-align: right; font-size: 30px;">Patrick Arlt | René Rubalcava</p>
    <p style="text-align: right; font-size: 30px;">slides: <a href="https://git.io/fjrz4" target="_blank">https://git.io/fjrz4</a></p>

<!--
Description:
Come to this session to learn about working with vector tile layers in apps built with the ArcGIS API for JavaScript. We’ll show you how you can enable map interactivity and client-side styling, without compromising performance. We’ll also demonstrate the vector tile style editor which can be used to style your own vector tile layers or customize Esri’s vector tile basemaps.
-->

----

### **Agenda**
</br>
 - What are Vector Tiles?
 - Benefits
 - Gotchas
 - Cool stuff

----

<!-- .slide: data-background="./Images/bg-3.jpeg" -->

## **What are Vector Tiles?**

* Geographic data > Pre cooked tiles
* Tiles are just binary data ([PBF](https://docs.mapbox.com/vector-tiles/specification/))
* Styles defined in separate JSON file
* Drawn on the client using WebGL

----

## What is a style?

* `version` - style specification version. always set to `8`
* `sprite` - sprite images and data, used for patterns and icons
* `glyphs` - font source for the tiles
* `sources` - data sources for tiles, can be multiple sources
* `layers` - define how layers of the tiles will rendered

[Example Style JSON](https://gist.github.com/patrickarlt/bb5adccfb447888aedcda64c97522985)

----

<!-- .slide: data-background="./Images/bg-3.jpeg" -->

### **Benefits**

<div style="display:flex; align-items: center;">
  <ul style="width: calc(100% - 650px - 1rem); float: left;">
    <li>Infinite resolution</li>
    <li>Smooth zooming</li>
    <li>Easy to customize</li>
    <li>Low disk space (world = ~20 Gb)</li>
    <li>Fast cook times (world = ~8 hours)</li>
    <li>Indexable</li>
    <li>Overzoom</li>
  </ul>
  <img src="./Images/index.png" alt="Indexed vector tiles" style="width: 650px; float: right;">
</div>

----

### **Gotchas**

* Attribute data for styling only
* Limited interaction
* `FeatureLayer` is faster in some cases

----

<!-- .slide: data-background="./Images/bg-3.jpeg" -->

### **Cool stuff**

* [Watercolour basemap](https://www.arcgis.com/home/webmap/viewer.html?webmap=21812b28afea4091bc57472297aa73d4)
* [Vector Tile Style Editor](https://developers.arcgis.com/vector-tile-style-editor)

----

### Vector Tile Style Editor

<img src="./Images/vtse.png" alt="Vector Tile Style Editor Screenshot" style="max-height: 50vh">

Customize the style of your own or Esri's vector tiles styles.

[Tutorial](https://developers.arcgis.com/labs/arcgisonline/style-a-vector-basemap/)

----

<!-- .slide: data-background="./Images/bg-3.jpeg" -->

### Loading Styles


```js
// Load by style url
new VectorTileLayer({
    url: 'https://www.arcgis.com/sharing/rest/content/items/.../resources/styles/root.json'
})
```

```js
// Load tile service
// uses default style of service
new VectorTileLayer({
    url: 'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer'
})
```

```js
// Load by portalItem
new VectorTileLayer({
    portalItem: { id: 'itemid' }
})
```

----

### Load Styles

```js
// Load with style JSON
new VectorTileLayer({
  style: {
    version: 8,
    sources: {
      esri: {
        type: "vector",
        url: "https://VectorTileServiceURL"
      }
    },
    layers: [...]
  }
})
```

----

<!-- .slide: data-background="./Images/bg-3.jpeg" -->

### Styles and Interactivity

* Define style by JSON
* Can interact with Vector Style layers
* No attribute data other than what's needed to render
* Geometries can be split on tiles

```js
const vtLayer = new VectorTileLayer({
    style: {
        layers: [...]
        glyphs: ...
        sprite: ...
        sources: { ... }
        version: 8
    }
});
```

----

### Interactivity

```js
view.on("pointer-move", event => {
    view.hitTest(event).then(({ results }) => {
        // returns graphics with attribute data
        // on the layer in the style that you
        // are interacting with
    });
});
```

* [Demo](https://codepen.io/odoe/pen/ewyrNB?editors=0010)

----

<!-- .slide: data-background="./Images/bg-3.jpeg" -->

### **Where can I get more info?**

----

<!-- .slide: data-background="./Images/bg-2.png" -->

<img src="./Images/esri-science-logo-white.png" style="border: 0px; background:none; box-shadow: none;">

----

<!-- .slide: data-background="./Images/2019_UC_Survey_Slide.png" -->
