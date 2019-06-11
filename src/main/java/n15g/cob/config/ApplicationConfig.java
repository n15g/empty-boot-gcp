package n15g.cob.config;

import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpStatus;

/**
 * Application Spring configuration.
 */
@Configuration
@Import(EntityConfig.class)
public class ApplicationConfig {

    /**
     * @return Register the default message queue.
     */
    @Bean
    public Queue queue() {
        return QueueFactory.getDefaultQueue();
    }

    /**
     * To allow the SPA front-end to handle resolving urls, have the backend respond to any path with the index page.
     * Otherwise, when you refresh on a route such as '/mypage' The server tries to load the '/mypage' controller, rather
     * than loading the index page and letting the SPA load the '/mypage' route.
     *
     * @return Container customizer.
     */
    @Bean
    public EmbeddedServletContainerCustomizer containerCustomizer() {
        return container -> container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/"));
    }
}
