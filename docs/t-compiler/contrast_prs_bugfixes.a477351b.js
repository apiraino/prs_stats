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
})({"9bzmn":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6da835bda477351b";
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

},{}],"kM2Sc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _auto = require("chart.js/auto");
var _autoDefault = parcelHelpers.interopDefault(_auto);
var _chartjsPluginZoom = require("chartjs-plugin-zoom");
var _chartjsPluginZoomDefault = parcelHelpers.interopDefault(_chartjsPluginZoom);
var _2023ContrastPrsBugfixesJson = require("../data/t-compiler/2023_contrast_prs_bugfixes.json");
var _2023ContrastPrsBugfixesJsonDefault = parcelHelpers.interopDefault(_2023ContrastPrsBugfixesJson);
var _2022ContrastPrsBugfixesJson = require("../data/t-compiler/2022_contrast_prs_bugfixes.json");
var _2022ContrastPrsBugfixesJsonDefault = parcelHelpers.interopDefault(_2022ContrastPrsBugfixesJson);
var _2021ContrastPrsBugfixesJson = require("../data/t-compiler/2021_contrast_prs_bugfixes.json");
var _2021ContrastPrsBugfixesJsonDefault = parcelHelpers.interopDefault(_2021ContrastPrsBugfixesJson);
var _common = require("../common");
(0, _autoDefault.default).register((0, _chartjsPluginZoomDefault.default));
(async function() {
    const ctx_contrast_2023 = document.getElementById("2023_contrast_prs_bugfixes");
    const ctx_contrast_2022 = document.getElementById("2022_contrast_prs_bugfixes");
    const ctx_contrast_2021 = document.getElementById("2021_contrast_prs_bugfixes");
    // PRs 2023: configure and create
    const data_2023 = {
        labels: (0, _2023ContrastPrsBugfixesJsonDefault.default).map((row)=>row.woy),
        datasets: [
            {
                label: "Bugfixes",
                data: (0, _2023ContrastPrsBugfixesJsonDefault.default).map((row)=>row.num_bugfixes),
                backgroundColor: "orange"
            },
            {
                label: "PRs",
                data: (0, _2023ContrastPrsBugfixesJsonDefault.default).map((row)=>row.num_prs),
                backgroundColor: "#66b237"
            }
        ]
    };
    // clone plugin config and customize title
    const plugins_2023 = structuredClone((0, _common.plugins));
    plugins_2023.title.text = "[2023] Contrast PRs and bugfixes";
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
    const contrast_2023 = new (0, _autoDefault.default)(ctx_contrast_2023, config_2023);
    // PRs 2022: configure and create
    const data_2022 = {
        labels: (0, _2022ContrastPrsBugfixesJsonDefault.default).map((row)=>row.woy),
        datasets: [
            {
                label: "Bugfixes",
                data: (0, _2022ContrastPrsBugfixesJsonDefault.default).map((row)=>row.num_bugfixes),
                backgroundColor: "orange"
            },
            {
                label: "PRs",
                data: (0, _2022ContrastPrsBugfixesJsonDefault.default).map((row)=>row.num_prs),
                backgroundColor: "#66b237"
            }
        ]
    };
    // clone plugin config and customize title
    const plugins_2022 = structuredClone((0, _common.plugins));
    plugins_2022.title.text = "[2022] Contrast PRs and bugfixes";
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
    const contrast_2022 = new (0, _autoDefault.default)(ctx_contrast_2022, config_2022);
    // PRs 2021: configure and create
    const data_2021 = {
        labels: (0, _2021ContrastPrsBugfixesJsonDefault.default).map((row)=>row.woy),
        datasets: [
            {
                label: "Bugfixes",
                data: (0, _2021ContrastPrsBugfixesJsonDefault.default).map((row)=>row.num_bugfixes),
                backgroundColor: "orange"
            },
            {
                label: "PRs",
                data: (0, _2021ContrastPrsBugfixesJsonDefault.default).map((row)=>row.num_prs),
                backgroundColor: "#66b237"
            }
        ]
    };
    // clone plugin config and customize title
    const plugins_2021 = structuredClone((0, _common.plugins));
    plugins_2021.title.text = "[2021] Contrast PRs and bugfixes";
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
    const contrast_2021 = new (0, _autoDefault.default)(ctx_contrast_2021, config_2021);
    const resetZoomBtn2023 = ()=>{
        contrast_2023.resetZoom();
    };
    const resetZoomBtn2022 = ()=>{
        contrast_2022.resetZoom();
    };
    const resetZoomBtn2021 = ()=>{
        contrast_2021.resetZoom();
    };
})();

},{"chart.js/auto":"d8NN9","chartjs-plugin-zoom":"kMtu7","../data/t-compiler/2023_contrast_prs_bugfixes.json":"lcNxB","../data/t-compiler/2022_contrast_prs_bugfixes.json":"j2Vur","../data/t-compiler/2021_contrast_prs_bugfixes.json":"8SfX1","../common":"8wzUn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lcNxB":[function(require,module,exports) {
module.exports = JSON.parse('[{"woy":"00","num_prs":137,"num_bugfixes":32},{"woy":"01","num_prs":197,"num_bugfixes":50},{"woy":"02","num_prs":283,"num_bugfixes":58},{"woy":"03","num_prs":184,"num_bugfixes":39},{"woy":"04","num_prs":218,"num_bugfixes":53},{"woy":"05","num_prs":216,"num_bugfixes":43},{"woy":"06","num_prs":222,"num_bugfixes":46},{"woy":"07","num_prs":142,"num_bugfixes":34},{"woy":"08","num_prs":180,"num_bugfixes":43},{"woy":"09","num_prs":144,"num_bugfixes":33},{"woy":"10","num_prs":140,"num_bugfixes":37},{"woy":"11","num_prs":135,"num_bugfixes":31},{"woy":"12","num_prs":67,"num_bugfixes":14},{"woy":"13","num_prs":26,"num_bugfixes":4}]');

},{}],"j2Vur":[function(require,module,exports) {
module.exports = JSON.parse('[{"woy":"00","num_prs":36,"num_bugfixes":6},{"woy":"01","num_prs":125,"num_bugfixes":22},{"woy":"02","num_prs":129,"num_bugfixes":24},{"woy":"03","num_prs":181,"num_bugfixes":29},{"woy":"04","num_prs":152,"num_bugfixes":28},{"woy":"05","num_prs":149,"num_bugfixes":28},{"woy":"06","num_prs":167,"num_bugfixes":32},{"woy":"07","num_prs":160,"num_bugfixes":34},{"woy":"08","num_prs":164,"num_bugfixes":24},{"woy":"09","num_prs":204,"num_bugfixes":33},{"woy":"10","num_prs":168,"num_bugfixes":34},{"woy":"11","num_prs":124,"num_bugfixes":22},{"woy":"12","num_prs":119,"num_bugfixes":21},{"woy":"13","num_prs":164,"num_bugfixes":38},{"woy":"14","num_prs":181,"num_bugfixes":35},{"woy":"15","num_prs":195,"num_bugfixes":36},{"woy":"16","num_prs":127,"num_bugfixes":21},{"woy":"17","num_prs":133,"num_bugfixes":30},{"woy":"18","num_prs":167,"num_bugfixes":40},{"woy":"19","num_prs":141,"num_bugfixes":29},{"woy":"20","num_prs":139,"num_bugfixes":23},{"woy":"21","num_prs":148,"num_bugfixes":28},{"woy":"22","num_prs":165,"num_bugfixes":32},{"woy":"23","num_prs":179,"num_bugfixes":42},{"woy":"24","num_prs":163,"num_bugfixes":30},{"woy":"25","num_prs":184,"num_bugfixes":39},{"woy":"26","num_prs":190,"num_bugfixes":53},{"woy":"27","num_prs":190,"num_bugfixes":45},{"woy":"28","num_prs":163,"num_bugfixes":51},{"woy":"29","num_prs":196,"num_bugfixes":44},{"woy":"30","num_prs":188,"num_bugfixes":45},{"woy":"31","num_prs":151,"num_bugfixes":41},{"woy":"32","num_prs":170,"num_bugfixes":49},{"woy":"33","num_prs":187,"num_bugfixes":32},{"woy":"34","num_prs":206,"num_bugfixes":41},{"woy":"35","num_prs":221,"num_bugfixes":36},{"woy":"36","num_prs":190,"num_bugfixes":40},{"woy":"37","num_prs":167,"num_bugfixes":29},{"woy":"38","num_prs":202,"num_bugfixes":35},{"woy":"39","num_prs":187,"num_bugfixes":34},{"woy":"40","num_prs":171,"num_bugfixes":44},{"woy":"41","num_prs":188,"num_bugfixes":41},{"woy":"42","num_prs":182,"num_bugfixes":41},{"woy":"43","num_prs":198,"num_bugfixes":39},{"woy":"44","num_prs":190,"num_bugfixes":40},{"woy":"45","num_prs":209,"num_bugfixes":47},{"woy":"46","num_prs":196,"num_bugfixes":43},{"woy":"47","num_prs":241,"num_bugfixes":55},{"woy":"48","num_prs":173,"num_bugfixes":39},{"woy":"49","num_prs":179,"num_bugfixes":33},{"woy":"50","num_prs":187,"num_bugfixes":45},{"woy":"51","num_prs":164,"num_bugfixes":34},{"woy":"52","num_prs":121,"num_bugfixes":28}]');

},{}],"8SfX1":[function(require,module,exports) {
module.exports = JSON.parse('[{"woy":"00","num_prs":52,"num_bugfixes":17},{"woy":"01","num_prs":111,"num_bugfixes":23},{"woy":"02","num_prs":169,"num_bugfixes":34},{"woy":"03","num_prs":133,"num_bugfixes":30},{"woy":"04","num_prs":156,"num_bugfixes":39},{"woy":"05","num_prs":180,"num_bugfixes":34},{"woy":"06","num_prs":133,"num_bugfixes":25},{"woy":"07","num_prs":162,"num_bugfixes":28},{"woy":"08","num_prs":168,"num_bugfixes":38},{"woy":"09","num_prs":153,"num_bugfixes":30},{"woy":"10","num_prs":157,"num_bugfixes":25},{"woy":"11","num_prs":138,"num_bugfixes":27},{"woy":"12","num_prs":151,"num_bugfixes":28},{"woy":"13","num_prs":146,"num_bugfixes":33},{"woy":"14","num_prs":133,"num_bugfixes":40},{"woy":"15","num_prs":108,"num_bugfixes":32},{"woy":"16","num_prs":141,"num_bugfixes":25},{"woy":"17","num_prs":152,"num_bugfixes":34},{"woy":"18","num_prs":159,"num_bugfixes":31},{"woy":"19","num_prs":136,"num_bugfixes":37},{"woy":"20","num_prs":131,"num_bugfixes":31},{"woy":"21","num_prs":111,"num_bugfixes":24},{"woy":"22","num_prs":123,"num_bugfixes":27},{"woy":"23","num_prs":114,"num_bugfixes":25},{"woy":"24","num_prs":117,"num_bugfixes":29},{"woy":"25","num_prs":133,"num_bugfixes":45},{"woy":"26","num_prs":117,"num_bugfixes":32},{"woy":"27","num_prs":138,"num_bugfixes":36},{"woy":"28","num_prs":132,"num_bugfixes":38},{"woy":"29","num_prs":133,"num_bugfixes":40},{"woy":"30","num_prs":138,"num_bugfixes":28},{"woy":"31","num_prs":130,"num_bugfixes":20},{"woy":"32","num_prs":94,"num_bugfixes":20},{"woy":"33","num_prs":122,"num_bugfixes":32},{"woy":"34","num_prs":129,"num_bugfixes":32},{"woy":"35","num_prs":131,"num_bugfixes":35},{"woy":"36","num_prs":118,"num_bugfixes":29},{"woy":"37","num_prs":133,"num_bugfixes":27},{"woy":"38","num_prs":101,"num_bugfixes":19},{"woy":"39","num_prs":115,"num_bugfixes":27},{"woy":"40","num_prs":207,"num_bugfixes":51},{"woy":"41","num_prs":148,"num_bugfixes":31},{"woy":"42","num_prs":154,"num_bugfixes":34},{"woy":"43","num_prs":128,"num_bugfixes":31},{"woy":"44","num_prs":98,"num_bugfixes":24},{"woy":"45","num_prs":112,"num_bugfixes":19},{"woy":"46","num_prs":142,"num_bugfixes":31},{"woy":"47","num_prs":116,"num_bugfixes":27},{"woy":"48","num_prs":152,"num_bugfixes":34},{"woy":"49","num_prs":171,"num_bugfixes":34},{"woy":"50","num_prs":181,"num_bugfixes":34},{"woy":"51","num_prs":61,"num_bugfixes":17},{"woy":"52","num_prs":56,"num_bugfixes":9}]');

},{}]},["9bzmn","kM2Sc"], "kM2Sc", "parcelRequire30ab")

//# sourceMappingURL=contrast_prs_bugfixes.a477351b.js.map
