package com.polytech.tindog.Message;
import com.polytech.tindog.Dog.Dog;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table
public class Message {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID Id;
    private String MessageBody;
    private Date CreateDate;
    @ManyToOne
    @JoinColumn(name="SenderId", nullable=false)
    private com.polytech.tindog.Dog.Dog Dog;
    private UUID ParentMessageId;
    @OneToOne(mappedBy = "Message")
    private com.polytech.tindog.Recipient.Recipient Recipient;

    public Message() {}

    public UUID getId() {
        return Id;
    }

    public void setId(UUID id) {
        Id = id;
    }

    public String getMessageBody() {
        return MessageBody;
    }

    public void setMessageBody(String messageBody) {
        MessageBody = messageBody;
    }

    public Date getCreateDate() {
        return CreateDate;
    }

    public void setCreateDate(Date createDate) {
        CreateDate = createDate;
    }

    public Dog getDog() {
        return Dog;
    }

    public void setSenderDog(Dog senderDog) {
        Dog = senderDog;
    }

    public UUID getParentMessageId() {
        return ParentMessageId;
    }

    public void setParentMessageId(UUID parentMessageId) {
        ParentMessageId = parentMessageId;
    }

    public com.polytech.tindog.Recipient.Recipient getRecipient() {
        return Recipient;
    }

    public void setRecipient(com.polytech.tindog.Recipient.Recipient recipient) {
        Recipient = recipient;
    }
}
