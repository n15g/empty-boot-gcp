import * as angular from "angular";
import {IHttpProvider, ILocationProvider} from "angular";

let html5mode = ($locationProvider: ILocationProvider) => $locationProvider.html5Mode(true);

const ieCacheFix = ($httpProvider: IHttpProvider) => {
    // Initialize http get header defaults if required
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }

    // Disable IE ajax request caching
    $httpProvider.defaults.headers.get["If-Modified-Since"] = 0;
};


export const ConfigModule = angular
    .module("app.config", [])
    .config(html5mode)
    .config(ieCacheFix)
    .name;

