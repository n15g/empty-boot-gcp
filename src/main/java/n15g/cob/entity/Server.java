package n15g.cob.entity;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Parent;
import n15g.cob.util.KeyGenerator;

/**
 * CoH server.
 * <p>
 * Exists within a {@link ServerGroup} that defines a cluster of servers.
 * Torchbearer is an example of a server within the Homecoming server group.
 */
@Entity
public class Server {

    @Id
    public String id = KeyGenerator.generateKey();

    @Parent
    public Key<ServerGroup> serverGroup;

    public String name;

    public String getId() {
        return id;
    }

    public Server setId(String id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Server setName(String name) {
        this.name = name;
        return this;
    }
}
