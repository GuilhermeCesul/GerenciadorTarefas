import { IesCriacaoDto, IesUpdateDto } from "../../src/models/ies/data/entity/Ies";
import { IesRepository } from "../../src/models/ies/data/repository/IesRepository"
import { AltetarIesUseCase } from "../../src/models/ies/domain/useCases/AlterarIesUseCase";
import { SalvarIesUseCase } from "../../src/models/ies/domain/useCases/SalvarIesUseCase";
import { FakeDataService } from "../../src/services/fake.data.service";

describe('AlteraçãoIesTest', () => {

    let alterarIesUseCase : AltetarIesUseCase;
    let salvarIesUseCase : SalvarIesUseCase;
    let fakeService : any;

    beforeEach( () => {

        const iesRepository = new IesRepository();
        alterarIesUseCase = new AltetarIesUseCase(iesRepository);
        salvarIesUseCase = new SalvarIesUseCase(iesRepository);
        fakeService = FakeDataService();

    } )

    it('Alterar ies cadastrada', async () => {
        
        const iesCriacaoDto: IesCriacaoDto = {
            nome: fakeService.username,
            cnpj: fakeService.cnpj
        }

        const ies = await salvarIesUseCase.execute(iesCriacaoDto);

        const iesAlterarDto : IesUpdateDto = {
            nome : 'UPDATE IES'
        }

         const iesUpdate = await alterarIesUseCase.execute(ies.codigo, iesAlterarDto)

         expect(iesUpdate).toBeDefined()
         expect(iesUpdate.codigo).toBe(ies.codigo)
         expect(iesUpdate.cnpj).toBe(ies.cnpj)
         expect(iesUpdate.nome).toBe(iesAlterarDto.nome)

    } )

})
