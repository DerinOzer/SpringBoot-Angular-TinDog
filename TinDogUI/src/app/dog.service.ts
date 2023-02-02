import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from './dog';
import { Owner } from './owner';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  CreateDogProfile(dogname: string, birthday:Date,bio:string, gender:string, ownerId:string ,file: File): Observable<Dog>
  {
    const formData = new FormData();
    formData.append("dogname",dogname);
    formData.append("birthday", birthday.toLocaleString());
    formData.append("bio",bio);
    formData.append("gender",gender);
    formData.append("ownerId",ownerId);
    formData.append("multipartImage", file);
    return this.httpClient.post<any>("http://localhost:8080/create-dog",formData);
  }

  constructor(private httpClient: HttpClient) { }
}
