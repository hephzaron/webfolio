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
    kaggle: "hephzaron",
    linkedin: "daramola-tobi",
    youtube: "oluwatobidaramola9486",
    replit: "",
    codewars: "",
    devTo: "",
    cssBattle: "",
    codepen: "",
    dribble: "",
    email: "tobi_daramola@yahoo.com"

}

export default new Proxy(media, proxy);

