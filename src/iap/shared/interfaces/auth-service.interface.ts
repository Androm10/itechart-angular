import { Observable } from 'rxjs';

import { User } from '@shared/models/entities/user.entity';

export interface IAuthService {
	login(login: string, password: string): Observable<any>;
	loginAdmin(login: string, password: string): Observable<any>;
	signup(login: string, password: string, username: string, passwordConfirmation: string): Observable<User>;
	isLoggedIn(): boolean;
	logout(): void;
}
