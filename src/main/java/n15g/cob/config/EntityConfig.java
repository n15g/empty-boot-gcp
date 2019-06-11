package n15g.cob.config;

import contrib.springframework.data.gcp.objectify.config.ObjectifyConfigurer;
import n15g.cob.entity.Server;
import n15g.cob.entity.ServerGroup;

import java.util.Arrays;
import java.util.List;

/**
 * Domain configuration.
 * Register objectify entities, etc.
 */
public class EntityConfig implements ObjectifyConfigurer {
    @Override
    public List<Class<?>> registerObjectifyEntities() {
        return Arrays.asList(
                Server.class,
                ServerGroup.class
        );
    }
}
