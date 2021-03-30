package com.ibra.training.services;

import com.ibra.training.models.Stadium;

import java.util.List;

public interface StadiumService {

    Stadium create(Stadium stadium);
    Stadium get(Long stadium);
    Stadium update(Stadium stadium);
    void delete(Long stadium);
    List<Stadium> getAll();
}
