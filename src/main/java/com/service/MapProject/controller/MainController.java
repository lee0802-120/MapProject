package com.service.MapProject.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j
public class MainController {

    @GetMapping("Map")
    public String MapPage(Model model) {
        model.addAttribute("title", "Map");
        model.addAttribute("Name", "네임 : " + "asdfasdf" + " 굿");
        return "common/main";
    }
}
