import { Component } from '@angular/core';
import { BotaoComponent } from '../botao/botao.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ BotaoComponent, InputComponent ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}
