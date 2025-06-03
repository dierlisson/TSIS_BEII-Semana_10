import { Controller, Get, Post, Put, Delete, Query, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Cliente } from './modelo/cliente';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getStatus(): string {
    return "O node está rodando: " + new Date();
  }

  @Get("/clientes")
  listarTodosClientes(): Array<Cliente> {
    console.log("Entrou no método: listarTodosClientes");
    return this.appService.listarTodos();
  }

  @Get("/cliente")
  public buscarPorId(@Query('id') id: number): Cliente {
    console.log("Entrou no método: buscarPorId");
    return this.appService.buscarPorId(id);
  }

  @Post()
  public salvar(@Body() cliente: Cliente): Cliente {
    console.log("Entrou no método: salvar");
    return this.appService.salvar(cliente);
  }

  @Put(':id')
  public alterar(@Param('id') id: number, @Body() cliente: Cliente): Cliente {
    console.log("Entrou no método: alterar");
    return this.appService.atualizar(id, cliente);
  }
  @Delete(':id')
  public excluir(@Param('id') id: number): void {
    console.log("Entrou no método: excluir");
    this.appService.excluir(id);
  }
}
