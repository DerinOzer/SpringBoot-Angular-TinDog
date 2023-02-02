package com.polytech.tindog.Dog;

import com.polytech.tindog.Owner.Owner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.UUID;

@Service
public class DogService {
    @Autowired
    private DogRepository dogRepository;

    public boolean dogExists(UUID id){
        if(dogRepository.findById(id).isPresent())
            return true;
        return false;
    }

    public Dog createDog(String dogname, Date birthday,String bio, String gender, String ownerId, MultipartFile multipartImage) throws Exception {
        Dog dog = new Dog(dogname,birthday,bio,gender,ownerId);
        dog.setPicture(multipartImage.getBytes());
        return dogRepository.save(dog);
    }

    public Dog[] findDogsByOwnerId(String ownerId){
        return dogRepository.findByOwnerId(ownerId).get();
    }
}
