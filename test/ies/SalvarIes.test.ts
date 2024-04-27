import { IesCriacaoDto } from "../../src/models/ies/data/entity/Ies";
import { IesRepository } from "../../src/models/ies/data/repository/IesRepository"
import { SalvarIesUseCase } from "../../src/models/ies/domain/useCases/SalvarIesUseCase";

describe('SalvarIes', () => {

    it('teste de criação de nova Ies', async () => {

        const iesRepository = new IesRepository();
        const salvarIesUseCase = new SalvarIesUseCase(iesRepository);

        const iesCriacaoDto: IesCriacaoDto = {
            nome: 'TesteIes',
            cnpj: '99999999999999'
        }

        const ies = await salvarIesUseCase.execute(iesCriacaoDto);

        expect(ies).toBeDefined();
        expect(ies.codigo).toBeDefined();
        expect(ies.nome).toBe(iesCriacaoDto.nome);
        expect(ies.cnpj).toBe(iesCriacaoDto.cnpj);

    })

})