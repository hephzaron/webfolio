import Layout from "./views/Layout";
import routes from "./consts/routes";
import startTitleAnimation from "./helpers/startTitleAnimation";
import localeHandler from "./helpers/localeHandler";
import loadCssFile from "./helpers/loadCssFile";
import replacePath from "./helpers/replacePath";

import "styles/styles.sass";
    
const base = "/webfolio";
const path = window.location.pathname.replace(base, "");


const rootId = "root";
async function render() {
    const path = routes[window.location.pathname] ?? routes["/404"];
    console.log(path, routes[window.location.pathname], window.location.pathname)

    loadCssFile(path.name);
    startTitleAnimation(path.name);

    document.getElementById(rootId).innerHTML = await Layout(
        (
            await import(`./views/${path.element}`)
        ).default,
        path
    );
}

replacePath()
    .then(() => render())
    .then(() => localeHandler());
