import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Produto } from './modelo/produto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getStatus(): string {
    return "O node está rodando: " + new Date();
  }

  @Get("/produtos")
  listarTodosProdutos(): Array<Produto> {
    console.log("Entrou no método: listarTodosProdutos");
    return this.appService.listarTodos();
  }

  @Get("/produto")
  public buscarPorCodigo(@Query('codigo') codigo: number): Produto {
    console.log("Entrou no método: buscarPorCodigo");
    return this.appService.buscarPorCodigo(codigo);
  }

  @Post()
  public salvar(@Body() produto: Produto): Produto {
    console.log("Entrou no método: salvar");
    return this.appService.salvar(produto);
  }

  @Put(':codigo')
  public alterar(@Param('codigo') codigo: number, @Body() produto: Produto): Produto {
    console.log("Entrou no método: alterar");
    return this.appService.atualizar(codigo, produto);
  }
  @Delete(':codigo')
  public excluir(@Param('codigo') codigo: number): void {
    console.log("Entrou no método: excluir");
    this.appService.excluir(codigo);
  }
}
