import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { NavBar } from './shared/components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToggleSwitchModule, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('buglens-ui');
}
