import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';

import { IapError } from '@shared/models/types/iap-error.type';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			catchError((error: HttpErrorResponse) => {
				return throwError(() => {
					let iapError: IapError;
					// TODO: make factory for IapError
					if (error instanceof Error) {
						iapError = new IapError(error.status.toString(), 'Unknown error');
					} else {
						switch (error.status) {
							case 0:
								iapError = new IapError(error.status.toString(), 'Check your connection!');
								break;
							default:
								iapError = new IapError(error.status.toString(), error.message);
						}
					}
					return iapError;
				});
			}),
		);
	}
}
