package com.ibra.training.models;

import javax.persistence.*;

@Entity
@Table(name = "stadiums")
public class Stadium {

    public Stadium() {
    }

    public Stadium(Long id) {
        this.id = id;
    }

    public Stadium(Long id, String name, Long capacity, String address) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.address = address;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long capacity;
    private String address;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getCapacity() {
        return capacity;
    }

    public void setCapacity(Long capacity) {
        this.capacity = capacity;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
