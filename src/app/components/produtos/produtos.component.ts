import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { LinhaProdutoComponent } from './linha-produto/linha-produto.component';
import { ProdutoComponent } from './produto/produto.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    ContainerComponent,
    LinhaProdutoComponent,
    ProdutoComponent
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

}
