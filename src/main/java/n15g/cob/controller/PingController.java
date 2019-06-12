package n15g.cob.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.OffsetDateTime;

/**
 * Ping Controller, responds to a ping to see if the backend is up.
 */
@RestController
public class PingController {

    /**
     * Ping.
     *
     * @return Pong.
     */
    @GetMapping("/api/ping")
    public OffsetDateTime index() {
        return OffsetDateTime.now();
    }
}
