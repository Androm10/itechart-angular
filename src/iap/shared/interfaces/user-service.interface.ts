import { Observable } from 'rxjs';

import { User } from '@shared/models/entities/user.entity';
import { Profile } from '@shared/models/entities/profile.entity';
import { UpdateProfileDto } from '@shared/models/dto/update-profile.dto';

export interface IUserService {
	getByLogin(login: string): Observable<User>;
	updateProfile(profile: UpdateProfileDto): Observable<Profile>;
}
