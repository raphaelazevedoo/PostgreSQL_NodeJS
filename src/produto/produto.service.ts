import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from './produto.entity';
import { ProdutoRepository } from './produto.repository';
import { Repository } from 'typeorm';
import { ListaProdutoDTO } from './dto/ListaProduto.dto';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepository: Repository<ProdutoEntity>,
    ) {}

    async listaProdutos() {
        const produtosLista = await this.produtoRepository.find();
        const listaProdutos = produtosLista.map(
            (produtos) => new ListaProdutoDTO(produtos.id, produtos.nome),
        );
    }
}
