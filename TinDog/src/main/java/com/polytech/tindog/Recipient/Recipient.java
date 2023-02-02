package com.polytech.tindog.Recipient;

import com.polytech.tindog.Dog.Dog;
import com.polytech.tindog.Message.Message;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table
public class Recipient {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID Id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "MessageId", referencedColumnName = "Id")
    private com.polytech.tindog.Message.Message Message;
    /*@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "RecipientId", referencedColumnName = "Id")
    private com.polytech.tindog.Dog.Dog Dog;*/
    private Boolean IsRead;

    public Recipient() {}

    public UUID getId() {
        return Id;
    }

    public void setId(UUID id) {
        Id = id;
    }

    public Message getMessage() {
        return Message;
    }

    public void setMessage(Message message) {
        Message = message;
    }

    /*public Dog getDog() {
        return Dog;
    }

    public void setDog(Dog dog) {
        Dog = dog;
    }*/

    public Boolean getRead() {
        return IsRead;
    }

    public void setRead(Boolean read) {
        IsRead = read;
    }
}
