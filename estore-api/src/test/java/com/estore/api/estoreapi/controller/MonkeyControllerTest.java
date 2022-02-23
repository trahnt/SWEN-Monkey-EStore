package com.estore.api.estoreapi.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.io.IOException;

import com.estore.api.estoreapi.persistence.MonkeyDAO;
import com.estore.api.estoreapi.model.Monkey;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/**
 * Test the Monkey Controller class
 * 
 * @author Jack Yakubison jcy4561
 */
@Tag("Controller-tier")
public class MonkeyControllerTest {
    private MonkeyController monkeyController;
    private MonkeyDAO mockMonkeyDAO;

    /**
     * Before each test, create a new MonkeyController object and inject
     * a mock Monkey DAO
     */
    @BeforeEach
    public void setupMonkeyController() {
        mockMonkeyDAO = mock(MonkeyDAO.class);
        monkeyController = new MonkeyController(mockMonkeyDAO);
    }



}