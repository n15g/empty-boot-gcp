import uiRouter, {StateProvider} from "@uirouter/angularjs";
import * as angular from "angular";
import "angular-sanitize";

import "popper.js";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.js";

import "font-awesome/css/font-awesome.css";

import {AppComponent} from "./app.component";
import {ConfigModule} from "./config.module";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {Module1Module} from "./module1/module1.module";

export const AppModule = angular
    .module("app", [
        "ngSanitize",
        uiRouter,
        ConfigModule,
        Module1Module
    ])
    .component("app", AppComponent)
    .component("mainNav", MainNavComponent)
    .config(($stateProvider: StateProvider) => {
        $stateProvider
            .state("app", {
                abstract: true,
            })
            .state("app.home", {
                url: "/",
                component: "app",
                resolve: {
                    $title: () => "SETME"
                }
            });
    })
    .name;
