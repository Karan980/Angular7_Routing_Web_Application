import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
 URL = 'https://api.github.com/orgs/angular';
  constructor(private http: HttpClient) { }

getMembers(){
  return this.http.get(this.URL+'/members');
}
getHooks(){
  return this.http.get(this.URL+'/hooks');
}
getEvents(){
  return this.http.get(this.URL+'/events');
}
getUserDetails(url){
  return this.http.get(url);

}
getRepo(){
  return this.http.get(this.URL+'/repos');
}
}