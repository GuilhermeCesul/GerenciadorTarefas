import { Ies } from "@prisma/client";
import { IesCriacaoDto, IesUpdateDto } from "../entity/Ies";
import prisma from "../../../../config/database";
import { UUID } from "crypto";

//define o que ficará visível para o usuário
//é uma declaração sem corpo
export interface IesRepositoryInterface {

    //nome(parâmetro: tipoParâmetro): retorno
    salvarIes(ies: IesCriacaoDto): Promise<Ies>

}

export class IesRepository implements IesRepositoryInterface {

    async salvarIes(ies: IesCriacaoDto) : Promise<Ies> {
        
        try {

            const iesCriada = await prisma.ies.create({
                data: ies

            })

            return iesCriada

        } catch (error) {

            throw new Error('Falha ao salvar IES');

        }

    }

    async buscarIesPorCodigo(codigo: UUID) : Promise<Ies | null> {

        try {
            
            return await prisma.ies.findUnique({

                where: {codigo}

            })

        } catch (error) {
        
            throw new Error('Problema ao buscar a IES')

        }

    }

    async buscarIesPorCNPJ(cnpj: string) : Promise<Ies | null> {

        try {
            
            return await prisma.ies.findUnique({

                where: {cnpj}

            })

        } catch (error) {
        
            throw new Error('Problema ao buscar a IES')

        }

    }

    async alterarIes(codigo: UUID, ies: IesUpdateDto) : Promise<Ies> {

        try {
            
            return await prisma.ies.update({

                where: {codigo},
                data: ies

            })

        } catch (error) {
        
            throw new Error('Problema ao alterar a IES')

        }

    }

    async deletarIes(codigo: UUID) : Promise<void> {

        try {
            
            await prisma.ies.delete({
                
                where: {codigo}

            })

        } catch (error) {
        
            throw new Error('Problema ao deletar a IES')

        }

    }

}
