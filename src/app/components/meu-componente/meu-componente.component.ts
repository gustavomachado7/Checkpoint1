import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.css',
})
export class MeuComponenteComponent {
  pessoa: {
    nome: string;
    idade: number;
    cidade: string;
    interesses: string[];
  } = {
    nome: 'João',
    idade: 26,
    cidade: 'São Paulo',
    interesses: ['programação', ' viagem', ' fotografia'],
  };
}
