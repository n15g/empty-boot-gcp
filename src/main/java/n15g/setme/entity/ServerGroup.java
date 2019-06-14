package n15g.setme.entity;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import n15g.setme.util.KeyGenerator;

/**
 * CoH server.
 * <p>
 * Different server groups have different servers.
 */
@Entity
public class ServerGroup {
    @Id
    public String id = KeyGenerator.generateKey();
    public String name;

    /**
     * Is this a priority server?
     * Priority servers are popular or well-known.
     * <p>
     * i.e. Not just a homegrown private server.
     */
    public boolean priority;

    public String getId() {
        return id;
    }

    public ServerGroup setId(String id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public ServerGroup setName(String name) {
        this.name = name;
        return this;
    }
}
