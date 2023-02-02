package com.polytech.tindog.Dog;
import com.polytech.tindog.Owner.Owner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Date;
import java.util.UUID;

@RestController
@CrossOrigin
public class DogController {
    @Autowired
    private DogService dogService;

    @PostMapping("/create-dog")
    public Dog createOwner(@RequestParam String dogname, @RequestParam Date birthday,
                             @RequestParam String bio, @RequestParam String gender,
                           @RequestParam String ownerId, @RequestParam MultipartFile multipartImage) throws Exception {
        return dogService.createDog(dogname,birthday,bio,gender,ownerId,multipartImage);
    }

    @GetMapping("/dogs-of-owner")
    public Dog[] getDogsByOwner(@RequestParam String ownerId){
        return dogService.findDogsByOwnerId(ownerId);
    }

}