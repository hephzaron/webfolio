export interface Project {
    id: string;
    links: {
        live?: `${string}.${string}`;
        figma?: string;
        github?: `/${string}` | `${string}/${string}`
    };
    techs: string[];
    hasImage?: boolean;
    isSmall?: boolean;
    isInProgress?: boolean;
    isRecent ?: boolean;
    isPublication ?: boolean;
    isEmbeddedProject ?: boolean;
    isMachineLearning ?: boolean;
    isModelSimulation ?: boolean;
    isInProgress ?: boolean;
}