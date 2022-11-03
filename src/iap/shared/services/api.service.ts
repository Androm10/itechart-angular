import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EnvironmentService } from './environment.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
	api!: string;
	constructor(private http: HttpClient, private environmentService: EnvironmentService) {
		this.api = this.environmentService.getValue('api');
	}

	get(path: string) {
		return this.http.get(`${this.api}${path}`);
	}

	delete(path: string) {
		return this.http.delete(`${this.api}${path}`);
	}

	post(path: string, body: Object = {}) {
		return this.http.post(`${this.api}${path}`, body);
	}

	put(path: string, body: Object = {}) {
		return this.http.put(`${this.api}${path}`, body);
	}

	patch(path: string, body: Object = {}) {
		return this.http.patch(`${this.api}${path}`, body);
	}

	uploadFile(path: string, formData: FormData) {
		const headers = new HttpHeaders();
		headers.set('Content-Type', 'multipart/form-data');
		return this.http.post(`${this.api}${path}`, formData, { headers });
	}
}
