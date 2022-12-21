import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ID_TOKEN } from '@shared/constants/auth';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let request = req;
		const token = localStorage.getItem(ID_TOKEN);
		if (token) {
			request = request.clone({
				headers: request.headers.set('Authorization', `Bearer ${token}`),
			});
		}

		return next.handle(request);
	}
}
