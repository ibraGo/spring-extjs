package com.ibra.training.controllers;

import com.ibra.training.models.Stadium;
import com.ibra.training.services.StadiumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/stadiums")
public class StadiumController{

    @Autowired
    private StadiumService stadiumService;

    @RequestMapping(value = "create/", method= RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE,
    consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Stadium createProduct(@RequestBody Stadium stadium) {
        return stadiumService.create(stadium);
    }

    @RequestMapping(value = "edit/{id}", method= RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Stadium editProduct(@PathVariable Long id, @RequestBody Stadium stadium) {
        stadium.setId(id);
        return stadiumService.create(stadium);
    }

    @RequestMapping(value = "delete/{id}", method= RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public void deleteProduct(@PathVariable Long id) {
        stadiumService.delete(id);
    }

    @RequestMapping(value = "", method= RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<Stadium> allProduct() {
        return stadiumService.getAll();
    }

}
