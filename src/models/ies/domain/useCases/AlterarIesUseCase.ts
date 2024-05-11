
import { IesRepository } from "../../data/repository/IesRepository";
import { IesUpdateDto } from "../../data/entity/Ies";
import { Ies } from "@prisma/client";

export class AltetarIesUseCase{

    constructor(private iesRepository: IesRepository){}

    async execute(codigo: string, iesUpdate: IesUpdateDto) : Promise<Ies> {
        
        try {
        
            return await this.iesRepository.alterarIes(codigo, iesUpdate);

        } catch (error) {
        
            throw new Error("Problema ao deletar IES")
    
        }

    }

}
