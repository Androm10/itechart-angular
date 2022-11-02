import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { User } from '@shared/models/entities/user.entity';
import { Profile } from '@shared/models/entities/profile.entity';
import { UpdateProfileDto } from '@shared/models/dto/update-profile.dto';
import { IUserService } from '@shared/interfaces/user-service.interface';
import { ApiService } from './api.service';

@Injectable()
export class UserService implements IUserService {
	constructor(private api: ApiService) {}

	get(id: number): Observable<User> {
		const url = `user/${id}`;
		return this.api.get(url).pipe(map((user: any) => new User(user?.id, user?.login)));
	}

	getByLogin(login: string): Observable<User> {
		const url = `user/get-by-login`;
		return this.api.post(url, { login }).pipe(map((user: any) => new User(user?.id, user?.login)));
	}

	updateProfile(profile: UpdateProfileDto): Observable<Profile> {
		const url = `userinfo/update-profile`;
		return this.api.put(url, profile).pipe(
			map((profile: any) => {
				const { id, userId, username, description, birthDate } = profile;
				return new Profile(id, userId, username, description, birthDate);
			}),
		);
	}
}
