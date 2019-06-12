import * as angular from "angular";
import {IHttpProvider, ILocationProvider, ILogService} from "angular";
import {TransitionService} from "@uirouter/core";

let html5mode = ($locationProvider: ILocationProvider) => $locationProvider.html5Mode(true);

const ieCacheFix = ($httpProvider: IHttpProvider) => {
    // Initialize http get header defaults if required
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }

    // Disable IE ajax request caching
    $httpProvider.defaults.headers.get["If-Modified-Since"] = 0;
};

const setTitleOnStateTransition = ($transitions: TransitionService, $document, $log: ILogService) => {
    $transitions.onSuccess({}, (transition: any) => {
        let $title = transition.injector().get('$title');
        $log.info(`Setting document title [${$title}]`);
        $document[0].title = $title;
    });
};


export const ConfigModule = angular.module("app.config", [])
    .config(html5mode)
    .config(ieCacheFix)
    .run(setTitleOnStateTransition)
    .name;
