import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToggleSwitchModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('buglens-ui');

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
  }

  darkThemeSwitchTokens = {
    width: '4.2rem',
    height: '2.3rem',
    checkedBackground: '#ccc',
    checkedHoverBackground: '#ddd',
    handle: {
      size: '2rem',
      background: 'transparent url("sun.svg") 0 0 / 2rem no-repeat',
      hoverBackground: 'transparent url("sun.svg") 0 0 / 2rem no-repeat',
      checkedBackground:
        'transparent url("moon.svg") 0 0 / 2rem no-repeat',
      checkedHoverBackground:
        'transparent url("moon.svg") 0 0 / 2rem no-repeat',
    },
  };
}
