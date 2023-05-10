// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"mJyaU":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2dc4337a18bf98e9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jOjML":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _auto = require("chart.js/auto");
var _autoDefault = parcelHelpers.interopDefault(_auto);
var _chartjsPluginZoom = require("chartjs-plugin-zoom");
var _chartjsPluginZoomDefault = parcelHelpers.interopDefault(_chartjsPluginZoom);
var _2023Json = require("../data/t-rustdoc/2023.json");
var _2023JsonDefault = parcelHelpers.interopDefault(_2023Json);
var _2022Json = require("../data/t-rustdoc/2022.json");
var _2022JsonDefault = parcelHelpers.interopDefault(_2022Json);
var _2021Json = require("../data/t-rustdoc/2021.json");
var _2021JsonDefault = parcelHelpers.interopDefault(_2021Json);
var _2020Json = require("../data/t-rustdoc/2020.json");
var _2020JsonDefault = parcelHelpers.interopDefault(_2020Json);
var _common = require("../common");
(0, _autoDefault.default).register((0, _chartjsPluginZoomDefault.default));
(async function() {
    const ctx_prs_days_open_2023 = document.getElementById("prs_days_open_2023");
    const ctx_prs_days_open_2022 = document.getElementById("prs_days_open_2022");
    const ctx_prs_days_open_2021 = document.getElementById("prs_days_open_2021");
    const ctx_prs_days_open_2020 = document.getElementById("prs_days_open_2020");
    // PRs 2023: configure and create
    const data_2023 = {
        labels: (0, _2023JsonDefault.default).map((row)=>row.woy),
        datasets: [
            {
                label: "Up to 10 days",
                data: (0, _2023JsonDefault.default).map((row)=>row.up_to_10),
                backgroundColor: "#66b237"
            },
            {
                label: "Up to 30 days",
                data: (0, _2023JsonDefault.default).map((row)=>row.up_to_30),
                backgroundColor: "orange"
            },
            {
                label: "More than 60 days",
                data: (0, _2023JsonDefault.default).map((row)=>row.over_60),
                backgroundColor: "red"
            }
        ]
    };
    // clone plugin config and customize title
    const plugins_2023 = structuredClone((0, _common.plugins));
    plugins_2023.title.text = "[2023] How long are PRs sitting open before being closed?";
    const config_2023 = {
        type: "line",
        data: data_2023,
        options: {
            scales: (0, _common.scales),
            plugins: plugins_2023,
            elements: (0, _common.elements),
            onClick (e) {
                const chart = e.chart;
                console.debug("Clicked: " + chart.options.plugins.title.text);
                chart.options.plugins.zoom.zoom.wheel.enabled = !chart.options.plugins.zoom.zoom.wheel.enabled;
                chart.options.plugins.zoom.zoom.pinch.enabled = !chart.options.plugins.zoom.zoom.pinch.enabled;
                chart.update();
            }
        }
    };
    const chart_2023 = new (0, _autoDefault.default)(ctx_prs_days_open_2023, config_2023);
    // PRs 2022: configure and create
    const data_2022 = {
        labels: (0, _2022JsonDefault.default).map((row)=>row.woy),
        datasets: [
            {
                label: "Up to 10 days",
                data: (0, _2022JsonDefault.default).map((row)=>row.up_to_10),
                backgroundColor: "#66b237"
            },
            {
                label: "Up to 30 days",
                data: (0, _2022JsonDefault.default).map((row)=>row.up_to_30),
                backgroundColor: "orange"
            },
            {
                label: "More than 60 days",
                data: (0, _2022JsonDefault.default).map((row)=>row.over_60),
                backgroundColor: "red"
            }
        ]
    };
    // clone plugin config and customize title
    const plugins_2022 = structuredClone((0, _common.plugins));
    plugins_2022.title.text = "[2022] How long are PRs sitting open before being closed?";
    const config_2022 = {
        type: "line",
        data: data_2022,
        options: {
            scales: (0, _common.scales),
            plugins: plugins_2022,
            elements: (0, _common.elements),
            onClick (e) {
                const chart = e.chart;
                console.debug("Clicked: " + chart.options.plugins.title.text);
                chart.options.plugins.zoom.zoom.wheel.enabled = !chart.options.plugins.zoom.zoom.wheel.enabled;
                chart.options.plugins.zoom.zoom.pinch.enabled = !chart.options.plugins.zoom.zoom.pinch.enabled;
                chart.update();
            }
        }
    };
    const chart_2022 = new (0, _autoDefault.default)(ctx_prs_days_open_2022, config_2022);
    // PRs 2021: configure and create
    const data_2021 = {
        labels: (0, _2021JsonDefault.default).map((row)=>row.woy),
        datasets: [
            {
                label: "Up to 10 days",
                data: (0, _2021JsonDefault.default).map((row)=>row.up_to_10),
                backgroundColor: "#66b237"
            },
            {
                label: "Up to 30 days",
                data: (0, _2021JsonDefault.default).map((row)=>row.up_to_30),
                backgroundColor: "orange"
            },
            {
                label: "More than 60 days",
                data: (0, _2021JsonDefault.default).map((row)=>row.over_60),
                backgroundColor: "red"
            }
        ]
    };
    // clone plugin config and customize title
    const plugins_2021 = structuredClone((0, _common.plugins));
    plugins_2021.title.text = "[2021] How long are PRs sitting open before being closed?";
    const config_2021 = {
        type: "line",
        data: data_2021,
        options: {
            scales: (0, _common.scales),
            plugins: plugins_2021,
            elements: (0, _common.elements),
            onClick (e) {
                const chart = e.chart;
                console.debug("Clicked: " + chart.options.plugins.title.text);
                chart.options.plugins.zoom.zoom.wheel.enabled = !chart.options.plugins.zoom.zoom.wheel.enabled;
                chart.options.plugins.zoom.zoom.pinch.enabled = !chart.options.plugins.zoom.zoom.pinch.enabled;
                chart.update();
            }
        }
    };
    const chart_2021 = new (0, _autoDefault.default)(ctx_prs_days_open_2021, config_2021);
    // PRs 2020: configure and create
    const data_2020 = {
        labels: (0, _2020JsonDefault.default).map((row)=>row.woy),
        datasets: [
            {
                label: "Up to 10 days",
                data: (0, _2020JsonDefault.default).map((row)=>row.up_to_10),
                backgroundColor: "#66b237"
            },
            {
                label: "Up to 30 days",
                data: (0, _2020JsonDefault.default).map((row)=>row.up_to_30),
                backgroundColor: "orange"
            },
            {
                label: "More than 60 days",
                data: (0, _2020JsonDefault.default).map((row)=>row.over_60),
                backgroundColor: "red"
            }
        ]
    };
    // clone plugin config and customize title
    const plugins_2020 = structuredClone((0, _common.plugins));
    plugins_2020.title.text = "[2020] How long are PRs sitting open before being closed?";
    const config_2020 = {
        type: "line",
        data: data_2020,
        options: {
            scales: (0, _common.scales),
            plugins: plugins_2020,
            elements: (0, _common.elements),
            onClick (e) {
                const chart = e.chart;
                console.debug("Clicked: " + chart.options.plugins.title.text);
                chart.options.plugins.zoom.zoom.wheel.enabled = !chart.options.plugins.zoom.zoom.wheel.enabled;
                chart.options.plugins.zoom.zoom.pinch.enabled = !chart.options.plugins.zoom.zoom.pinch.enabled;
                chart.update();
            }
        }
    };
    const chart_2020 = new (0, _autoDefault.default)(ctx_prs_days_open_2020, config_2020);
    const resetZoomBtn2023 = ()=>{
        chart_2023.resetZoom();
    };
    const resetZoomBtn2022 = ()=>{
        chart_2022.resetZoom();
    };
    const resetZoomBtn2021 = ()=>{
        chart_2021.resetZoom();
    };
    const resetZoomBtn2020 = ()=>{
        chart_2020.resetZoom();
    };
})();

},{"chart.js/auto":"d8NN9","chartjs-plugin-zoom":"kMtu7","../data/t-rustdoc/2023.json":"jfCsl","../data/t-rustdoc/2022.json":"149je","../data/t-rustdoc/2021.json":"iLYTl","../data/t-rustdoc/2020.json":"9Hvgh","../common":"8wzUn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jfCsl":[function(require,module,exports) {
module.exports = JSON.parse('[{"woy":"00","up_to_10":3,"up_to_30":3,"over_60":4},{"woy":"01","up_to_10":23,"up_to_30":23,"over_60":23},{"woy":"02","up_to_10":16,"up_to_30":16,"over_60":18},{"woy":"03","up_to_10":14,"up_to_30":14,"over_60":15},{"woy":"04","up_to_10":17,"up_to_30":18,"over_60":21},{"woy":"05","up_to_10":12,"up_to_30":13,"over_60":16},{"woy":"06","up_to_10":18,"up_to_30":22,"over_60":23},{"woy":"07","up_to_10":22,"up_to_30":26,"over_60":26},{"woy":"08","up_to_10":10,"up_to_30":10,"over_60":15},{"woy":"09","up_to_10":8,"up_to_30":10,"over_60":10},{"woy":"10","up_to_10":13,"up_to_30":13,"over_60":19},{"woy":"11","up_to_10":13,"up_to_30":14,"over_60":15},{"woy":"12","up_to_10":19,"up_to_30":22,"over_60":24},{"woy":"13","up_to_10":7,"up_to_30":8,"over_60":9}]');

},{}],"149je":[function(require,module,exports) {
module.exports = JSON.parse('[{"woy":"00","up_to_10":2,"up_to_30":3,"over_60":3},{"woy":"01","up_to_10":14,"up_to_30":21,"over_60":23},{"woy":"02","up_to_10":15,"up_to_30":17,"over_60":21},{"woy":"03","up_to_10":31,"up_to_30":34,"over_60":38},{"woy":"04","up_to_10":19,"up_to_30":23,"over_60":28},{"woy":"05","up_to_10":10,"up_to_30":13,"over_60":14},{"woy":"06","up_to_10":18,"up_to_30":18,"over_60":26},{"woy":"07","up_to_10":12,"up_to_30":16,"over_60":16},{"woy":"08","up_to_10":8,"up_to_30":10,"over_60":12},{"woy":"09","up_to_10":8,"up_to_30":11,"over_60":15},{"woy":"10","up_to_10":15,"up_to_30":19,"over_60":19},{"woy":"11","up_to_10":6,"up_to_30":8,"over_60":9},{"woy":"12","up_to_10":6,"up_to_30":6,"over_60":7},{"woy":"13","up_to_10":11,"up_to_30":12,"over_60":13},{"woy":"14","up_to_10":12,"up_to_30":13,"over_60":14},{"woy":"15","up_to_10":14,"up_to_30":16,"over_60":18},{"woy":"16","up_to_10":12,"up_to_30":14,"over_60":16},{"woy":"17","up_to_10":9,"up_to_30":9,"over_60":12},{"woy":"18","up_to_10":17,"up_to_30":17,"over_60":18},{"woy":"19","up_to_10":11,"up_to_30":13,"over_60":15},{"woy":"20","up_to_10":7,"up_to_30":12,"over_60":17},{"woy":"21","up_to_10":12,"up_to_30":14,"over_60":17},{"woy":"22","up_to_10":14,"up_to_30":16,"over_60":16},{"woy":"23","up_to_10":7,"up_to_30":8,"over_60":10},{"woy":"24","up_to_10":14,"up_to_30":14,"over_60":14},{"woy":"25","up_to_10":8,"up_to_30":8,"over_60":11},{"woy":"26","up_to_10":18,"up_to_30":18,"over_60":20},{"woy":"27","up_to_10":21,"up_to_30":23,"over_60":25},{"woy":"28","up_to_10":11,"up_to_30":12,"over_60":13},{"woy":"29","up_to_10":9,"up_to_30":10,"over_60":13},{"woy":"30","up_to_10":16,"up_to_30":17,"over_60":19},{"woy":"31","up_to_10":16,"up_to_30":16,"over_60":19},{"woy":"32","up_to_10":24,"up_to_30":27,"over_60":33},{"woy":"33","up_to_10":13,"up_to_30":14,"over_60":14},{"woy":"34","up_to_10":18,"up_to_30":19,"over_60":20},{"woy":"35","up_to_10":23,"up_to_30":23,"over_60":26},{"woy":"36","up_to_10":27,"up_to_30":28,"over_60":28},{"woy":"37","up_to_10":33,"up_to_30":34,"over_60":36},{"woy":"38","up_to_10":26,"up_to_30":26,"over_60":27},{"woy":"39","up_to_10":25,"up_to_30":27,"over_60":27},{"woy":"40","up_to_10":25,"up_to_30":25,"over_60":27},{"woy":"41","up_to_10":18,"up_to_30":19,"over_60":20},{"woy":"42","up_to_10":26,"up_to_30":29,"over_60":32},{"woy":"43","up_to_10":28,"up_to_30":30,"over_60":31},{"woy":"44","up_to_10":23,"up_to_30":26,"over_60":30},{"woy":"45","up_to_10":17,"up_to_30":18,"over_60":19},{"woy":"46","up_to_10":24,"up_to_30":24,"over_60":27},{"woy":"47","up_to_10":20,"up_to_30":21,"over_60":34},{"woy":"48","up_to_10":24,"up_to_30":25,"over_60":26},{"woy":"49","up_to_10":18,"up_to_30":20,"over_60":20},{"woy":"50","up_to_10":22,"up_to_30":25,"over_60":26},{"woy":"51","up_to_10":17,"up_to_30":18,"over_60":19},{"woy":"52","up_to_10":14,"up_to_30":14,"over_60":14}]');

},{}],"iLYTl":[function(require,module,exports) {
module.exports = JSON.parse('[{"woy":"00","up_to_10":8,"up_to_30":9,"over_60":10},{"woy":"01","up_to_10":12,"up_to_30":14,"over_60":15},{"woy":"02","up_to_10":9,"up_to_30":12,"over_60":13},{"woy":"03","up_to_10":11,"up_to_30":13,"over_60":15},{"woy":"04","up_to_10":11,"up_to_30":12,"over_60":14},{"woy":"05","up_to_10":10,"up_to_30":13,"over_60":13},{"woy":"06","up_to_10":6,"up_to_30":7,"over_60":9},{"woy":"07","up_to_10":7,"up_to_30":7,"over_60":9},{"woy":"08","up_to_10":15,"up_to_30":16,"over_60":21},{"woy":"09","up_to_10":17,"up_to_30":22,"over_60":27},{"woy":"10","up_to_10":12,"up_to_30":14,"over_60":14},{"woy":"11","up_to_10":6,"up_to_30":8,"over_60":9},{"woy":"12","up_to_10":8,"up_to_30":15,"over_60":16},{"woy":"13","up_to_10":12,"up_to_30":13,"over_60":15},{"woy":"14","up_to_10":16,"up_to_30":17,"over_60":20},{"woy":"15","up_to_10":8,"up_to_30":10,"over_60":16},{"woy":"16","up_to_10":17,"up_to_30":18,"over_60":20},{"woy":"17","up_to_10":12,"up_to_30":13,"over_60":16},{"woy":"18","up_to_10":9,"up_to_30":14,"over_60":15},{"woy":"19","up_to_10":13,"up_to_30":15,"over_60":19},{"woy":"20","up_to_10":13,"up_to_30":15,"over_60":15},{"woy":"21","up_to_10":6,"up_to_30":7,"over_60":8},{"woy":"22","up_to_10":3,"up_to_30":5,"over_60":10},{"woy":"23","up_to_10":7,"up_to_30":7,"over_60":8},{"woy":"24","up_to_10":8,"up_to_30":9,"over_60":12},{"woy":"25","up_to_10":13,"up_to_30":15,"over_60":20},{"woy":"26","up_to_10":4,"up_to_30":7,"over_60":9},{"woy":"27","up_to_10":8,"up_to_30":9,"over_60":11},{"woy":"28","up_to_10":13,"up_to_30":15,"over_60":15},{"woy":"29","up_to_10":8,"up_to_30":8,"over_60":9},{"woy":"30","up_to_10":6,"up_to_30":6,"over_60":6},{"woy":"31","up_to_10":2,"up_to_30":2,"over_60":3},{"woy":"32","up_to_10":3,"up_to_30":3,"over_60":4},{"woy":"33","up_to_10":4,"up_to_30":6,"over_60":13},{"woy":"34","up_to_10":5,"up_to_30":5,"over_60":5},{"woy":"35","up_to_10":10,"up_to_30":10,"over_60":10},{"woy":"36","up_to_10":7,"up_to_30":7,"over_60":10},{"woy":"37","up_to_10":5,"up_to_30":7,"over_60":9},{"woy":"38","up_to_10":6,"up_to_30":7,"over_60":7},{"woy":"39","up_to_10":7,"up_to_30":7,"over_60":9},{"woy":"40","up_to_10":4,"up_to_30":6,"over_60":8},{"woy":"41","up_to_10":5,"up_to_30":5,"over_60":5},{"woy":"42","up_to_10":9,"up_to_30":9,"over_60":10},{"woy":"43","up_to_10":15,"up_to_30":16,"over_60":17},{"woy":"44","up_to_10":12,"up_to_30":13,"over_60":13},{"woy":"45","up_to_10":9,"up_to_30":10,"over_60":13},{"woy":"46","up_to_10":9,"up_to_30":10,"over_60":11},{"woy":"47","up_to_10":20,"up_to_30":22,"over_60":22},{"woy":"48","up_to_10":9,"up_to_30":9,"over_60":10},{"woy":"49","up_to_10":10,"up_to_30":11,"over_60":14},{"woy":"50","up_to_10":23,"up_to_30":23,"over_60":24},{"woy":"51","up_to_10":11,"up_to_30":11,"over_60":12},{"woy":"52","up_to_10":11,"up_to_30":12,"over_60":13}]');

},{}],"9Hvgh":[function(require,module,exports) {
module.exports = JSON.parse('[{"woy":"01","up_to_10":2,"up_to_30":2,"over_60":2},{"woy":"02","up_to_10":4,"up_to_30":4,"over_60":4},{"woy":"03","up_to_10":3,"up_to_30":3,"over_60":3},{"woy":"04","up_to_10":2,"up_to_30":2,"over_60":2},{"woy":"08","up_to_10":1,"up_to_30":1,"over_60":1},{"woy":"12","up_to_10":0,"up_to_30":1,"over_60":1},{"woy":"14","up_to_10":1,"up_to_30":1,"over_60":1},{"woy":"16","up_to_10":1,"up_to_30":1,"over_60":1},{"woy":"17","up_to_10":1,"up_to_30":1,"over_60":1},{"woy":"20","up_to_10":0,"up_to_30":1,"over_60":1},{"woy":"22","up_to_10":0,"up_to_30":0,"over_60":1},{"woy":"23","up_to_10":0,"up_to_30":0,"over_60":1},{"woy":"24","up_to_10":0,"up_to_30":1,"over_60":1},{"woy":"25","up_to_10":1,"up_to_30":2,"over_60":2},{"woy":"27","up_to_10":1,"up_to_30":1,"over_60":2},{"woy":"28","up_to_10":0,"up_to_30":2,"over_60":4},{"woy":"29","up_to_10":2,"up_to_30":2,"over_60":2},{"woy":"30","up_to_10":4,"up_to_30":4,"over_60":6},{"woy":"31","up_to_10":6,"up_to_30":6,"over_60":7},{"woy":"32","up_to_10":7,"up_to_30":8,"over_60":8},{"woy":"33","up_to_10":6,"up_to_30":7,"over_60":9},{"woy":"34","up_to_10":15,"up_to_30":17,"over_60":19},{"woy":"35","up_to_10":7,"up_to_30":9,"over_60":11},{"woy":"36","up_to_10":6,"up_to_30":7,"over_60":7},{"woy":"37","up_to_10":8,"up_to_30":10,"over_60":10},{"woy":"38","up_to_10":4,"up_to_30":4,"over_60":6},{"woy":"39","up_to_10":5,"up_to_30":6,"over_60":6},{"woy":"40","up_to_10":5,"up_to_30":10,"over_60":11},{"woy":"41","up_to_10":13,"up_to_30":14,"over_60":16},{"woy":"42","up_to_10":6,"up_to_30":6,"over_60":6},{"woy":"43","up_to_10":2,"up_to_30":2,"over_60":6},{"woy":"44","up_to_10":3,"up_to_30":4,"over_60":6},{"woy":"45","up_to_10":8,"up_to_30":10,"over_60":12},{"woy":"46","up_to_10":9,"up_to_30":12,"over_60":16},{"woy":"47","up_to_10":18,"up_to_30":18,"over_60":19},{"woy":"48","up_to_10":8,"up_to_30":10,"over_60":13},{"woy":"49","up_to_10":9,"up_to_30":10,"over_60":10},{"woy":"50","up_to_10":12,"up_to_30":15,"over_60":17},{"woy":"51","up_to_10":10,"up_to_30":13,"over_60":13},{"woy":"52","up_to_10":4,"up_to_30":5,"over_60":6}]');

},{}]},["mJyaU","jOjML"], "jOjML", "parcelRequire30ab")

//# sourceMappingURL=prs_days_open.18bf98e9.js.map
