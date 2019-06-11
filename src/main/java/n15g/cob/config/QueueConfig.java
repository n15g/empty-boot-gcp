package n15g.cob.config;

import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 *
 */
@Configuration
public class QueueConfig {
    /**
     * @return Register the default message queue.
     */
    @Bean
    public Queue queue() {
        return QueueFactory.getDefaultQueue();
    }
}
