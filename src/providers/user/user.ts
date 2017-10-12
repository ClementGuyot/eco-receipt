import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UserComponent} from '../../entities/user.model';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  getApiUrl : string = "http://localhost:8080/api/user/findByUserName?userName=";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  private handleError(error: any): Promise<UserComponent> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getUser(name: string): Promise<UserComponent> {
    const url = `${this.getApiUrl}${name}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json() as UserComponent
$      })
      .catch(this.handleError);
  }
}
