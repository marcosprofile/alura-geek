import { Component } from '@angular/core';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ BotaoComponent ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}
