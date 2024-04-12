import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BotaoComponent } from '../../components/botao/botao.component';
import { ContainerComponent } from '../../components/container/container.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProdutosComponent } from '../../components/produtos/produtos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContainerComponent,
    HeaderComponent,
    BotaoComponent,
    HeroComponent,
    ProdutosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
