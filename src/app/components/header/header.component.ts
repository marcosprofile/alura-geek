import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BotaoComponent } from '../botao/botao.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    BotaoComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() telaInicial: boolean = false;
  @Input() rota: string = ''
}
