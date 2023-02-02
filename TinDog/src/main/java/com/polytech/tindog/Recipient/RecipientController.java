package com.polytech.tindog.Recipient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class RecipientController {
    @Autowired
    private RecipientService recipientService;
}
