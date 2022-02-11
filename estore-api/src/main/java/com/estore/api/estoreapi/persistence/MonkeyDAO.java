package com.estore.api.estoreapi.persistence;

import java.io.IOException;
import com.estore.api.estoreapi.model.Monkey;

/**
 * Defines the interface for Monkey object persistence
 * 
 * @author Adrian Burgos awb8593
 */
public interface MonkeyDAO {
   
    /**
     * Creates and saves a {@linkplain Monkey monkey}
     * 
     * @param monkey {@linkplain Monkey monkey} object to be created and saved
     * <br>
     * The id of the monkey object is ignored and a new uniqe id is assigned
     *
     * @return new {@link Monkey monkey} if successful, false otherwise 
     * 
     * @throws IOException if an issue with underlying storage
     */
    Monkey createMonkey(Monkey monkey) throws IOException;

    /**
     * Updates and saves a {@linkplain Monkey monkey}
     * 
     * @param {@link Monkey monkey} object to be updated and saved
     * 
     * @return updated {@link Monkey monkey} if successful, null if
     * {@link Monkey monkey} could not be found
     * 
     * @throws IOException if underlying storage cannot be accessed
     */
    Monkey updateMonkey(Monkey monkey) throws IOException;
    
}
