import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useLocation, useNavigate } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
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
// app/Pages/ProjectPage.tsx
var ProjectPage_exports = /* @__PURE__ */ __exportAll({
	default: () => ProjectPage_default,
	meta: () => meta$6
});
function meta$6({}) {
	return [{ title: "Projects" }, {
		name: "description",
		content: "List of Projects"
	}];
}
var ProjectPage_default = UNSAFE_withComponentProps(function ProjectPage() {
	class Project {
		static id = 0;
		#id;
		#name;
		#description;
		#url;
		#languages;
		#frameworks;
		#tools;
		#databases;
		constructor(name, description, url, languages, frameworks, tools, databases) {
			this.#id = ++Project.id;
			this.#name = name;
			this.#description = description;
			this.#url = url;
			this.#languages = languages;
			this.#frameworks = frameworks;
			this.#tools = tools;
			this.#databases = databases;
		}
		getProjectId() {
			return this.#id;
		}
		getProjectName() {
			return this.#name;
		}
		getProjectDescription() {
			return this.#description;
		}
		getProjectUrl() {
			return this.#url;
		}
		getLanguagesUsed() {
			return this.#languages;
		}
		getFrameworksUsed() {
			return this.#frameworks;
		}
		getToolsUsed() {
			return this.#tools;
		}
		getDatabasesUsed() {
			return this.#databases;
		}
	}
	let projects = [];
	projects.push(new Project("Personal Website", "This website is written using the React Router web framework.  It was deployed using docker for containerization, pulumi for automated infrastructure configuration via creating a new AWS EC2 instance, and ansible for automated task management - which includes setting up nginx as the web server.", "https://www.github.com/BaoPun/BaoPun-Website", [
		"typescript",
		"javascript",
		"css",
		"html",
		"dockerfile"
	], [
		"reactjs",
		"vitest",
		"nodejs",
		"nginx"
	], [
		"vs code",
		"docker",
		"pulumi",
		"ansible",
		"GitHub Actions",
		"aws ec2"
	], []));
	projects.push(new Project("League of Legends Profile Lookup", "This desktop application lets users search for a player and retrieves information about their most played champions,             their solo queue ranks, and their win rates.            Data is fetched from the Riot Games API, with some static data stored into a Postgres database for faster data fetching.", "https://www.github.com/BaoPun/LeagueProfileFetcher", ["c++"], ["qmake", "qt"], [
		"qt creator",
		"qt designer",
		"postman"
	], ["postgres"]));
	projects.push(new Project("Mario Kart Team Score Tracker", "This desktop application lets competitive Mario Kart players assign teams based on a format and allocates score tracking for each team during a 12 race event.", "https://www.github.com/BaoPun/MarioKartLoungeScoreTracker", ["c++"], ["cmake", "qt"], ["qt creator", "qt designer"], []));
	projects.push(new Project("Pokemon Simulator", "This personal project of mine was a small desktop application that allows you to play as one Pokemon (Treecko in this case) and battle against different wild pokemon. The setting is similar to the beginning of any mainline pokemon game.", "https://www.github.com/BaoPun/PokemonSimulator", ["c++"], ["cmake", "qt"], [
		"qt creator",
		"qt designer",
		"postman",
		"aws rds",
		"pgAdmin"
	], ["postgres"]));
	projects.push(new Project("Chinese Characters Prediction Model", "This data analysis project utilizes machine learning to create a neural network model that is trained over 15000 samples of select hand-drawn Chinese characters.  The objective is to use the model to predict what chinese characters are being drawn.", "https://www.github.com/BaoPun/ChineseCharactersPredictorModel", ["python"], [
		"pandas",
		"numpy",
		"keras"
	], ["anaconda"], []));
	projects.push(new Project("Undergraduate Capstone: Software Innovation for Dual Screen Notebook", "For my senior capstone, I built a software application that takes advantage of the Asus Zenbook Pro Duo's built-in second screen.  This application loads other applications onto it, which can be registered & activated by triggering certain any hotkeys.", "https://www.github.com/BaoPun/capstone", ["c#"], [
		"wpf",
		"winforms",
		".net core"
	], ["visual studio"], []));
	projects.push(new Project("Recursive Descent Parser", "A recursive descent parser was made in C++ for a specific grammar.", "https://www.github.com/BaoPun/RegexParser", ["c++"], ["cmake", "vcpkg"], ["visual studio"], []));
	projects.push(new Project("Multithreaded Pokemon Data Fetch", "To practice multithreading, this console program was created using C.  Pokemon data up to generation 6 was stored in a text file, and we would search through all pokemon by type.  We can also choose to save the results of our search into a text file.  The multithreaded portion comes from the fact that each search and save process will be happening in the background and not disrupt the main menu.", "https://www.onlinegdb.com/n84l9G5Uvi", ["c"], [], ["vs code"], []));
	const [detailsVisible, setDetailsVisible] = useState(Array(projects.length).fill(false));
	const [filterText, setFilterText] = useState("");
	const filterTextRef = useRef(null);
	const focusFilterTextInput = () => {
		if (filterTextRef.current) filterTextRef.current.focus();
	};
	const clickedOnUrl = useRef(false);
	const [checkedLanguageFilters, setCheckedLanguageFilters] = useState(/* @__PURE__ */ new Set());
	const [checkedFrameworkFilters, setCheckedFrameworkFilters] = useState(/* @__PURE__ */ new Set());
	const [checkedToolFilters, setCheckedToolFilters] = useState(/* @__PURE__ */ new Set());
	const [checkedDatabaseFilters, setCheckedDatabaseFilters] = useState(/* @__PURE__ */ new Set());
	const [filterEnabled, setFilterEnabled] = useState(false);
	const [filterEnabledText, setFilterEnabledText] = useState("Show Filters");
	function toggleFilter() {
		setFilterEnabled(!filterEnabled);
		setFilterEnabledText(filterEnabled ? "Show Filters" : "Hide Filters");
	}
	function filterContains(filterList, projectList) {
		if (filterList.size > 0) {
			for (const filter of filterList) if (!projectList.includes(filter)) return false;
		}
		return true;
	}
	const filteredProjects = projects.filter((project) => {
		const lowerFilter = filterText.toLowerCase();
		const containsProject = project.getProjectName().toLowerCase().includes(lowerFilter);
		const containsDescription = project.getProjectDescription().toLowerCase().includes(lowerFilter);
		const containsLanguage = filterContains(checkedLanguageFilters, project.getLanguagesUsed());
		const containsFramework = filterContains(checkedFrameworkFilters, project.getFrameworksUsed());
		const containsTool = filterContains(checkedToolFilters, project.getToolsUsed());
		const containsDatabase = filterContains(checkedDatabaseFilters, project.getDatabasesUsed());
		return (filterText.length === 0 || containsProject || containsDescription) && containsLanguage && containsFramework && containsTool && containsDatabase;
	});
	function urlHandler(idx) {
		if (detailsVisible[idx]) clickedOnUrl.current = true;
	}
	function toggleProjectDetailHandler(idx) {
		if (detailsVisible[idx] && clickedOnUrl.current) {
			clickedOnUrl.current = false;
			return;
		}
		const detailsVisibleCopy = [...detailsVisible];
		detailsVisibleCopy[idx] = !detailsVisibleCopy[idx];
		setDetailsVisible(detailsVisibleCopy);
	}
	function SubmitFilterForm(event) {
		event.preventDefault();
		alert("Clearing input field.");
		setFilterText("");
	}
	function FilterForm() {
		let languagesFilterList = /* @__PURE__ */ new Set();
		let frameworksFilterList = /* @__PURE__ */ new Set();
		let toolsFilterList = /* @__PURE__ */ new Set();
		let databasesFilterList = /* @__PURE__ */ new Set();
		projects.forEach((project) => {
			project.getLanguagesUsed().forEach((language) => languagesFilterList.add(language));
			project.getFrameworksUsed().forEach((framework) => frameworksFilterList.add(framework));
			project.getToolsUsed().forEach((tool) => toolsFilterList.add(tool));
			project.getDatabasesUsed().forEach((database) => databasesFilterList.add(database));
		});
		function labelClickHandler(checkedFilterList, setCheckedFilterList, filter) {
			if (checkedFilterList.has(filter)) setCheckedFilterList((filters) => {
				const newFilters = new Set(filters);
				newFilters.delete(filter);
				return newFilters;
			});
			else setCheckedFilterList((filters) => new Set(filters).add(filter));
		}
		function checkboxHandler(event, setCheckedFilterList) {
			const value = event.target.value;
			if (event.target.checked) setCheckedFilterList((filters) => new Set(filters).add(value));
			else setCheckedFilterList((filters) => {
				const newFilters = new Set(filters);
				newFilters.delete(value);
				return newFilters;
			});
		}
		function isChecked(filterType, element) {
			return filterType.has(element);
		}
		function FilterBy({ filterList, filterType, checkedFilterList, onChangeFilterList, onLabelClickHandler }) {
			return filterList.size > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("h1", { children: [
				"Filter by ",
				filterType,
				":"
			] }), /* @__PURE__ */ jsxs("div", {
				className: style_module_default.projectFilter,
				children: [
					Array.from(filterList).map((element, index) => /* @__PURE__ */ jsxs("span", {
						style: { marginRight: "1.2%" },
						children: [/* @__PURE__ */ jsx("input", {
							type: "checkbox",
							name: element,
							value: element,
							style: { marginRight: "5px" },
							onChange: (e) => checkboxHandler(e, onChangeFilterList),
							checked: isChecked(checkedFilterList, element)
						}), /* @__PURE__ */ jsx("label", {
							htmlFor: element,
							onClick: () => onLabelClickHandler(element),
							children: element
						})]
					}, index)),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("br", {})
				]
			})] });
		}
		return /* @__PURE__ */ jsxs("form", {
			onSubmit: SubmitFilterForm,
			id: style_module_default.filterForm,
			children: [
				/* @__PURE__ */ jsx("label", {
					htmlFor: "filterTextInput",
					style: { marginRight: "20px" },
					children: "Filter by name or description:"
				}),
				/* @__PURE__ */ jsx("input", {
					type: "text",
					id: "filterTextInput",
					name: "filterTextInput",
					value: filterText,
					onChange: (e) => setFilterText(e.target.value),
					ref: filterTextRef,
					style: {
						backgroundColor: "white",
						color: "black",
						marginRight: "20px"
					},
					placeholder: "Filter in real time",
					required: true
				}),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx(FilterBy, {
					filterList: languagesFilterList,
					filterType: "languages",
					checkedFilterList: checkedLanguageFilters,
					onChangeFilterList: setCheckedLanguageFilters,
					onLabelClickHandler: (language) => labelClickHandler(checkedLanguageFilters, setCheckedLanguageFilters, language)
				}),
				/* @__PURE__ */ jsx(FilterBy, {
					filterList: frameworksFilterList,
					filterType: "frameworks",
					checkedFilterList: checkedFrameworkFilters,
					onChangeFilterList: setCheckedFrameworkFilters,
					onLabelClickHandler: (framework) => labelClickHandler(checkedFrameworkFilters, setCheckedFrameworkFilters, framework)
				}),
				/* @__PURE__ */ jsx(FilterBy, {
					filterList: toolsFilterList,
					filterType: "tools",
					checkedFilterList: checkedToolFilters,
					onChangeFilterList: setCheckedToolFilters,
					onLabelClickHandler: (tool) => labelClickHandler(checkedToolFilters, setCheckedToolFilters, tool)
				}),
				/* @__PURE__ */ jsx(FilterBy, {
					filterList: databasesFilterList,
					filterType: "databases",
					checkedFilterList: checkedDatabaseFilters,
					onChangeFilterList: setCheckedDatabaseFilters,
					onLabelClickHandler: (database) => labelClickHandler(checkedDatabaseFilters, setCheckedDatabaseFilters, database)
				})
			]
		});
	}
	function ShowProjectDetails() {
		return filteredProjects.map((project) => /* @__PURE__ */ jsxs("div", {
			className: style_module_default.projects,
			onClick: () => toggleProjectDetailHandler(project.getProjectId() - 1),
			children: [/* @__PURE__ */ jsx("h1", { children: project.getProjectName() }), detailsVisible[project.getProjectId() - 1] && /* @__PURE__ */ jsxs("div", {
				className: style_module_default.hiddenProjectDetails,
				style: { textAlign: "center" },
				children: [
					/* @__PURE__ */ jsx("p", { children: project.getProjectDescription() }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Link, {
						to: project.getProjectUrl(),
						style: {
							"color": "cyan",
							"fontSize": "20px"
						},
						target: "_blank",
						onClick: () => urlHandler(project.getProjectId() - 1),
						children: project.getProjectUrl()
					}) }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx(DisplayHiddenDetails, {
						array: project.getLanguagesUsed(),
						projectText: "Languages"
					}),
					/* @__PURE__ */ jsx(DisplayHiddenDetails, {
						array: project.getFrameworksUsed(),
						projectText: "Frameworks"
					}),
					/* @__PURE__ */ jsx(DisplayHiddenDetails, {
						array: project.getToolsUsed(),
						projectText: "Tools"
					}),
					/* @__PURE__ */ jsx(DisplayHiddenDetails, {
						array: project.getDatabasesUsed(),
						projectText: "Databases"
					})
				]
			})]
		}, project.getProjectId()));
	}
	function DisplayHiddenDetails({ array, projectText }) {
		return /* @__PURE__ */ jsxs("div", {
			className: style_module_default.hiddenDetails,
			children: [array.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs("p", { children: [projectText, " used:"] })] }), array.map((element, i) => /* @__PURE__ */ jsxs("p", {
				style: { display: "inline" },
				children: [element, i < array.length - 1 && " | "]
			}, i))]
		});
	}
	useEffect(() => {
		focusFilterTextInput();
	}, [filterText]);
	return /* @__PURE__ */ jsxs("div", {
		className: style_module_default.projectContainer,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: style_module_default.title,
				children: [
					/* @__PURE__ */ jsx("h1", {
						id: style_module_default.projectTitle,
						children: "Projects"
					}),
					/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx(Link, {
						to: "/",
						style: {
							"color": "cyan",
							"fontSize": "20px"
						},
						children: "Click Here"
					}), " to return to the home page."] }),
					/* @__PURE__ */ jsx("br", {})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: style_module_default.projectChooseToFilter,
				onClick: toggleFilter,
				children: [
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("h1", {
						style: {
							textAlign: "center",
							color: "red"
						},
						children: filterEnabledText
					}),
					/* @__PURE__ */ jsx("br", {})
				]
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsxs("div", {
				className: style_module_default.projectList,
				children: [
					filterEnabled && /* @__PURE__ */ jsx("div", {
						className: style_module_default.projectFilterContainer,
						children: /* @__PURE__ */ jsx(FilterForm, {})
					}),
					/* @__PURE__ */ jsx("h1", {
						style: { textAlign: "center" },
						children: "Click on each project section to expand/collapse additional details."
					}),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx(ShowProjectDetails, {})
				]
			}),
			/* @__PURE__ */ jsx(NavigationBar, {})
		]
	});
});
// app/Pages/AboutPage.tsx
var AboutPage_exports = /* @__PURE__ */ __exportAll({
	default: () => AboutPage_default,
	meta: () => meta$5
});
function meta$5({}) {
	return [{ title: "About Me" }, {
		name: "description",
		content: "About Me Page"
	}];
}
var AboutPage_default = UNSAFE_withComponentProps(function AboutMePage() {
	const [displayDate, setDisplayDate] = useState(/* @__PURE__ */ new Date());
	useEffect(() => {
		const interval = setInterval(() => {
			setDisplayDate(/* @__PURE__ */ new Date());
		}, 1e3);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: style_module_default.aboutContainer,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: style_module_default.title,
				children: [
					/* @__PURE__ */ jsx("h1", {
						id: style_module_default.aboutTitle,
						children: "About Bao Phung"
					}),
					/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx(Link, {
						to: "/",
						style: {
							"color": "cyan",
							"fontSize": "20px"
						},
						children: "Click Here"
					}), " to return to the home page."] }),
					/* @__PURE__ */ jsx("br", {})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: style_module_default["aboutDescription"],
				children: [
					/* @__PURE__ */ jsx("h1", { children: "Introduction" }),
					/* @__PURE__ */ jsxs("p", { children: [
						"My name is Bao Phung.  I was born on February 26, 1997 in Portland, Oregon ",
						/* @__PURE__ */ jsx("br", {}),
						"and have largely remained there for most of my lifetime so far."
					] }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("p", { children: "I enjoy video games, primarily League of Legends.  I recently developed an interest in competitive Mario Kart." }),
					/* @__PURE__ */ jsxs("p", { children: [
						"If you want to add me in League of Legends, it's ",
						/* @__PURE__ */ jsx("strong", { children: "Nindoge#KEKW" }),
						" on the NA server."
					] }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsxs("p", { children: [
						"As for competitive Mario Kart, there actually exists a Competitive Mario Kart community.",
						/* @__PURE__ */ jsx("br", {}),
						"You can learn more by clicking on the Mario Kart section on the left."
					] })
				]
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsxs("div", {
				className: style_module_default["aboutCareer"],
				children: [
					/* @__PURE__ */ jsx("h1", { children: "Career Timeline" }),
					/* @__PURE__ */ jsxs("p", { children: [
						"I graduated from Oregon State University on December 20th, 2020 with a Bachelor's of Science (BS) in Computer Science.",
						/* @__PURE__ */ jsx("br", {}),
						"I also minored in Mathematics."
					] }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsxs("p", { children: [
						"As of right now (",
						displayDate.toLocaleString(),
						"), I am currently pursuing my Master's Degree (specifically, Master's of Engineering, or MEng for short) at Oregon State University."
					] }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("p", { children: "After my graduation, I joined Revature - a coding bootcamp that helps place software engineers with another company." }),
					/* @__PURE__ */ jsxs("p", { children: [
						"Via Revature, I joined Infosys for 2 years from May 2021 to May 2023.",
						/* @__PURE__ */ jsx("br", {}),
						"This required me to travel to South Carolina for 2 years."
					] }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("p", { children: "I was initially working as WCS support for Adidas DC1 and DC2, but I got promoted to WMS support after my first year." }),
					/* @__PURE__ */ jsx("p", { children: "Note: WCS = Warehouse Control Systems, WMS = Warehouse Management Systems" }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsxs("p", { children: [
						"As WCS support, I help ensure that the physical conveyor systems across DC1 & DC2 are operating normally.",
						/* @__PURE__ */ jsx("br", {}),
						"Any issues with the conveyor systems are redirected to me for troubleshooting."
					] }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsxs("p", { children: [
						"As WMS support, I ensure that WMS operations and tasks are properly maintained.  Any troubles with warehouse tasks via WMS are redirected to me.",
						/* @__PURE__ */ jsx("br", {}),
						"Since most of WCS messaging comes from WMS, one of my responsibilities was to monitor messaging flow to and from WCS."
					] }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("p", { children: "After my time with Infosys, I returned back home to Portland, Oregon.  A month later, I began freelancing as a software engineering tutor on Wyzant." }),
					/* @__PURE__ */ jsx("p", { children: "To this day, I still remain as a freelancing tutor.  However, I have also developed multiple projects during this time.  See the \"Projects\" section." }),
					/* @__PURE__ */ jsxs("p", { children: ["If you are interested in seeing my tutoring profile, ", /* @__PURE__ */ jsx(Link, {
						to: "https://www.wyzant.com/tutors/baop80",
						target: "_blank",
						style: { "color": "cyan" },
						children: "Click here."
					})] })
				]
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx(NavigationBar, {})
		]
	});
});
// app/Pages/MarioKart.tsx
var MarioKart_exports = /* @__PURE__ */ __exportAll({
	default: () => MarioKart_default,
	meta: () => meta$4
});
function meta$4({}) {
	return [{ title: "Mario Kart" }, {
		name: "description",
		content: "Bao Phung Homepage"
	}];
}
function FormatButton({ format, onClick }) {
	return /* @__PURE__ */ jsx("button", {
		className: style_module_default.formatButton,
		onClick,
		children: format
	});
}
function FormatSelectorPage() {
	const navigate = useNavigate();
	function FormatButtonClick(format) {
		navigate(`/ScoreTracker`, { state: { format } });
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		id: style_module_default.marioKartFormatLabel,
		children: [
			/* @__PURE__ */ jsx("p", { children: "This is the Mario Kart page, mainly for setting up scores for a competitive match." }),
			/* @__PURE__ */ jsx("p", { children: "Click on one of the formats below to set up teams." }),
			/* @__PURE__ */ jsx("p", { children: "Note that the 8v8 and 12v12 formats will have 24 players, while the others will have 12 players by default." })
		]
	}), /* @__PURE__ */ jsxs("div", {
		className: style_module_default.formatSelector,
		children: [
			/* @__PURE__ */ jsx(FormatButton, {
				format: "2v2",
				onClick: () => FormatButtonClick("2")
			}),
			/* @__PURE__ */ jsx(FormatButton, {
				format: "3v3",
				onClick: () => FormatButtonClick("3")
			}),
			/* @__PURE__ */ jsx(FormatButton, {
				format: "4v4",
				onClick: () => FormatButtonClick("4")
			}),
			/* @__PURE__ */ jsx(FormatButton, {
				format: "6v6",
				onClick: () => FormatButtonClick("6")
			}),
			/* @__PURE__ */ jsx(FormatButton, {
				format: "8v8",
				onClick: () => FormatButtonClick("8")
			}),
			/* @__PURE__ */ jsx(FormatButton, {
				format: "12v12",
				onClick: () => FormatButtonClick("12")
			})
		]
	})] });
}
var MarioKart_default = UNSAFE_withComponentProps(function MarioKartPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: style_module_default.marioKartContainer,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: style_module_default.title,
				children: [
					/* @__PURE__ */ jsx("h1", {
						id: style_module_default.aboutTitle,
						children: "Mario Kart"
					}),
					/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx(Link, {
						to: "/",
						style: {
							"color": "cyan",
							"fontSize": "20px"
						},
						children: "Click Here"
					}), " to return to the home page."] }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("h1", {
						style: { "fontSize": "30px" },
						children: "Mario Kart World Track Randomizer"
					}),
					/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx(Link, {
						to: "/MarioKart/MKWorld",
						style: {
							"color": "cyan",
							"fontSize": "20px"
						},
						children: "Click here"
					}), " to randomize Mario Kart World tracks."] })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				id: style_module_default.marioKartCompDescription,
				children: [
					/* @__PURE__ */ jsx("h1", {
						style: { "fontSize": "30px" },
						children: "About Competitive Mario Kart"
					}),
					/* @__PURE__ */ jsx("p", { children: "Mario Kart can be played competitively, believe it or not.  With the advent of Mario Kart World and its groundbreaking mechanics, it comes as no surprise that players want to become the best at the game." }),
					/* @__PURE__ */ jsx("p", { children: "In fact, competitive Mario Kart has existed for a long time, with support for older classics such as Mario Kart Wii that still runs tournaments to this day. " }),
					/* @__PURE__ */ jsx("p", { children: "If you want to participate in competitive Mario Kart matches, please sign up on Mario Kart Central first." }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("ul", { children: ["Link to the Mario Kart Central page below (click on 'Mario Kart Central'):", /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: "https://mkcentral.com/en-us",
						target: "_blank",
						style: { "color": "cyan" },
						children: "Mario Kart Central"
					}) })] }) }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsxs("p", { children: [
						"Then, you want to join a discord server for the Mario Kart game you wish to participate in.",
						/* @__PURE__ */ jsx("br", {}),
						"Note that you will need to be verified on whichever server you join, which is done via creating an account at Mario Kart Central.",
						/* @__PURE__ */ jsx("br", {}),
						"You can find more information about the verification process once you join your desired discord server.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsxs("ul", { children: [
							"List of competitive Mario Kart discords (click on one to join the discord server):",
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "https://discord.gg/WR6JKPn2v9",
								target: "_blank",
								style: { "color": "cyan" },
								children: "Mario Kart World"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "https://discord.gg/revmGkE",
								target: "_blank",
								style: { "color": "cyan" },
								children: "Mario Kart 8 Deluxe 150cc"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "https://discord.gg/dfdRkFu",
								target: "_blank",
								style: { "color": "cyan" },
								children: "Mario Kart 8 Deluxe 200cc"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "https://discord.gg/vYr3bQQHFY",
								target: "_blank",
								style: { "color": "cyan" },
								children: "Mario Kart Tour"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "https://discord.gg/cZZp9DdQ5e",
								target: "_blank",
								style: { "color": "cyan" },
								children: "Mario Kart 7"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "https://discord.gg/mkw",
								target: "_blank",
								style: { "color": "cyan" },
								children: "Mario Kart Wii"
							}) })
						] })
					] })
				]
			}),
			/* @__PURE__ */ jsx(FormatSelectorPage, {}),
			/* @__PURE__ */ jsx(NavigationBar, {})
		]
	});
});
// app/Pages/WorldRandomizer.tsx
var WorldRandomizer_exports = /* @__PURE__ */ __exportAll({
	default: () => WorldRandomizer_default,
	meta: () => meta$3
});
function meta$3({}) {
	return [{ title: "Mario Kart World Randomizer" }, {
		name: "description",
		content: "Mario Kart World"
	}];
}
var WorldRandomizer_default = UNSAFE_withComponentProps(function WorldRandomizerPage() {
	const tracksToId = [
		"DKS",
		"KTB",
		"RR",
		"CC",
		"WS",
		"rDH",
		"MBC",
		"PS",
		"rCM",
		"FO",
		"rDDJ",
		"GBR",
		"rPB",
		"SSS",
		"CCF",
		"rMMM",
		"rTF",
		"rWS",
		"rSGB",
		"rWSh",
		"rDKP",
		"DD",
		"rMC",
		"rSHS",
		"SP",
		"BCi",
		"AH",
		"DBB",
		"BC",
		"rAF"
	];
	const tracksList = {
		"DKS": "DK Spaceport",
		"KTB": "Koopa Troopa Beach",
		"RR": "Rainbow Road",
		"CC": "Crown City",
		"WS": "Whistlestop Summit",
		"rDH": "Desert Hills",
		"MBC": "Mario Bros. Circuit",
		"PS": "Peach Stadium",
		"rCM": "Choco Mountain",
		"FO": "Faraway Oasis",
		"rDDJ": "Dino Dino Jungle",
		"GBR": "Great ? Block Ruins",
		"rPB": "Peach Beach",
		"SSS": "Salty Salty Speedway",
		"CCF": "Cheep Cheep Falls",
		"rMMM": "Moo Moo Meadows",
		"rTF": "Toad's Factory",
		"rWS": "Wario Stadium",
		"rSGB": "Shy Guy Bazaar",
		"rWSh": "Wario Shipyard",
		"rDKP": "DK Pass",
		"DD": "Dandelion Depths",
		"rMC": "Mario Circuit",
		"rSHS": "Sky-High Sundae",
		"SP": "Starview Peak",
		"BCi": "Boo Cinema",
		"AH": "Acorn Heights",
		"DBB": "Dry Bones Burnout",
		"BC": "Bowser's Castle",
		"rAF": "Airship Fortress"
	};
	const [isRandomizing, setIsRandomizing] = useState(true);
	const [track, setTrack] = useState("");
	const trackRef = useRef(null);
	const [trackPool, setTrackPool] = useState(tracksToId);
	const [isRemovePoolChecked, setIsRemovePoolChecked] = useState(true);
	const getRandomTrack = () => {
		const trackId = Math.floor(Math.random() * trackPool.length);
		setTrack(trackPool[trackId]);
	};
	const removeTrackFromPool = () => {
		let trackPoolCopy = trackPool;
		trackPoolCopy = trackPoolCopy.filter((t) => t !== track);
		setTrackPool(trackPoolCopy);
	};
	function randomButtonOnClick() {
		setIsRandomizing(!isRandomizing);
	}
	function removePoolCheckboxOnHandler(e) {
		setIsRemovePoolChecked(!isRemovePoolChecked);
	}
	function resetTrackPool() {
		setTrackPool(tracksToId);
		alert("Track pool has been reset.");
	}
	useEffect(() => {
		if (isRandomizing) trackRef.current = setInterval(getRandomTrack, 50);
		else {
			if (isRemovePoolChecked) removeTrackFromPool();
			if (trackPool.length <= 1 && isRemovePoolChecked) resetTrackPool();
		}
		return () => {
			if (trackRef.current) clearInterval(trackRef.current);
		};
	}, [isRandomizing]);
	return /* @__PURE__ */ jsxs("div", {
		className: style_module_default.randomizerContainer,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: style_module_default.title,
				children: [
					/* @__PURE__ */ jsx("h1", {
						id: style_module_default.aboutTitle,
						children: "Mario Kart World Track Randomizer"
					}),
					/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx(Link, {
						to: "/MarioKart",
						style: {
							"color": "cyan",
							"fontSize": "20px"
						},
						children: "Click Here"
					}), " to return to the Mario Kart page."] }),
					/* @__PURE__ */ jsx("br", {})
				]
			}),
			/* @__PURE__ */ jsxs("h1", { children: [trackPool.length, " tracks currently in the pool"] }),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsxs("h1", { children: [
				"Click on the icon to ",
				isRandomizing ? "stop" : "start",
				" the track wheel."
			] }),
			/* @__PURE__ */ jsx("br", {}),
			track !== "" && /* @__PURE__ */ jsx("img", {
				id: style_module_default.stopRandomButton,
				src: `/${track}.jpg`,
				width: 250,
				height: 250,
				alt: tracksList[track],
				onClick: randomButtonOnClick
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsxs("form", { children: [
				/* @__PURE__ */ jsx("input", {
					type: "checkbox",
					id: "removeFromPool",
					name: "removeFromPool",
					onChange: (e) => removePoolCheckboxOnHandler(e),
					checked: isRemovePoolChecked
				}),
				/* @__PURE__ */ jsx("label", {
					htmlFor: "removeFromPool",
					style: {
						fontSize: "20px",
						marginLeft: "5px"
					},
					children: "Remove from Pool"
				}),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("input", {
					type: "button",
					value: "Click to restore the pool",
					onClick: () => resetTrackPool(),
					style: {
						fontSize: "20px",
						marginTop: "35px"
					}
				})
			] })
		]
	});
});
// app/Components/Routing.tsx
function Routing() {
	return /* @__PURE__ */ jsx(Fragment, {});
}
// app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta$2
});
function meta$2({}) {
	return [{ title: "New React Router App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(HomePage, {}), /* @__PURE__ */ jsx(Routing, {})] });
});
// app/Pages/ScoreTracker.tsx
var ScoreTracker_exports = /* @__PURE__ */ __exportAll({
	default: () => ScoreTracker_default,
	meta: () => meta$1
});
function meta$1({}) {
	return [{ title: "Score Tracker" }, {
		name: "description",
		content: "Bao Phung Homepage"
	}];
}
var ScoreTracker_default = UNSAFE_withComponentProps(function ScoreTrackerPage() {
	const { format } = useLocation().state || { format: null };
	const navigate = useNavigate();
	const [teamName, setTeamName] = useState("");
	const [allowTeamInput, setAllowTeamInput] = useState(true);
	const teamInputRef = useRef(null);
	const scoreInputRef = useRef(null);
	const [currentRace, setCurrentRace] = useState(1);
	const [currentPlacement, setCurrentPlacement] = useState(1);
	const maxPlayers = format === "8" || format === "12" ? 24 : 12;
	const [teams, setTeams] = useState([]);
	const [teamsCopy, setTeamsCopy] = useState([]);
	const [addFormVisible, setAddFormVisible] = useState(true);
	const [scoreFormVisible, setScoreFormVisible] = useState(false);
	class Team {
		#name;
		#score;
		#entries;
		constructor(name) {
			this.#name = name;
			this.#score = 0;
			this.#entries = parseInt(format);
		}
		getName() {
			return this.#name;
		}
		getScore() {
			return this.#score;
		}
		getEntries() {
			return this.#entries;
		}
		setEntry(placement) {
			if (this.#entries > 0) {
				this.#addPoints(placement);
				this.#entries--;
				return true;
			}
			alert(`No more entries available for ${this.#name}.`);
			return false;
		}
		resetEntries() {
			if (this.#entries === 0) this.#entries = parseInt(format);
		}
		#addPoints(placement) {
			let pointPlacements;
			if (maxPlayers === 12) pointPlacements = [
				15,
				12,
				10,
				9,
				8,
				7,
				6,
				5,
				4,
				3,
				2,
				1
			];
			else if (maxPlayers === 24) pointPlacements = [
				15,
				12,
				10,
				9,
				9,
				8,
				8,
				7,
				7,
				6,
				6,
				6,
				5,
				5,
				5,
				4,
				4,
				4,
				3,
				3,
				3,
				2,
				2,
				1
			];
			else return;
			this.#score += pointPlacements[placement - 1];
		}
	}
	function AddTeamForm() {
		return /* @__PURE__ */ jsxs("form", {
			onSubmit: handleAddTeam,
			id: style_module_default.scoreTrackerTeamSubmitForm,
			children: [/* @__PURE__ */ jsx("label", {
				htmlFor: "teamNameInput",
				children: "Enter Team Name:"
			}), /* @__PURE__ */ jsx("input", {
				type: "text",
				id: "teamNameInput",
				name: "teamNameInput",
				value: teamName,
				onChange: (e) => setTeamName(e.target.value),
				ref: teamInputRef,
				style: {
					backgroundColor: "white",
					color: "black"
				},
				required: true,
				autoFocus: true
			})]
		});
	}
	function AddScoreForm() {
		let placementString;
		if (currentPlacement === 1 || currentPlacement === 21) placementString = "st";
		else if (currentPlacement === 2 || currentPlacement === 22) placementString = "nd";
		else if (currentPlacement === 3 || currentPlacement === 23) placementString = "rd";
		else placementString = "th";
		return /* @__PURE__ */ jsxs("form", {
			onSubmit: handleAddScore,
			id: style_module_default.scoreTrackerScoreSubmitForm,
			children: [/* @__PURE__ */ jsxs("label", {
				htmlFor: "teamScoreInput",
				children: [
					"Enter team for ",
					currentPlacement,
					placementString,
					" place: "
				]
			}), /* @__PURE__ */ jsx("input", {
				type: "text",
				id: "teamScoreInput",
				name: "score",
				value: teamName,
				onChange: (e) => setTeamName(e.target.value),
				ref: scoreInputRef,
				readOnly: !allowTeamInput,
				style: {
					backgroundColor: "white",
					color: "black"
				},
				required: true,
				autoFocus: true
			})]
		});
	}
	function handleAddTeam(event) {
		event.preventDefault();
		addTeam();
		setTeamName("");
	}
	function handleAddScore(event) {
		event.preventDefault();
		if (teamName === "" || teamName === null || teamName === void 0) {
			alert("Please enter a team.");
			return;
		}
		const teamIndex = teams.findIndex((team) => team.getName().at(0)?.toUpperCase() === teamName.at(0).toUpperCase());
		const teamCopyIndex = teamsCopy.findIndex((team) => team.getName().at(0).toUpperCase() === teamName.at(0)?.toUpperCase());
		if (teamIndex === -1) {
			alert(`Team ${teamName} not found. Please enter an existing team.`);
			setTeamName("");
			return;
		}
		if (teams[teamIndex].getEntries() === 0) {
			alert(`Team ${teamName} has no more entries.`);
			setTeamName("");
			return;
		}
		teams[teamIndex].setEntry(currentPlacement);
		teamsCopy[teamCopyIndex].setEntry(currentPlacement);
		setCurrentPlacement(currentPlacement + 1);
		if (currentPlacement === maxPlayers) {
			setCurrentPlacement(1);
			setCurrentRace(currentRace + 1);
			for (let i = 0; i < teams.length; i++) {
				teams.at(i).resetEntries();
				teamsCopy.at(i).resetEntries();
			}
		}
		setTeamName("");
		teams.sort((a, b) => b.getScore() - a.getScore());
	}
	function addTeam() {
		if (teamName.trim().length > 10) {
			alert("The desired team cannot have more than 10 characters.");
			return;
		}
		if (teamName.trim().length === 0) {
			alert("Please enter a team (white space is not counted).");
			return;
		}
		for (let i = 0; i < teams.length; i++) if (teams.at(i).getName().charAt(0).toUpperCase() === teamName.charAt(0).toUpperCase()) {
			alert(`A team with that tag (${teamName.charAt(0).toUpperCase()}) already exists.`);
			return;
		}
		setTeams([...teams, new Team(teamName.trim())]);
	}
	useEffect(() => {
		const setFormat = async () => {
			if (format === void 0 || format === null || format !== "2" && format !== "3" && format !== "4" && format !== "6" && format !== "8" && format !== "12") {
				alert("No/Invalid format selected. Please go back and select a format.");
				navigate("/MarioKart");
				return;
			}
		};
		setFormat();
	}, []);
	useEffect(() => {
		if (addFormVisible && maxPlayers / parseInt(format) === teams.length) {
			alert("Maximum number of teams reached");
			setAddFormVisible(false);
			setScoreFormVisible(true);
			let temp = [];
			for (let i = 0; i < teams.length; i++) temp.push(new Team(teams[i].getName()));
			setTeamsCopy(temp);
		}
	}, [teams]);
	useEffect(() => {
		if (currentRace === 13) {
			alert("The mogi is over!");
			setAllowTeamInput(false);
		}
	}, [currentRace]);
	return format === void 0 || format === null || format !== "2" && format !== "3" && format !== "4" && format !== "6" && format !== "8" && format !== "12" ? /* @__PURE__ */ jsxs("div", {
		className: style_module_default.scoreTrackerContainer,
		children: [/* @__PURE__ */ jsx("div", {
			className: style_module_default.title,
			children: /* @__PURE__ */ jsx("h1", {
				id: style_module_default.scoreTrackerTitle,
				children: "Score Tracker"
			})
		}), /* @__PURE__ */ jsx("div", {
			id: style_module_default.scoreTrackerContent,
			children: /* @__PURE__ */ jsxs("p", { children: [
				"No/Invalid format selected. Please ",
				/* @__PURE__ */ jsx(Link, {
					to: "/MarioKart",
					children: "Click Here"
				}),
				" to go back and select a format."
			] })
		})]
	}) : /* @__PURE__ */ jsxs("div", {
		className: style_module_default.scoreTrackerContainer,
		children: [/* @__PURE__ */ jsx("div", {
			className: style_module_default.title,
			children: /* @__PURE__ */ jsxs("h1", {
				id: style_module_default.scoreTrackerTitle,
				children: [
					format,
					"v",
					format,
					" Score Tracker"
				]
			})
		}), /* @__PURE__ */ jsxs("div", {
			id: style_module_default.scoreTrackerContent,
			children: [
				/* @__PURE__ */ jsxs("p", { children: [
					"This is a page about the score tracker for the ",
					format,
					"v",
					format,
					" format."
				] }),
				/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx(Link, {
					to: "/MarioKart",
					style: {
						"color": "cyan",
						"fontSize": "20px"
					},
					children: "Click Here"
				}), " to return to the Mario Kart page."] }),
				/* @__PURE__ */ jsx("div", {
					className: style_module_default.scoreTrackerTeamsContainer,
					children: /* @__PURE__ */ jsxs("div", {
						className: style_module_default.teamNameDisplay,
						children: [
							currentRace <= 12 && maxPlayers / parseInt(format) === teams.length && /* @__PURE__ */ jsxs("p", { children: ["Race #", currentRace] }),
							currentRace > 12 && /* @__PURE__ */ jsx("p", { children: "Mogi is over!" }),
							/* @__PURE__ */ jsx("br", {}),
							teams.map((team, index) => /* @__PURE__ */ jsxs("span", { children: [
								team.getName(),
								" (",
								team.getScore(),
								") ",
								index < teams.length - 1 ? " | " : ""
							] }, team.getName())),
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("br", {}),
							teamsCopy !== void 0 && teamsCopy !== null && /* @__PURE__ */ jsxs(Fragment, { children: [maxPlayers / parseInt(format) === teams.length && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("p", { children: "Number of entries: " }), /* @__PURE__ */ jsx("br", {})] }), teamsCopy.map((team, index) => /* @__PURE__ */ jsxs("span", { children: [
								team.getName(),
								" (",
								team.getEntries(),
								") ",
								index < teams.length - 1 ? " | " : ""
							] }, index + teams.length))] })
						]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: style_module_default.scoreTrackerFormContainer,
					children: [addFormVisible && /* @__PURE__ */ jsx(AddTeamForm, {}), scoreFormVisible && /* @__PURE__ */ jsx(AddScoreForm, {})]
				})
			]
		})]
	});
});
// app/Pages/404Page.tsx
var _404Page_exports = /* @__PURE__ */ __exportAll({
	default: () => _404Page_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "404 Not Found" }, {
		name: "description",
		content: "Not Found"
	}];
}
var _404Page_default = UNSAFE_withComponentProps(function NotFoundPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: style_module_default.title,
			children: [
				/* @__PURE__ */ jsx("h1", {
					id: "404Title",
					children: "Page Not Found"
				}),
				/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx(Link, {
					to: "/",
					style: {
						"color": "cyan",
						"fontSize": "20px"
					},
					children: "Click Here"
				}), " to return to the home page."] }),
				/* @__PURE__ */ jsx("br", {})
			]
		}),
		/* @__PURE__ */ jsx("div", {
			className: style_module_default.page,
			children: /* @__PURE__ */ jsx("main", {
				className: style_module_default.main,
				children: /* @__PURE__ */ jsx("p", {})
			})
		}),
		/* @__PURE__ */ jsx(NavigationBar, {})
	] });
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
		module: home_exports
	},
	"Pages/MarioKart": {
		id: "Pages/MarioKart",
		parentId: "root",
		path: "MarioKart",
		index: void 0,
		caseSensitive: void 0,
		module: MarioKart_exports
	},
	"Pages/WorldRandomizer": {
		id: "Pages/WorldRandomizer",
		parentId: "root",
		path: "MarioKart/MKWorld",
		index: void 0,
		caseSensitive: void 0,
		module: WorldRandomizer_exports
	},
	"Pages/ScoreTracker": {
		id: "Pages/ScoreTracker",
		parentId: "root",
		path: "ScoreTracker",
		index: void 0,
		caseSensitive: void 0,
		module: ScoreTracker_exports
	},
	"Pages/AboutPage": {
		id: "Pages/AboutPage",
		parentId: "root",
		path: "About",
		index: void 0,
		caseSensitive: void 0,
		module: AboutPage_exports
	},
	"Pages/ProjectPage": {
		id: "Pages/ProjectPage",
		parentId: "root",
		path: "Projects",
		index: void 0,
		caseSensitive: void 0,
		module: ProjectPage_exports
	},
	"Pages/404Page": {
		id: "Pages/404Page",
		parentId: "root",
		path: "*",
		index: void 0,
		caseSensitive: void 0,
		module: _404Page_exports
	}
};
var allowedActionOrigins = false;
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr, unstable_apiOnly, unstable_apiServerOrigin };
