import uiRouter, {StateProvider} from "@uirouter/angularjs";
import * as angular from "angular";
import {Page1Component} from "./page1/page1.component";

export const Module1Module = angular
    .module("app.module1", [
        "ngSanitize",
        uiRouter
    ])
    .component("page1", Page1Component)
    .config(($stateProvider: StateProvider) => {
        $stateProvider
            .state("app.page1", {
                url: "/page1",
                component: "page1",
                resolve: {
                    $title: () => "Page 1"
                }
            });
    })
    .name;
