export class Cliente {
  id: number;
  nome: string;
  email: string;
  anoNascimento: number;

  constructor(id: number, nome: string, email: string, anoNascimento: number) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.anoNascimento = anoNascimento;
  }
}
