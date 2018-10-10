import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardUserService {
  constructor(private http: HttpClient) {}

  getDataUser(username) {
    console.log(username);
    return this.http.get(`https://api.github.com/users/${username}`);
  }
}
