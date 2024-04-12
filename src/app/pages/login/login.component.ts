import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { InputComponent } from '../../components/input/input.component';
import { ContatoComponent } from '../../components/contato/contato.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BotaoComponent } from '../../components/botao/botao.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HeaderComponent,
    InputComponent,
    ContatoComponent,
    FooterComponent,
    BotaoComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
