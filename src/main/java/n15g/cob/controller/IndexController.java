package n15g.cob.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.NoHandlerFoundException;

/**
 * Application index.
 * Returns index.html, showing the SPA.
 */
@Controller
@ControllerAdvice
public class IndexController {

    /**
     * Context root.
     *
     * @param model Response model.
     * @return index.html
     */
    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("title", "SETME");
        model.addAttribute("description", "SETME");
        return "index";
    }

    /**
     * Redirect any unknown paths back to the index controller.
     * This allows us to use html5 mode for the ui router in the front-end without the routes being seen as controllers on the server when the page is refreshed, or
     * a deep-link is used.
     * <p>
     * For example, if you have a route at '/apples', and the router is using the url 'http://mysite/apples', then when you refresh the page, Spring will no longer
     * attempt to load a controller at '/apples', loading the index and letting ui-router handle the path instead.
     *
     * @param model Response model.
     * @return index page.
     */
    @ExceptionHandler(NoHandlerFoundException.class)
    public String handleError404(Model model) {
        return index(model);
    }
}
