package com.polytech.tindog.Recipient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipientService {
    @Autowired
    private RecipientRepository recipientRepository;

}
