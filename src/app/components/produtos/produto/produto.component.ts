import { Component, Input } from '@angular/core';
import { BotaoComponent } from '../../botao/botao.component';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [ BotaoComponent ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  @Input() src: string = ''
  @Input() nome: string = 'Produto XYZ'
  @Input() preco: string = 'R$ 60,00'
}
