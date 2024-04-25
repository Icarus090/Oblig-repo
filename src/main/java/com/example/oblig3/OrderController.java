package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderRep rep;

    @PostMapping("/saveOrder")
    public void saveOrder(@RequestBody Order order) {
        rep.saveAllOrders(order);
    }

    @GetMapping("/getOrders")
    public List<Order> getOrders() {
        return rep.getAllOrders();
    }

    @DeleteMapping("/deleteOrders")
    public void deleteOrders() {
        rep.deleteOrders();
    }
}