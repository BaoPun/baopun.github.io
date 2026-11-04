import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
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
var style_module_default = {
	page: "_page_c3ljc_1",
	main: "_main_c3ljc_59",
	ctas: "_ctas_c3ljc_121",
	primary: "_primary_c3ljc_171",
	secondary: "_secondary_c3ljc_183",
	footer: "_footer_c3ljc_193",
	logo: "_logo_c3ljc_333",
	title: "_title_c3ljc_345",
	"left-side-nav": "_left-side-nav_c3ljc_1",
	"about-content": "_about-content_c3ljc_405",
	"projects-list": "_projects-list_c3ljc_421",
	projectContainer: "_projectContainer_c3ljc_457",
	projectList: "_projectList_c3ljc_475",
	projects: "_projects_c3ljc_421",
	projectFilterContainer: "_projectFilterContainer_c3ljc_503",
	filterTextButton: "_filterTextButton_c3ljc_1",
	projectLanguageFilter: "_projectLanguageFilter_c3ljc_537",
	projectFrameworkFilter: "_projectFrameworkFilter_c3ljc_537",
	projectToolFilter: "_projectToolFilter_c3ljc_537",
	projectDatabaseFilter: "_projectDatabaseFilter_c3ljc_537",
	projectFilter: "_projectFilter_c3ljc_503",
	projectChooseToFilter: "_projectChooseToFilter_c3ljc_551",
	aboutContainer: "_aboutContainer_c3ljc_577",
	aboutDescription: "_aboutDescription_c3ljc_585",
	aboutCareer: "_aboutCareer_c3ljc_603",
	marioKartContainer: "_marioKartContainer_c3ljc_623",
	marioKartCompDescription: "_marioKartCompDescription_c3ljc_1",
	marioKartTitle: "_marioKartTitle_c3ljc_1",
	aboutTitle: "_aboutTitle_c3ljc_1",
	marioKartFormatLabel: "_marioKartFormatLabel_c3ljc_1",
	formatSelector: "_formatSelector_c3ljc_673",
	formatButton: "_formatButton_c3ljc_691",
	scoreTrackerContainer: "_scoreTrackerContainer_c3ljc_705",
	scoreTrackerFormContainer: "_scoreTrackerFormContainer_c3ljc_717",
	scoreTrackerTeamSubmitForm: "_scoreTrackerTeamSubmitForm_c3ljc_1",
	scoreTrackerScoreSubmitForm: "_scoreTrackerScoreSubmitForm_c3ljc_1",
	scoreTrackerTeamsContainer: "_scoreTrackerTeamsContainer_c3ljc_747",
	teamNameDisplay: "_teamNameDisplay_c3ljc_755",
	randomizerContainer: "_randomizerContainer_c3ljc_769",
	stopRandomButton: "_stopRandomButton_c3ljc_1"
};
// app/Components/Navigation.tsx
function NavigationBar() {
	const [showNavigation, setShowNavigation] = useState(true);
	function clickNavigationBarHandler() {
		setShowNavigation(!showNavigation);
	}
	function ignoreHideNavBarHandler(event) {
		event.stopPropagation();
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [!showNavigation && /* @__PURE__ */ jsx("span", {
		style: {
			position: "absolute",
			top: "0%",
			fontSize: "45px"
		},
		onClick: clickNavigationBarHandler,
		children: "☰"
	}), showNavigation && /* @__PURE__ */ jsx("div", {
		id: style_module_default["left-side-nav"],
		onClick: clickNavigationBarHandler,
		children: /* @__PURE__ */ jsxs("ol", { children: [
			/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
				to: "/Projects",
				style: { fontSize: "18px" },
				onClick: ignoreHideNavBarHandler,
				children: "Projects"
			}) }),
			/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
				to: "/About",
				style: { fontSize: "18px" },
				onClick: ignoreHideNavBarHandler,
				children: "About Me"
			}) }),
			/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
				to: "/MarioKart",
				style: { fontSize: "18px" },
				onClick: ignoreHideNavBarHandler,
				children: "Mario Kart"
			}) })
		] })
	})] });
}
// app/Pages/HomePage.tsx
function HomePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: style_module_default.title,
			children: /* @__PURE__ */ jsx("h1", {
				id: "HomeTitle",
				children: "Information about Bao Phung"
			})
		}),
		/* @__PURE__ */ jsx("div", {
			className: style_module_default.page,
			children: /* @__PURE__ */ jsxs("main", {
				className: style_module_default.main,
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"Hi everyone, this is the home page.  For those viewing this website, this is just a page about me going over some of the work I've done and all that good stuff.",
					/* @__PURE__ */ jsx("br", {}),
					"You can find specific sections on the navigation bar at the left side.",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("br", {})
				] }), /* @__PURE__ */ jsxs("p", { children: [
					"I am planning on adding more content to this home page, as well as the other pages.  However, this is currently a work in progress (WIP).",
					/* @__PURE__ */ jsx("br", {}),
					"However, if you are interested in competitive Mario Kart, I have a dedicated Mario Kart page that helps keep track of team scores for various team formats. ",
					/* @__PURE__ */ jsx("br", {}),
					"I also plan on adding a performance tracker for Mario Kart World, although this is currently a work in progress."
				] })]
			})
		}),
		/* @__PURE__ */ jsx(NavigationBar, {})
	] });
}
// app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "Bao Phung's Website" }, {
		name: "description",
		content: "Bao Phung Homepage"
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsx(HomePage, {});
});
// \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/baopun-website/assets/entry.client-Dgn1TTJN.js",
		"imports": ["/baopun-website/assets/jsx-runtime-Yykwgpsd.js"],
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
			"module": "/baopun-website/assets/root-Ba_IJ3Vm.js",
			"imports": ["/baopun-website/assets/jsx-runtime-Yykwgpsd.js", "/baopun-website/assets/lib-D4DplKFp.js"],
			"css": ["/baopun-website/assets/root-B-mqanXQ.css"],
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
			"module": "/baopun-website/assets/home-ajXRO7rm.js",
			"imports": ["/baopun-website/assets/jsx-runtime-Yykwgpsd.js", "/baopun-website/assets/lib-D4DplKFp.js"],
			"css": ["/baopun-website/assets/home-oVRx5xl2.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/baopun-website/assets/manifest-fb58b30b.js",
	"version": "fb58b30b",
	"sri": void 0
};
// \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_customRouteDiscovery": false,
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = true;
var unstable_apiOnly = false;
var unstable_apiServerOrigin = void 0;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/baopun-website/";
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
		module: home_exports
	}
};
var allowedActionOrigins = false;
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr, unstable_apiOnly, unstable_apiServerOrigin };
