import fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { SalvarIesUseCase } from "../domain/useCases/SalvarIesUseCase";
import { IesRepository } from "../data/repository/IesRepository";
import { IesCriacaoDto, IesUpdateDto } from "../data/entity/Ies";
import { request } from "http";
import { BuscarIesPorCnpjUseCase } from "../domain/useCases/BuscarIesPorCnpjUseCase";
import { AltetarIesUseCase } from "../domain/useCases/AlterarIesUseCase";
import { DeletarIesUseCase } from "../domain/useCases/DeletarIesUseCase";
import { UUID } from "crypto";

export const iesControllers = (fastify: FastifyInstance, options: RouteShorthandOptions, done: () => void) => {

    const iesRepository = new IesRepository();
    const salvarIesUseCase = new SalvarIesUseCase(iesRepository);
    const buscarIesPorCnpjUseCase = new BuscarIesPorCnpjUseCase(iesRepository);
    const alterarIesUseCase = new AltetarIesUseCase(iesRepository);
    const deletarIesUseCase = new DeletarIesUseCase(iesRepository)

    fastify.post('/salvarIes', async (request, reply) =>{

        try {

            const ies = await salvarIesUseCase.execute(request.body as IesCriacaoDto);
            reply.code(201).send(ies);

        } catch (error) {
            reply.code(500).send({error: 'Houve algum problema ao salvar'})
        }

    })

    fastify.get('/buscarIes/:cnpj', async (request, reply) => {

        const cnpj = request.params.cnpj;
        const ies = await buscarIesPorCnpjUseCase.execute(cnpj)


        try {
                
            if (ies) {

                reply.code(200).send(ies)
                
            } else {

                reply.code(404).send({erro: 'Ies não encontrada'})
            }
        
        } catch (error) {

            reply.code(500).send({erro: 'Erro de servidor'})

        }

    })

    fastify.put('/alterarIes/:codigo', async (request, reply) => {

        try {

            const codigo = request.params.codigo as UUID;
            const iesAlterar = request.body as IesUpdateDto;

            const iesAlterada = await alterarIesUseCase.execute(codigo, iesAlterar)

            reply.code(200).send(iesAlterada)

        } catch (error) {

            reply.code(500).send({erro: 'Problema ao alterar'})

        }
        
    })

    fastify.delete('/deletarIes/:codigo', async (request, reply) => {

        try {

            const codigo = request.params.codigo as UUID
            await deletarIesUseCase.execute(codigo)

            reply.code(204).send('Deletado com sucesso')

        } catch (erro) {

            reply.code(500).send({erro: 'Problema ao deletar'})

        }
        
    })

    done();

}
