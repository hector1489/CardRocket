import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { CardsWCssComponent } from './cards-w-css/cards-w-css.component';
import { IntroComponent } from './intro/intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    IntroComponent,
    CardsComponent,
    CardsWCssComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontCardRocket';
}
