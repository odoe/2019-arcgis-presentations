import Bookmarks = require("esri/widgets/Bookmarks");
import Bookmark = require("esri/webmap/Bookmark");
import i18nCommon = require("dojo/i18n!esri/nls/common");

import { transform } from "../support/blockify";
import { declared, subclass } from "esri/core/accessorSupport/decorators";
import { tsx } from 'esri/widgets/support/widget';

const CSS = {
  bookmark: "esri-bookmarks__bookmark",
  bookmarkButton: "esri-bookmarks__bookmark-button",
  bookmarkImageContainer: "esri-bookmarks__bookmark-image-container",
  bookmarkIcon: "esri-bookmarks__bookmark-icon",
  bookmarkImage: "esri-bookmarks__image",
  bookmarkName: "esri-bookmarks__bookmark-name",
  bookmarkActive: "esri-bookmarks__bookmark--active",

  // common
  esriButton: "esri-button",
  esriButtonTertiary: "esri-button--tertiary",
  iconEdit: "esri-icon-edit",
  widgetIcon: "esri-icon-bookmark"
};

// use interface merging to avoid re-implementing private members
interface BlockyBookmarks {
  _showEditBookmarkForm: Function;
  _goToBookmark: Function;
  editingEnabled: boolean;
}

@subclass("esri.demos.BlockyBookmarks")
class BlockyBookmarks extends declared(Bookmarks) {

}

export = BlockyBookmarks;
