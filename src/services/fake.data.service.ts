import { faker } from '@faker-js/faker';

export function FakeDataService() {

    //define as constantes de dados dos testes, utilizando faker para gerar dados falsos/aleatórios 
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const cnpj = faker.number.int({min : 10000000000000, max: 99999999999999}).toString();

    //retorna os dados gerados para a operação que chamou a função
    return {username, email, cnpj}

}
