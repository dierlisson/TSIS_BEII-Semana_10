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
  listarTodosClientes() {
    console.log("Entrou no método: listarTodosClientes " + new Date());
    return this.appService.listarTodos();
  }

  @Get("/cliente")
  public buscarPorId(@Query('id') id: number) {
    console.log("Entrou no método: buscarPorId " + new Date());
    return this.appService.buscarPorId(id);
  }

  @Post()
  public salvar(@Body() cliente: Cliente) {
    console.log("Entrou no método: salvar ");
    return this.appService.salvar(cliente);
  }

  @Put(':id')
  public alterar(@Param('id') id: number, @Body() cliente: Cliente) {
    console.log("Entrou no método: alterar " + new Date());
    return this.appService.atualizar(id, cliente);
  }
  @Delete(':id')
  public excluir(@Param('id') id: number) {
    console.log("Entrou no método: excluir " + new Date());
    this.appService.excluir(id);
  }
}
