<!-- .slide: data-background="../common/images/bg-1.png" -->
<!-- .slide: class="title" -->

<h1 style="text-align: left; font-size: 80px;">ArcGIS API for JavaScript</h1>
<h2 style="text-align: left; font-size: 60px;">Customizing the Widgets</h2>
<p style="text-align: left; font-size: 30px;">Julian Kissling | Rene Rubalcava</p>
    <p style="text-align: left; font-size: 30px;">slides: <a href="https://git.io/Je0y6" target="_blank">https://git.io/Je0y6</a></p>

<!--
In this session, we'll cover how you can customize widgets in the ArcGIS API 4.x for JavaScript. You'll learn about widget view-models and how they make it easy to rewrite a widget's UI.
-->

----

# Agenda

- Set up dev environment
- Create a...
  - Custom Class
  - Simple Widget
  - Custom Widget
- Enhance Custom Widget

----

<!-- Presenter: Franco -->


# Setting up the Dev Environment

----

# Developer environment

<!-- background: section/content will tie into widget dev -->
<!-- background: including TS in all steps because it's needed for widget dev -->

JS API + TypeScript

----

# TypeScript

----

## Typed JavaScript

```ts
interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "Rocky", age: 33 };

person.age = "24"; // TS2322: Type '"24"' is not assignable to type 'number'
person.height = 5.11; // TS2339: property 'height' does not exist on type 'Person'
```

----

## JS of the future, now

```ts
// let and const
let canChange = 5;
const cannotChange = 5;

// fat arrow functions
const logName = (person) => console.log(person.name);

// template strings
const greeting = `Hello, my name is ${person.name} and I am ${person.age} years old.`;

// destructuring
const { name, age } = person;

// property shorthand
const shorthand = { person };
```

----

## IDE Support

- Visual Studio
- WebStorm
- Sublime Text
- and more!

----

- Install TypeScript + JS API

----



## Dev Environment

- Installed TypeScript + JS API typings
- Built mapping application

----

## Creating a Class

----

## `esri/core/Accessor`

- JavaScript API foundation <!-- .element: class="fragment" data-fragment-index="0" -->
- Consistent developer experience <!-- .element: class="fragment" data-fragment-index="1" -->

```ts
// unified object constructor
const me = new Person({ name: "Franco", age: 33 });

// watch for changes to `age`
me.watch("age", singHappyBirthday);
```

<!-- .element: class="fragment" data-fragment-index="1" -->

----


```ts
// fetches webmaps from a portal and provides APIs to work with them
interface CustomClass {
  // used to fetch webmaps items
  portal: Portal;
  webMapGroupId: string;

  // active webmap and all fetched ones
  readonly active: PortalItem;
  readonly webMaps: PortalItem[];

  // will be updated with the active webmap
  view: MapView;

  // moves to the next webmap
  next(): void;
}
```

----

## Demo Recap: Custom Class

- Implemented `CustomClass`
  - Extended `esri/core/Accessor`
  - Created properties with `@property`
  - Typed constructor arguments
  - Created public + private methods

----


<!-- Presenter: Matt -->

# Writing a Widget

----

## About Widgets

- What? <!-- .element: class="fragment" data-fragment-index="1" -->
  - Encapsulated UI components
  - Cohesive (integrated, unified)
  - Single-purpose pieces of functionality
- Why? <!-- .element: class="fragment" data-fragment-index="2" -->
  - Reusable
  - Interchangeable
- How? <!-- .element: class="fragment" data-fragment-index="3" -->
  - Extend `esri/Widgets/Widget`

----

## `esri/widgets/Widget`

- Base widget class (View)
- Extends `esri/core/Accessor`
  - Properties
  - Watching properties
- Lifecycle

----

## Lifecycle

- `constructor`
- `postInitialize`
- `render`
- `destroy`

----

## `render`

- Defines UI
- Reacts to state changes
- Uses JSX (VDOM)

----


Write simple widget

----

## Simple View

- Extended `esri/widgets/Widget`
- Implemented `render()`
- Added a `renderable()` property
- Added `onclick` event
- Added CSS Object + [BEM Methodology](http://getbem.com/)
- Toggled property with event to re-render

----


# Improving Our Widget

----

## Architecture

- Separation of concerns
  - Views + ViewModels
  - UI replacement
  - Easier integration

----

## Views

- Extend `esri/widgets/Widget`
- Rely on ViewModel
- Focus on UI

----

## ViewModels

- Extend `esri/core/Accessor`
- Provide APIs to support View
- Focus on business logic

----

## View + ViewModel in action

<!-- todo: maybe create graphic for this -->

- View renders the state of the VM <!-- .element: class="fragment" data-fragment-index="1" -->
  - Looks at properties on VM and renders accordingly
- User interacts with View (property/method)<!-- .element: class="fragment" data-fragment-index="2" -->
  - Causes a change on VM or View
- View updates <!-- .element: class="fragment" data-fragment-index="5" -->
  - Renders again due to changes on VM

----

## Demos

----

## Additional Resources

- [Implementing Accessor](https://developers.arcgis.com/javascript/latest/guide/implementing-accessor/index.html)
- [Setting up TypeScript](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html)
- [Widget Development](https://developers.arcgis.com/javascript/latest/guide/custom-widget/index.html)
- [JavaScript API SDK](https://developers.arcgis.com/javascript/)
- [Styling](https://developers.arcgis.com/javascript/latest/guide/styling/index.html)
- [Widget Patterns](https://github.com/jcfranco/4x-widget-patterns)

----

# Question Time

----

<img src="../common/images/esri-science-logo-white.png" style="border: 0px; background:none; box-shadow: none;">

----

<!-- **please rate us** -->
<!-- .slide: data-background="../common/images/bg-rating.png" -->
