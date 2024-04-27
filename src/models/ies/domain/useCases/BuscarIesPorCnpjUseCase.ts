
import { IesRepository } from "../../data/repository/IesRepository";
import { Ies } from "@prisma/client";

export class BuscarIesPorCnpjUseCase{

    constructor(private iesRepository: IesRepository){}

    async execute(cnpj: string) : Promise <Ies | null> {
        
        try {
        
            return await this.iesRepository.buscarIesPorCNPJ(cnpj);

        } catch (error) {
        
            throw new Error("Problema ao deletar IES")
    
        }

    }

}
