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

---

### **Agenda**
</br>
 - What are Vector Tiles?
 - Benefits
 - Gotchas
 - Cool stuff

---
<!-- .slide: data-background="./Images/bg-3.jpeg" -->

### **What are Vector Tiles?**

---
<!-- .slide: data-background="./Images/bg-3.jpeg" -->

### **Benefits**

---
<!-- .slide: data-background="./Images/bg-3.jpeg" -->

### **Gotchas**

---
<!-- .slide: data-background="./Images/bg-3.jpeg" -->

### **Cool stuff**

---

### Styles and Interactivity

* Define style by JSON
* Can interact with Vector Style layers
* No attribute data other than what's needed to render
* Geometries can be split on tiles

---

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

---

### **Where can I get more info?**

---

<!-- .slide: data-background="./Images/2019_UC_Survey_Slide.png" -->

---

<!-- .slide: data-background="./Images/bg-esri.png" -->
