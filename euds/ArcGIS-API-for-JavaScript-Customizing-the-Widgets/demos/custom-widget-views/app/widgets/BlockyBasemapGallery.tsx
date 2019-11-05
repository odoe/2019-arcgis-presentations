import BasemapGallery = require("esri/widgets/BasemapGallery");
import BasemapGalleryItem = require("esri/widgets/BasemapGallery/support/BasemapGalleryItem");

import { proxyUrl, transform } from "../support/blockify";
import { declared, subclass } from "esri/core/accessorSupport/decorators";
import { tsx } from 'esri/widgets/support/widget';

const CSS = {
  loader: "esri-basemap-gallery__loader",
  item: "esri-basemap-gallery__item",
  itemTitle: "esri-basemap-gallery__item-title",
  itemThumbnail: "esri-basemap-gallery__item-thumbnail",
  selectedItem: "esri-basemap-gallery__item--selected",
  itemLoading: "esri-basemap-gallery__item--loading",
  itemError: "esri-basemap-gallery__item--error"
};

// use interface merging to avoid re-implementing private members
interface BlockyBasemapGallery {
  _handleClick: Function;
}

@subclass("esri.demos.BlockyBasemapGallery")
class BlockyBasemapGallery extends declared(BasemapGallery) {

  // based on https://github.com/Esri/arcgis-js-api/blob/4master/widgets/BasemapGallery.tsx
  private _renderBasemapGalleryItem(item: BasemapGalleryItem): VNode {
    const thumbnailUrl = item.get<string>("basemap.thumbnailUrl");
    const thumbnailSource = thumbnailUrl;
    const title = item.get<string>("basemap.title");
    const snippet = item.get<string>("basemap.portalItem.snippet");
    const tooltip = item.get<string>("error.message") || snippet || title;
    const tabIndex = item.state === "ready" ? 0 : -1;
    const isSelected = this.viewModel.basemapEquals(item.basemap, this.activeBasemap);

    const itemClasses = {
      [CSS.selectedItem]: isSelected,
      [CSS.itemLoading]: item.state === "loading",
      [CSS.itemError]: item.state === "error"
    };

    const loader =
            item.state === "loading" ? (
              <div class={CSS.loader} key="esri-basemap-gallery__loader" />
            ) : null;

    return (
      <li
        aria-selected={isSelected}
        bind={this}
        class={this.classes(CSS.item, itemClasses)}
        data-item={item}
        onkeydown={this._handleClick}
        onclick={this._handleClick}
        role="menuitem"
        tabIndex={tabIndex}
        title={tooltip}
      >
        {loader}
        {thumbnailSource ?
         <img afterCreate={transform} alt="" class={CSS.itemThumbnail}
              src={proxyUrl(thumbnailSource)} /> : null}
        <div class={CSS.itemTitle}>{title}</div>
      </li>
    );
  }

}

export = BlockyBasemapGallery;
