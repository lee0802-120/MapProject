package com.service.MapProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String Main(Model model) {
        model.addAttribute("title", "메인 페이지");
        return "common/main";
    }

    @GetMapping("/Map")
    public String MapPage(Model model) {
        model.addAttribute("title", "Map");
        return "common/map";
    }
}
