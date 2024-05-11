import { IesCriacaoDto } from "../../src/models/ies/data/entity/Ies";
import { IesRepository } from "../../src/models/ies/data/repository/IesRepository"
import { SalvarIesUseCase } from "../../src/models/ies/domain/useCases/SalvarIesUseCase";
import { FakeDataService } from "../../src/services/fake.data.service";

describe('SalvarIes', () => {

    //define as variáveis no excopo global para ser usado pelo teste
    let salvarIesUseCase: SalvarIesUseCase;
    let fakeService: any;

    //trecho do código do teste que será executado antes de cada teste
    beforeEach(() => {
        //cria as variáveis que serão utilizadas no teste
        const iesRepository = new IesRepository();
        salvarIesUseCase = new SalvarIesUseCase(iesRepository);
        fakeService = FakeDataService();

    })

    //primeiro teste
    it('teste de criação de nova Ies', async () => {

        const iesCriacaoDto: IesCriacaoDto = {
            nome: fakeService.username,
            cnpj: fakeService.cnpj
        }

        const ies = await salvarIesUseCase.execute(iesCriacaoDto);

        expect(ies).toBeDefined();
        expect(ies.codigo).toBeDefined();
        expect(ies.nome).toBe(iesCriacaoDto.nome);
        expect(ies.cnpj).toBe(iesCriacaoDto.cnpj);

    })

    //segundo teste
    it('teste de criação de Ies com o mesmo CNPJ', async () => {
        
        const cnpj = fakeService.cnpj;
        let iesTest: IesCriacaoDto = {
            nome : 'Teste 1',
            cnpj
        }

        //grava os dados no banco de dados
        //await espera uma resposta do método antes de continuar a executar o código
        await salvarIesUseCase.execute(iesTest)

        iesTest.nome = 'Usuário Fralde'

        //tenta executar o teste
        try {

            //cria uma variável chamada ies e define como um objeto, recebendo os valores de iesTest
            //imediatamente tenta gravar o cadastro no banco
            const ies = await salvarIesUseCase.execute(iesTest)
            //expect verifica o teste 
            //      Neste teste, espera que o objeto ies não tenha valor, por não conseguir gravar o dado no banco
            expect(ies).toBeUndefined();

        } catch(error : any) {
            
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Problema ao criar IES')
        }

    })

})
