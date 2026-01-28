package com.gaur.jf_task_intern.controller;

import com.gaur.jf_task_intern.model.User;
import com.gaur.jf_task_intern.service.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // REGISTER
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        authService.register(user);
        return ResponseEntity.ok("User registered successfully");
    }

    // LOGIN → TOKEN
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        String token = authService.login(user.getEmail(), user.getPassword());
        return ResponseEntity.ok(Map.of("token", token));
    }

    // PROFILE → TOKEN SE USER FETCH
    @GetMapping("/profile")
    public ResponseEntity<User> profile(HttpServletRequest request) {
        User user = authService.getProfile(request);
        return ResponseEntity.ok(user);
    }
}
