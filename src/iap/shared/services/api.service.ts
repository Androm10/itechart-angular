import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
	constructor(private http: HttpClient) {}

	get<T>(path: string) {
		return this.http.get<T>(path);
	}

	delete(path: string) {
		return this.http.delete<boolean>(path);
	}

	post<T>(path: string, body: Object = {}) {
		return this.http.post<T>(path, body);
	}

	put<T>(path: string, body: Object = {}) {
		return this.http.put<T>(path, body);
	}

	patch<T>(path: string, body: Object = {}) {
		return this.http.patch<T>(path, body);
	}

	uploadFile(path: string, formData: FormData) {
		const headers = new HttpHeaders();
		headers.set('Content-Type', 'multipart/form-data');
		return this.http.post<string>(path, formData, { headers });
	}
}
