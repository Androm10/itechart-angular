import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, tap } from 'rxjs';
import * as dayjs from 'dayjs';

import { EXPIRES_AT, ID_TOKEN } from '@shared/constants/auth';
import { JwtSession } from '@shared/models/dto/jwt-session.dto';
import { User } from '@shared/models/entities/user.entity';
import { IAuthService } from '@shared/interfaces/auth-service.interface';
import { ApiService } from '@shared/modules/api/services/api.service';

// TODO: add refresh token to this strategy
@Injectable({ providedIn: 'root' })
export class JwtAuthService implements IAuthService {
	constructor(private api: ApiService) {}

	login(login: string, password: string): Observable<JwtSession> {
		const url = 'auth/login';
		return this.api.post(url, { login, password }).pipe(
			tap((res: any) => this.setSession(res as JwtSession)),
			shareReplay(),
		);
	}

	loginAdmin(login: string, password: string): Observable<JwtSession> {
		const url = 'auth/login-admin';
		return this.api.post(url, { login, password }).pipe(
			tap((res: any) => this.setSession(res as JwtSession)),
			shareReplay(),
		);
	}

	signup(login: string, password: string, username: string, passwordConfirmation: string): Observable<User> {
		const url = 'auth/signup';
		return this.api
			.post(url, { login, password, passwordConfirmation, username })
			.pipe(map((user: any) => new User(user.id, user.login)));
	}

	logout() {
		localStorage.removeItem(ID_TOKEN);
		localStorage.removeItem(EXPIRES_AT);
	}

	isLoggedIn() {
		return dayjs().isBefore(this.getExpiration());
	}

	getExpiration() {
		const expiration = localStorage.getItem(EXPIRES_AT);
		const expiresAt = JSON.parse(expiration!);
		return dayjs(expiresAt);
	}

	private setSession(jwt: JwtSession) {
		const expiresAt = dayjs().add(Number.parseInt(jwt.expiresIn, 10), 'hours');
		localStorage.setItem(ID_TOKEN, jwt.accessToken);
		localStorage.setItem(EXPIRES_AT, JSON.stringify(expiresAt.valueOf()));
	}
}
