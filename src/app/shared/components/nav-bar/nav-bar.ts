import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    ToggleSwitchModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: ['/dashboard']
    },
    {
      label: 'Vulnerabilities',
      icon: 'pi pi-shield',
      items: [
        {
          label: 'View All',
          icon: 'pi pi-list',
          routerLink: ['/vulnerabilities']
        },
        {
          label: 'Reports',
          icon: 'pi pi-chart-bar',
          routerLink: ['/vulnerabilities/reports']
        }
      ]
    }
  ];

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
      background: 'transparent url("sun.svg") center center / 1rem no-repeat',
      hoverBackground: 'transparent url("sun.svg") center center / 1rem no-repeat',
      checkedBackground:
        'transparent url("moon.svg") center center / 1rem no-repeat',
      checkedHoverBackground:
        'transparent url("moon.svg") center center / 1rem no-repeat',
    },
  };
}
