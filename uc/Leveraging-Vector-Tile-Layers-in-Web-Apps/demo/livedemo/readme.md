## Live Demo Script

In this demo we are going to convert the [Add a legend to a layer list](https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=widgets-layerlist-legend) sample from JavaScript to TypeScript.

1. First let's create a package.json file. This is a file that lists all the packages your project depends on. This file can be created via the cli by answering some questions or just by typing `npm init --yes` to accept the default values.

*Note*: Additional info can be found in the [package.json](https://docs.npmjs.com/creating-a-package-json-file) doc.

2. Install the typings for the ArcGIS API for JavaScript. In this demo we are working with version 4.x. Typings are also available for version 3.x of the api. To install the typings type `npm install --save @types/arcgis-js-api` at the command line.

*Note*:The typings files provide typescript with type information about an api that is written in JavaScript.

3. Create a tsconfig.json file. This file specifies root files and complier options for TypeScript. See the [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) doc for details on options.


4. Create application structure. We'll create an app folder that will contain our typescript files.


5. Create tsconfig file to define compiler options for typescript
```
{
  "compilerOptions": {
    "lib": ["dom", "es2015.promise", "es5"],
    "module": "amd", // output files as AMD modules
    "sourceMap": true,
    "target": "es5",
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true,
    "esModuleInterop": true
  }
}

```
  - esModuleInterop lets us use `import WebMap from "esri/WebMap` instead of 'import requires'
  - For custom widgets you'll want to set jsx and jsxFactory.
  ```
    "jsx": "react",
    "jsxFactory": "tsx",
  ```

6. Copy over code from sample
  - Copy/paste javascript into .ts file
  - Modify requires to import
  ```import WebMap from "esri/WebMap";```
  - Transpile with `tsc` and test. At this point it should work.
  - Take a quick look at output JavaScript
  - Demo code assist
  - Optionally do a few [es6](https://codeburst.io/javascript-wtf-is-es6-es8-es-2017-ecmascript-dca859e4821c) things.
      - Shorthand property names
      - Fat arrow functions. More info on these can be found [here](https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc)


