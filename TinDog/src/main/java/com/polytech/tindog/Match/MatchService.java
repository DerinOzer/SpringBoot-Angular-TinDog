package com.polytech.tindog.Match;

import com.polytech.tindog.Dog.Dog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchService {
    @Autowired
    private MatchRepository matchRepository;

    public void CreateMatch(Dog Judging, Dog Judged, Boolean Liked){
        DogMatch dogMatch = new DogMatch();
        dogMatch.setJudgingId(Judging.getId());
        dogMatch.setJudgedId(Judged.getId());
        dogMatch.setLiked(Liked);
        matchRepository.save(dogMatch);
    }
}
