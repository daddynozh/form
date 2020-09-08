import {Injectable} from '@angular/core'
import {User} from '../interfaces'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private token = null

    constructor(private http: HttpClient) {

    }

register() {

}

login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>('/api/auth/login', user)
    .pipe(
        tap(
            ({token}) => { localStorage.setItem('auth-token', token)
    this.setToken(token)
            }
        )
    )
}

    setToken(token: string) {
        this.token = token
    }

    getToken(): String {
        return this.token
    }
    
    isAuthenticated(): boolean {
        return !! this.token
    }

    logOut() {
        this.setToken(null)
        localStorage.clear()
    }
} 