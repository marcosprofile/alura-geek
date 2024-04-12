import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BotaoComponent } from '../botao/botao.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MatIconModule, BotaoComponent, CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() telaInicial: boolean = false;
}
