define(["require", "exports", "legofy"], function (require, exports, legofy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.config = {
        proxyUrl: "/proxy"
    };
    function proxyUrl(url) {
        return exports.config.proxyUrl + "?" + url;
    }
    exports.proxyUrl = proxyUrl;
    exports.transform = legofy_1.transform;
});
//# sourceMappingURL=blockify.js.map