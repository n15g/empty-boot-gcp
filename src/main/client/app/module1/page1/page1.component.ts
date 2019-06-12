import {IComponentOptions, ILogService} from "angular";

class Page1Controller {

    /* @ngInject */
    constructor($log: ILogService) {
        $log.info("Page1Controller");
    }
}

export const Page1Component: IComponentOptions = {
    controller: Page1Controller,
    template: require("./page1.component.html")
};
