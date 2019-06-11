package n15g.cob.util;

import java.util.UUID;

/**
 * Random key generator.
 */
public class KeyGenerator {

    /**
     * @return Random key.
     */
    public static String generateKey() {
        return UUID.randomUUID().toString();
    }
}
