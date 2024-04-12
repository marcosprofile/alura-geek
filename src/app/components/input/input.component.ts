import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() exibirLabel: boolean = false
  @Input() label: string = ''
  @Input() text: boolean = true
  @Input() tipo: string = ''
  @Input() textarea: boolean = false
  @Input() placeholder: string = ''
  @Input() classe: string = ''
}
