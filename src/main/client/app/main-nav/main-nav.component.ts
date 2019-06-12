import {IComponentOptions, ILogService} from "angular";

class MainNavController {
    /* @ngInject */
    constructor($log: ILogService) {
        $log.info("MainNavController");
    }
}

export const MainNavComponent: IComponentOptions = {
    controller: MainNavController,
    template: require("./main-nav.component.html")
};
