import { Injectable } from '@nestjs/common';
import { Produto } from './modelo/produto';

@Injectable()
export class AppService {

  private listaProdutos: Array<Produto> = [];
  constructor() {
    const prod1 = new Produto(1, 'arroz', 'ABC', 10.33);
    const prod2 = new Produto(2, 'feijão', 'XYZ', 5.20);
    const prod3 = new Produto(3, 'farinha', 'VFT', 2.49);
    this.listaProdutos.push(prod1, prod2, prod3);
    console.log(this.listaProdutos);
  }
  public listarTodos(): Array<Produto> {
    return this.listaProdutos;
  }
  public buscarPorCodigo(codigo: number): Produto {
    let produto = this.listaProdutos.find(
      produto => produto.codigo == codigo
    );
    if (!produto) {
      throw new Error('Produto não encontrado');
    }
    return produto;
  }
  public salvar(produto: Produto): Produto {
    const incluirProduto = new Produto(
      this.obterProximoCodigo(),
      produto.nome,
      produto.email,
      produto.anoNascimento
    );
    this.listaProdutos.push(incluirProduto);
    return incluirProduto;
  }
  public atualizar(codigo: number, produto: Produto): Produto {
    let indice = this.listaProdutos.findIndex(
      produto => produto.codigo == codigo
    );
    this.listaProdutos[indice] = produto;
    return produto;
  }
  public excluir(codigo: number): void {
    let indice = this.listaProdutos.findIndex(
      produto => produto.codigo == codigo
    );
    if (indice === -1) {
      throw new Error('Produto não encontrado');
    }
    this.listaProdutos.splice(indice, 1);
  }
  public obterProximoCodigo(): number {
    if (this.listaProdutos.length == 0) {
      return 1
    } else {
      let ultimoRegistro = this.listaProdutos[
        this.listaProdutos.length - 1
      ];

      return ultimoRegistro.codigo + 1;
    }
  }
}
