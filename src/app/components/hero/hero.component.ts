import { Component } from '@angular/core';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ BotaoComponent ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
