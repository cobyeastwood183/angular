import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Sentry from '@sentry/angular';

@Injectable({
  providedIn: 'root',
})
export class SomeService {
  constructor(private http: HttpClient) {}

  simulateHttpError1() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: (data) => {
        console.log('Todo:', data);
      },
      error: (error) => {
        Sentry.captureException(error);
        console.error('Error:', error);
      },
    });
  }

  simulateHttpError2() {
    this.http.get('http://some.example.com/test').subscribe({
      next: (data) => {
        console.log('Todo:', data);
      },
      error: (error) => {
        Sentry.captureException(error);
        console.error('Error:', error);
      },
    });
  }
}