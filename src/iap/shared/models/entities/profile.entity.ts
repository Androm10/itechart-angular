// TODO: extend profile entity
export class Profile {
	constructor(
		public id: number,
		public userId: number,
		public username: string,
		public description: string,
		public birthDate: string,
	) {}
}
