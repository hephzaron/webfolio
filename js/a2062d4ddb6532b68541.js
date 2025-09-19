"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[847],{

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {
    return /*html*/`
        <div class="path">
            <h1 class="h1 path__name">${window.location.pathname.slice(1)}</h1>
            <p class="path__description">${description}</p>
        </div>
    `
});

/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(778);
/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(975);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {
    return /*html*/ `
        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({ description: t.description })}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ title: t.recent, filter: (p) => p.isRecent }, t2.projects)}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ title: t.publication, filter: (p) => p.isPublication }, t2.projects)}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ title: t.embeddedProjects, filter: (p) => p.isEmbeddedProject }, t2.projects)}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ title: t.machineLearning, filter: (p) => p.isMachineLearning }, t2.projects)}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ title: t.modelSimulation, filter: (p) => p.isModelSimulation }, t2.projects)}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ title: t.inProgress, filter: (p) => p.isInProgress }, t2.projects)}`;
});


/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ts: "TypeScript",
    js: "JavaScript",
    python: "Python",
    sqlite: "SQLite",
    mongo: "MongoDB",
    postgreSql: "PostgreSQL",
    html: "HTML",
    css: "CSS",
    sass: "SASS",
    scss: "SCSS",
    less: "Less",
    stylus: "Stylus",
    ejs: "EJS",
    jinja: "Jinja2",
    node: "Node.js",
    vscode: "VSCode",
    nvim: "NeoVim",
    figma: "Figma",
    git: "Git & GitHub",
    xfce: "XFCE",
    react: "React",
    discordJs: "Discord.js",
    flask: "Flask",
    quart: "Quart",
    express: "Express",
    rtk: "RTK",
    zod: "Zod",
    webpack: "WebPack",
    pug: "Pug",
    gulp: "Gulp",
    next: "Next",
    deno: "Deno",
    pixijs: "PixiJS",
    preact: "Preact",
    cpp: "C++",
    verilog: "Verilog HDL",
    proteus: "Proteus",
    arduino: "Arduino",
    raspberry: "Raspberry Pi",
    ltspice: "LTspice",
    matlab: "MATLAB",
    vivado: "Vivado",
    scikit: "Scikit-learn",
    pandas: "Pandas",
    numpy: "NumPy",
    tensorflow: "TensorFlow",
    keras: "Keras",
    pytorch: "PyTorch",
    opencv: "OpenCV",
    pyspark: "PySpark",
    nltk: "Natural Language Toolkit (NLTK)",
    dsp: "Digital Signal Processing (DSP)",
    optimization: "Mathematical Optimization Techniques"
});

/***/ }),

/***/ 975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProjectList)
});

;// ./src/app/consts/projects.js
/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "deplos",
        links: {
            figma: "1198393124994627983",
            live: "deplos.github.io",
            github: "Deplos/deplos.github.io"
        },
        techs: ["pug", "stylus", "node"],
        hasImage: true,
        isRecent: true
    },
    {
        id: "pixel-battle",
        links: {
            live: "pixelbattle.fun",
            github: "pixelate-it/pixelbattle-frontend",
        },
        techs: ["preact", "css", "pixijs", "ts"],
        hasImage: true,
        isInProgress: true
    },
    {
        id: "feedrum",
        links: {
            github: "Feedrum-Project/feedrum-next",
            figma: "1314605686829534158"
        },
        techs: ["node", "next", "react", "zod"],
        hasImage: true,
        isPublication: true
    },
    {
        id: "chertnodes",
        links: {
            figma: "1149829028455305659",
        },
        techs: ["python", "flask", "scss"],
        hasImage: true,
        isEmbeddedProject: true
    },
    {
        id: "protectx",
        techs: ["react", "node", "discordJs"],
        links: {
            figma: "1168662007492356291",
        },
        hasImage: true,
        isPublication: true
    },
    {
        id: "khanswers",
        techs: ["express", "node", "ejs"],
        links: {
            live: "khanswers.vercel.app",
            github: "/kahoot-answers",
        },
        hasImage: true,
        isModelSimulation: true
    },
    {
        id: "kotikbot",
        techs: ["html", "css", "js"],
        links: {
            live: "kotikbot.github.io",
            github: "kotikbot/kotikbot.github.io",
        },
        hasImage: true,
        isModelSimulation: true
    },
    {
        id: "portfolio",
        techs: ["js", "sass", "webpack"],
        links: {
            figma: "1164933568884615740",
            github: "/EliasDevis.github.io",
            live: "eliasdevis.github.io"
        },
        hasImage: true,
        isEmbeddedProject: true
    },

    {
        id: "discordbot",
        techs: ["ts", "discordJs", "node"],
        links: {
            github: "/bot-template",
        },
        isMachineLearning: true
    },
    {
        id: "chesspro",
        techs: ["figma"],
        links: {
            figma: "1148344443083977909",
        },
        isMachineLearning: true
    },
    {
        id: "madhost",
        techs: ["pug", "less", "gulp", "node"],
        links: {
            live: "madhost.pw",
        },
        hasImage: true,
        isInProgress: true
    },
];

/* harmony default export */ const consts_projects = (projects);

// EXTERNAL MODULE: ./src/app/consts/websites.js
var websites = __webpack_require__(175);
// EXTERNAL MODULE: ./src/app/consts/techs.js
var techs = __webpack_require__(928);
// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var media = __webpack_require__(934);
;// ./src/app/components/Project.js





function mapLinks(links) {
    function map(link) {
        let href =
        "https://" + (link === "live" ? "" : websites/* default */.A[link]) + links[link];

        if (link === "figma") href = `https://figma.com/community/file/${links[link]}`
        if (link === "github" && links[link].startsWith("/")) href = media/* default */.A.github + links[link]


        const className = link === "cached" ? "button__secondary" : "";
        const name = `${link[0].toUpperCase()}${link.slice(1)}`;

        return /*html*/ `<a href="${href}" class="button ${className}">${name} =></a>`;
    }

    return Object.keys(links).map(map).join("");
}

/* harmony default export */ const Project = (({ id }, t) => {
    const { hasImage, techs: projectTech, links } = consts_projects.find(
        (project) => project.id === id
    );

    return /*html*/ `
        <div class="project">
            ${
                hasImage
                    ? `<img src="/images/projects/${id}.webp" alt="${t[id].name}" class="project__image">`
                    : ""
            }
            
            <ul class="project__techs">
                ${projectTech
                    .map(
                        (tech) =>
                            /*html*/ `<li class="project__tech">${techs/* default */.A[tech]}</li>`
                    )
                    .join("")}
            </ul> 

            <div class="project__content">
                <div class="project__name">${t[id].name}</div>
                <div class="project__description">${t[id].description}</div>
                <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div> 
    `;
});

;// ./src/app/components/ProjectList.js




/* harmony default export */ const ProjectList = (({ title, filter = () => true, limit = consts_projects.length }, t) => {
    return /*html*/ `
            ${title ? `<div> <h2 class="h2">${title}</h2>` : ""}
            <div class="project-list">
                ${consts_projects
                    .filter(filter)
                    .slice(0, limit)
                    .sort((a, b) => a.hasImage - b.hasImage)
                    .map(({ id }) => Project({ id }, t))
                    .join("")}
            </div>
        ${title ? "</div>" : ""}
    `;
});


/***/ })

}]);