package com.polytech.tindog.Match;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table
public class DogMatch {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID Id;

    private UUID JudgingId;

    private UUID JudgedId;
    private Boolean Liked;

    public DogMatch() { }

    public UUID getId() {
        return Id;
    }

    public void setId(UUID id) {
        Id = id;
    }

    public UUID getJudgingId() {
        return JudgingId;
    }

    public void setJudgingId(UUID judgingId) {
        JudgingId = judgingId;
    }

    public UUID getJudgedId() {
        return JudgedId;
    }

    public void setJudgedId(UUID judgedId) {
        JudgedId = judgedId;
    }

    public Boolean getLiked() {
        return Liked;
    }

    public void setLiked(Boolean liked) {
        Liked = liked;
    }
}
