import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UserComponent} from '../../entities/user.model';
import {isUndefined} from "ionic-angular/util/util";
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  private utilisateurConnecte:UserComponent;
  getApiUrl : string = "http://localhost:8080/api/user/findByUserName?userName=";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  private handleError(error: any): Promise<UserComponent> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /**
   *
   * @param name the name of the current user
   * @param password the password of the current user
   * @returns {any}
   */
  getUser(name: string, password: string): Promise<UserComponent> {
    if(!isUndefined(this.utilisateurConnecte) && this.utilisateurConnecte.userName === name){
      return Promise.resolve(this.utilisateurConnecte);
    }
    const url = `${this.getApiUrl}${name}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        this.utilisateurConnecte = response.json() as UserComponent;
        return this.utilisateurConnecte;
      })
      .catch(this.handleError);
  }
}
