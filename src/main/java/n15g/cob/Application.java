package n15g.cob;

import n15g.cob.config.ApplicationConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

/**
 * Application initialization class.
 */
@SpringBootApplication
@Import(ApplicationConfig.class)
public class Application {

    /**
     * Application launch function.
     *
     * @param args Launch arguments.
     */
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
