module.exports={
    testPathIgnorePatterns:["/node_modules"],
    setupFileAfterEnv:["<rootDir>/src/tests/setupTests.ts"],
    transform:{
        "^.+\\.(js/jsx/ts/tsx)$":"<rootDir>/node_modules/babel-jest"
    },
    testeEnviroment:"jsdom"
}