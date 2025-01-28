import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SomeService } from './some.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-angular-app';

  constructor(private someService: SomeService) {}

  onButtonClick() {
    throw new Error('Test error');
  }

  testErrorLogging() {
    this.someService.simulateHttpError1();
  }
}
