import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ID_TOKEN } from '@shared/constants/auth';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const headers: any = {
			Accept: 'application/json',
		};

		const token = localStorage.getItem(ID_TOKEN);
		console.log(token || 'нету токена');
		if (token) {
			headers['Authorization'] = `Bearer ${token}`;
		}

		const request = req.clone({ setHeaders: headers });
		return next.handle(request);
	}
}
