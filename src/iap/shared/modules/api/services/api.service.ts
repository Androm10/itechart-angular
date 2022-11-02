import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { ConfigService } from '@shared/services/config.service';

@Injectable()
export class ApiService {
	api!: string;
	constructor(private http: HttpClient, private config: ConfigService) {
		this.api = this.config.settings.api;
	}

	get(path: string) {
		return this.http.get(`${this.api}${path}`).pipe(catchError(this.handleError));
	}

	delete(path: string) {
		return this.http.delete(`${this.api}${path}`).pipe(catchError(this.handleError));
	}

	post(path: string, body: Object = {}) {
		return this.http.post(`${this.api}${path}`, body).pipe(catchError(this.handleError));
	}

	put(path: string, body: Object = {}) {
		return this.http.put(`${this.api}${path}`, body).pipe(catchError(this.handleError));
	}

	patch(path: string, body: Object = {}) {
		return this.http.patch(`${this.api}${path}`, body).pipe(catchError(this.handleError));
	}

	uploadFile(path: string, formData: FormData) {
		const headers = new HttpHeaders();
		headers.set('Content-Type', 'multipart/form-data');
		return this.http.post(`${this.api}${path}`, formData, { headers }).pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		// TODO: Add logging of errors
		return throwError(() => error.error);
	}
}
