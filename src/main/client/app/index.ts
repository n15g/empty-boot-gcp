import * as angular from "angular";
import * as AppModule from "./app.module";

let app: typeof AppModule = require("./app.module");

const bootstrap = () => {
    angular.bootstrap(document, ["app"], {
        strictDi: false
    });
};

// Enables Hot Module Replacement.
declare const module: any;
if (module.hot) {
    module.hot.accept("./app", () => {
        app = require("./app"); // ...and here's our dynamic reload
        bootstrap();
    });
}

bootstrap();
