import { Component, Input } from '@angular/core';
import { BotaoComponent } from '../../botao/botao.component';

@Component({
  selector: 'app-linha-produto',
  standalone: true,
  imports: [ BotaoComponent ],
  templateUrl: './linha-produto.component.html',
  styleUrl: './linha-produto.component.css'
})
export class LinhaProdutoComponent {
  @Input() linha: string = '';
}
