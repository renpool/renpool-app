/** @type {import('ts-jest').InitialOptionsTsJest} */
const config = {
    transform: {
        "^.+\\.ts$": "ts-jest",
        "^.+\\.svelte$": [
            "svelte-jester",
            {
                preprocess: true,
            },
        ],
    },
    moduleFileExtensions: ["js", "ts", "svelte"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

export default config;
