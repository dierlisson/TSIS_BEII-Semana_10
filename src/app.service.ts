import { Injectable } from '@nestjs/common';
import { Cliente } from './modelo/cliente';

@Injectable()
export class AppService {
  private listaClientes: Array<Cliente> = [];
  constructor(){
    const client1 = new Cliente(1, 'Alice Almeida', 'alice@teste.com', 2010);
    const client2 = new Cliente(2, 'Carlos Alberto', 'carlos@teste.com', 2007);
    const client3 = new Cliente(3, 'Alice Almeida', 'alice@teste.com', 20);
    this.listaClientes.push(client1, client2, client3);
    console.log(this.listaClientes);
  }
  public listarTodos(): Array<Cliente>{
    return this.listaClientes;
  }
  public buscarPorId(id: number): Cliente{
    let cliente = this.listaClientes.find(
    cliente => cliente.id == id
  );
  if (!cliente) {
    throw new Error('Cliente não encontrado');
  }
  return cliente;
  }
  public salvar(cliente:Cliente): Cliente{
    const incluirCliente = new Cliente(
      this.obterProximoId(),
      cliente.nome,
      cliente.email,
      cliente.anoNascimento
    );
    this.listaClientes.push(incluirCliente);
    return incluirCliente;
  }
  public obterProximoId(): number{
    if(this.listaClientes.length == 0){
      return 1
    }else{
      let ultimoRegistro = this.listaClientes[
        this.listaClientes.length - 1
      ];

      return ultimoRegistro.id + 1;
    }
  }
}
