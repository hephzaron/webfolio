import Path from "../components/Path.js";
import ProjectList from "../components/ProjectList.js";

import "styles/pages/projects.sass"

export default (t, t2) => {
    return /*html*/ `
        ${Path({ description: t.description })}
        ${ProjectList({ title: t.recent, filter: (p) => p.isRecent }, t2.projects)}
        ${ProjectList({ title: t.publication, filter: (p) => p.isPublication }, t2.projects)}
        ${ProjectList({ title: t.embeddedProjects, filter: (p) => p.isEmbeddedProject }, t2.projects)}
        ${ProjectList({ title: t.machineLearning, filter: (p) => p.isMachineLearning }, t2.projects)}
        ${ProjectList({ title: t.modelSimulation, filter: (p) => p.isModelSimulation }, t2.projects)}
        ${ProjectList({ title: t.inProgress, filter: (p) => p.isInProgress }, t2.projects)}`;
};
