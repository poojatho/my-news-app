package com.stackroute.newsapiservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/news")
@CrossOrigin("*")
public class NewsApiController {

    @GetMapping()
    public String helloWorld(){
        return "Server is running";
    }

    @GetMapping("/{category}")
    public Object getNews(@PathVariable("category") String category) {
        if(category.equals("all")) category="";
        String url="https://newsapi.org/v2/top-headlines?country=in&apiKey=491c4d4ae7ce497985f111057abbf0ec&category="+category;
        RestTemplate restTemplate = new RestTemplate();
        Object news = restTemplate.getForObject(url, Object.class);
        return news;

    }


}
