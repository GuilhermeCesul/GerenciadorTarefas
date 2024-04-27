//Onde é informada a regra de negócio

import { IesCriacaoDto } from "../../data/entity/Ies";
import { IesRepository } from "../../data/repository/IesRepository";

export class SalvarIesUseCase {

    constructor(private iesReposiory: IesRepository) {}

    async execute(ies: IesCriacaoDto) {

        try {

            const iesCriada = await this.iesReposiory.salvarIes(ies);

            return iesCriada

        } catch (error) {

            throw new Error('Problema ao criar IES')

        }

    }

}
