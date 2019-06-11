package n15g.cob.config;

import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

/**
 * Web application configuration.
 */
@Configuration
public class WebConfig implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {

    /**
     * To allow the SPA front-end to handle resolving urls, have the backend respond to any path with the index page.
     * Otherwise, when you refresh on a route such as '/mypage' The server tries to load the '/mypage' controller, rather
     * than loading the index page and letting the SPA load the '/mypage' route.
     */
    @Override
    public void customize(ConfigurableServletWebServerFactory factory) {
        factory.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/"));
    }
}
