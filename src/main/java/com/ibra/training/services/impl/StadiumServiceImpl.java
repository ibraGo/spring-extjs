package com.ibra.training.services.impl;

import com.ibra.training.models.Stadium;
import com.ibra.training.repository.StadiumRepository;
import com.ibra.training.services.StadiumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StadiumServiceImpl implements StadiumService {

    @Autowired
    private StadiumRepository stadiumRepository;

    @Override
    public Stadium create(Stadium stadium) {
        return stadiumRepository.save(stadium);
    }

    @Override
    public Stadium get(Long stadium) {
        return stadiumRepository.findById(stadium).orElse(null);
    }

    @Override
    public Stadium update(Stadium stadium) {
        return stadiumRepository.save(stadium);
    }

    @Override
    public void delete(Long stadium) {
        stadiumRepository.delete(new Stadium(stadium));
    }

    @Override
    public List<Stadium> getAll() {
        return stadiumRepository.findAll();
    }
}
