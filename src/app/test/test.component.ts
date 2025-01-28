import { Component } from '@angular/core';
import { SomeService } from '../some.service';

@Component({
  selector: 'app-test',
  standalone: true,
  template: `
    <button (click)="test1()">Test API 1(Typicode)</button>
    <button (click)="test2()">Test API 2(Localhost)</button>
  `,
})
export class TestComponent {
  todoData: any;

  constructor(private someService: SomeService) {}

  test1() {
    this.someService.simulateHttpError1();
  }

  test2() {
    this.someService.simulateHttpError2();
  }
} 