export class Produto {
  codigo: number;
  nome: string;
  marca: string;
  preco: number;

  constructor(codigo: number, nome: string, marca: string, preco: number) {
    this.codigo = codigo;
    this.nome = nome;
    this.marca = marca;
    this.preco = preco;
  }
}