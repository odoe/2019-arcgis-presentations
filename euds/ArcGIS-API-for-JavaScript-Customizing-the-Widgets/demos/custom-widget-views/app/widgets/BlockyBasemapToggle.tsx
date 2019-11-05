import BasemapToggle = require("esri/widgets/BasemapToggle");
import i18n = require("dojo/i18n!esri/widgets/BasemapToggle/nls/BasemapToggle");

import { proxyUrl, transform } from "../support/blockify";
import { declared, subclass } from "esri/core/accessorSupport/decorators";
import { tsx } from 'esri/widgets/support/widget';

const CSS = {
  base: "esri-basemap-toggle esri-widget",
  secondaryBasemapImage: "esri-basemap-toggle__image--secondary",

  container: "esri-basemap-thumbnail esri-basemap-toggle__container",
  image: "esri-basemap-thumbnail__image esri-basemap-toggle__image",
  overlay: "esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",
  title: "esri-basemap-thumbnail__title esri-basemap-toggle__title",
};

// use interface merging to avoid re-implementing private members
interface BlockyBasemapToggle {
  _toggle: Function;
}

@subclass("esri.demos.BlockyBasemapToggle")
class BlockyBasemapToggle extends declared(BasemapToggle) {

  // based on https://github.com/Esri/arcgis-js-api/blob/4master/widgets/BasemapToggle.tsx
  render(): VNode {
    const vm = this.viewModel;
    const activeBasemap = vm.state === "disabled" ? null : vm.activeBasemap;
    const nextBasemap = vm.state === "disabled" ? null : vm.nextBasemap;
    const title = nextBasemap ? nextBasemap.title : "";

    let titleNode: any;

    if (this.titleVisible && title) {
      titleNode = (
        <div class={CSS.overlay} key="esri-basemap-toggle__overlay">
          <span class={CSS.title} title={title}>
            {title}
          </span>
        </div>
      );
    }

    return (
      <div
        class={CSS.base}
        role="button"
        data-basemap-id={nextBasemap ? nextBasemap.id : ""}
        bind={this}
        onclick={this._toggle}
        onkeydown={this._toggle}
        tabIndex={0}
        title={i18n.toggle}
      >
        <div class={this.classes(CSS.container, CSS.secondaryBasemapImage)}>
          {activeBasemap ? <img afterCreate={transform} afterUpdate={transform}
                                class={CSS.image}
                                key={nextBasemap.thumbnailUrl}
                                src={proxyUrl(activeBasemap.thumbnailUrl)} /> : null}
        </div>
        <div class={CSS.container}>
          {nextBasemap ? <img afterCreate={transform} afterUpdate={transform}
                              class={CSS.image}
                              key={nextBasemap.thumbnailUrl}
                              src={proxyUrl(nextBasemap.thumbnailUrl)} /> : null}
          {titleNode}
        </div>
      </div>
    );
  }
}

export = BlockyBasemapToggle;
