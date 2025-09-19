
/**
 * @type {import("../../types/Routes").Routes}
 */
export default {
    "/webfolio/": {
        name: "home",
        element: "Home",
    },
    "/projects": {
        name: "projects",
        element: "Projects",
    },
    "/about-me": {
        name: "about",
        element: "About",
    },
    "/404": {
        name: "404",
        element: "PageNotFound",
    }
};