import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {MessageService} from "primeng/api";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private _messageService: MessageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(
        (error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            //client side error
            this._messageService.add({
              severity: 'error',
              summary: 'Error occurred',
              detail: error.error.message
            });
          } else {
            switch (error.status) {
              case 401:
                this._messageService.add({
                  severity: 'error',
                  summary: 'Error occurred' + ' Status: ' + error.status,
                  detail: error.error.status_message
                });
                break;
              case 403:
                this._messageService.add({
                  severity: 'error',
                  summary: 'Error occurred' + ' Status: ' + error.status,
                  detail: error.error.status_message
                });
                break;
              case 404:
                this._messageService.add({
                  severity: 'error',
                  summary: 'Error occurred' + ' Status: ' + error.status,
                  detail: error.error.status_message
                });
                break;
              case 422:
                this._messageService.add({
                  severity: 'error',
                  summary: 'Error occurred' + ' Status: ' + error.status,
                  detail: error.error.errors
                });
                break;
            }

          }
          return throwError('There is a problem with with our services. We are notified & working on it. Please try again later.');
        }
      )
    );
  }
}
