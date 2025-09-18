import proxy from "../proxies/media"

const media = {
    discord: {
        id: "",
        tag: "",
    },
    stackOverflow: {
        id: "",
        name: "",
    },
    github: "hephzaron",
    kaggle: "tobi",
    figma: "",
    replit: "",
    codewars: "",
    devTo: "",
    cssBattle: "",
    codepen: "",
    dribble: "",
    email: "tobi_daramola@yahoo.com"

}

export default new Proxy(media, proxy);

