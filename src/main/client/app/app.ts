import uiRouter, {StateProvider} from "@uirouter/angularjs";
import * as angular from "angular";
import "angular-sanitize";
import "font-awesome/css/font-awesome.css";
import {AppComponent} from "./app.component";
import {ConfigModule} from "./config.module";

angular
    .module("app", [
        "ngSanitize",
        // "ui.bootstrap",
        uiRouter,
        ConfigModule
    ])
    .component("app", AppComponent)
    .config(($stateProvider: StateProvider) => {
        $stateProvider
            .state("app", {
                abstract: true,
            })
            .state("app.home", {
                url: "/",
                component: "app"
            });
    });
