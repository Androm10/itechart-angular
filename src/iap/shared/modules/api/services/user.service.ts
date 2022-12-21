import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

import { apiRoutesUser } from '@shared/constants/api-routes';
import { BackendProfile } from '@shared/models/backend-entities/backend-profile';
import { BackendUser } from '@shared/models/backend-entities/backend-user';
import { UpdateProfileDto } from '@shared/models/dto/update-profile.dto';
import { Profile } from '@shared/models/entities/profile.entity';
import { User } from '@shared/models/entities/user.entity';
import { ApiService } from '@shared/services/api.service';

@Injectable()
export class UserService {
	constructor(private api: ApiService) {}

	get(id: number): Observable<User> {
		const url = `${apiRoutesUser.get}${id}`;
		return this.api.get<BackendUser>(url).pipe(map((user: BackendUser) => new User(user?.id, user?.login)));
	}

	getByLogin(login: string): Observable<User> {
		const url = apiRoutesUser.getByLogin;
		return this.api.post<BackendUser>(url, { login }).pipe(map((user: BackendUser) => new User(user?.id, user?.login)));
	}

	updateProfile(profile: UpdateProfileDto): Observable<Profile> {
		const url = apiRoutesUser.updateProfile;
		return this.api.put<BackendProfile>(url, profile).pipe(
			map((profile: BackendProfile) => {
				const { id, userId, username, description, birthDate } = profile;
				return new Profile(id, userId, username, description, birthDate);
			}),
		);
	}
}
