import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  @Input() rota: string = '';
  @Input() nome: string = '';
  @Input() tipo: string = 'primary';
  @Input() exibirIcone: boolean = false
}
