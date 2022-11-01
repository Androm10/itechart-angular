import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {
	settings: any;
	constructor(private http: HttpClient) {}

	async load() {
		const jsonFile = `assets/config/dev.config.json`;
		return new Promise<void>((resolve, reject) => {
			firstValueFrom(this.http.get(jsonFile))
				.then((response: any) => {
					this.settings = response;
					resolve();
				})
				.catch((response: any) => {
					reject(new Error(`Cannot get configuration: ${response}`));
				});
		});
	}
}
