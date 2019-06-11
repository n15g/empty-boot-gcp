import {IComponentOptions, ILogService} from "angular";

class AppController {
    /* @ngInject */
    constructor($log: ILogService) {
        $log.info("AppController");
    }
}

export const AppComponent: IComponentOptions = {
    controller: AppController,
    template: require("./app.html")
};
