import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { HttpClient } from "@angular/common/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";


export interface IUser {
    name: string;
    email: string;
    phone: string;
    company: any;
}

export class User implements IUser {
    name: string;
    email: string;
    phone: string;
    company: any;

    constructor(name: string, email: string, phone: string, company: any) {
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.company = company;
    }
}

@Injectable()
export class UserService {

    private userURL = "https://jsonplaceholder.typicode.com/users";

    constructor(private _httpClient: HttpClient) {}

    getUsers(): Observable<User[]> {
        console.log("Inside the get users function");
        return this._httpClient.get(this.userURL).map((res) => {
           return res;
        })
        .switchMap((result: Array<any>) => {
            let users: User[] = [];
            result.forEach((user) => {
                let newUser = new User(user.name, user.email, user.phone, user.company);
                users.push(newUser);
            });
            return Observable.of(users);
        })
        .catch((err) => {
            console.log("error has occured");
            return Observable.throw([]);
        });

    }
}
