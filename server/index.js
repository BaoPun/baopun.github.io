import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
// app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
// \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-Dgn1TTJN.js",
		"imports": ["/assets/jsx-runtime-Yykwgpsd.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-Ba_IJ3Vm.js",
			"imports": ["/assets/jsx-runtime-Yykwgpsd.js", "/assets/lib-D4DplKFp.js"],
			"css": ["/assets/root-B-mqanXQ.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-Cv8EsJg8.js",
			"imports": [
				"/assets/jsx-runtime-Yykwgpsd.js",
				"/assets/style.module-BkfM9bNi.js",
				"/assets/Navigation-D0A7mJA3.js",
				"/assets/ProjectPage-D_V0m3S0.js",
				"/assets/AboutPage-CR-8l3VV.js",
				"/assets/MarioKart-DmkwtTMN.js",
				"/assets/WorldRandomizer-DZF0O23c.js",
				"/assets/lib-D4DplKFp.js"
			],
			"css": ["/assets/style-oVRx5xl2.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"Pages/MarioKart": {
			"id": "Pages/MarioKart",
			"parentId": "root",
			"path": "MarioKart",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/MarioKart-BRR90ipM.js",
			"imports": [
				"/assets/MarioKart-DmkwtTMN.js",
				"/assets/jsx-runtime-Yykwgpsd.js",
				"/assets/lib-D4DplKFp.js",
				"/assets/style.module-BkfM9bNi.js",
				"/assets/Navigation-D0A7mJA3.js"
			],
			"css": ["/assets/style-oVRx5xl2.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"Pages/WorldRandomizer": {
			"id": "Pages/WorldRandomizer",
			"parentId": "root",
			"path": "MarioKart/MKWorld",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/WorldRandomizer-CSkcGjQS.js",
			"imports": [
				"/assets/WorldRandomizer-DZF0O23c.js",
				"/assets/jsx-runtime-Yykwgpsd.js",
				"/assets/lib-D4DplKFp.js",
				"/assets/style.module-BkfM9bNi.js"
			],
			"css": ["/assets/style-oVRx5xl2.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"Pages/ScoreTracker": {
			"id": "Pages/ScoreTracker",
			"parentId": "root",
			"path": "ScoreTracker",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/ScoreTracker-BVCRgSyn.js",
			"imports": [
				"/assets/jsx-runtime-Yykwgpsd.js",
				"/assets/lib-D4DplKFp.js",
				"/assets/style.module-BkfM9bNi.js"
			],
			"css": ["/assets/style-oVRx5xl2.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"Pages/AboutPage": {
			"id": "Pages/AboutPage",
			"parentId": "root",
			"path": "About",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/AboutPage-faoYaPIs.js",
			"imports": [
				"/assets/AboutPage-CR-8l3VV.js",
				"/assets/jsx-runtime-Yykwgpsd.js",
				"/assets/lib-D4DplKFp.js",
				"/assets/style.module-BkfM9bNi.js",
				"/assets/Navigation-D0A7mJA3.js"
			],
			"css": ["/assets/style-oVRx5xl2.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"Pages/ProjectPage": {
			"id": "Pages/ProjectPage",
			"parentId": "root",
			"path": "Projects",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/ProjectPage-jBvBmXsI.js",
			"imports": [
				"/assets/ProjectPage-D_V0m3S0.js",
				"/assets/jsx-runtime-Yykwgpsd.js",
				"/assets/lib-D4DplKFp.js",
				"/assets/style.module-BkfM9bNi.js",
				"/assets/Navigation-D0A7mJA3.js"
			],
			"css": ["/assets/style-oVRx5xl2.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"Pages/404Page": {
			"id": "Pages/404Page",
			"parentId": "root",
			"path": "*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/404Page-C9FCRIB9.js",
			"imports": [
				"/assets/jsx-runtime-Yykwgpsd.js",
				"/assets/lib-D4DplKFp.js",
				"/assets/style.module-BkfM9bNi.js",
				"/assets/Navigation-D0A7mJA3.js"
			],
			"css": ["/assets/style-oVRx5xl2.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-a79b30df.js",
	"version": "a79b30df",
	"sri": void 0
};
// \0virtual:react-router/server-build
var route1 = { default: () => null };
var route2 = { default: () => null };
var route3 = { default: () => null };
var route4 = { default: () => null };
var route5 = { default: () => null };
var route6 = { default: () => null };
var route7 = { default: () => null };
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_customRouteDiscovery": false,
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = false;
var unstable_apiOnly = false;
var unstable_apiServerOrigin = void 0;
var isSpaMode = true;
var prerender = [];
var routeDiscovery = { "mode": "initial" };
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: route1
	},
	"Pages/MarioKart": {
		id: "Pages/MarioKart",
		parentId: "root",
		path: "MarioKart",
		index: void 0,
		caseSensitive: void 0,
		module: route2
	},
	"Pages/WorldRandomizer": {
		id: "Pages/WorldRandomizer",
		parentId: "root",
		path: "MarioKart/MKWorld",
		index: void 0,
		caseSensitive: void 0,
		module: route3
	},
	"Pages/ScoreTracker": {
		id: "Pages/ScoreTracker",
		parentId: "root",
		path: "ScoreTracker",
		index: void 0,
		caseSensitive: void 0,
		module: route4
	},
	"Pages/AboutPage": {
		id: "Pages/AboutPage",
		parentId: "root",
		path: "About",
		index: void 0,
		caseSensitive: void 0,
		module: route5
	},
	"Pages/ProjectPage": {
		id: "Pages/ProjectPage",
		parentId: "root",
		path: "Projects",
		index: void 0,
		caseSensitive: void 0,
		module: route6
	},
	"Pages/404Page": {
		id: "Pages/404Page",
		parentId: "root",
		path: "*",
		index: void 0,
		caseSensitive: void 0,
		module: route7
	}
};
var allowedActionOrigins = false;
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr, unstable_apiOnly, unstable_apiServerOrigin };
