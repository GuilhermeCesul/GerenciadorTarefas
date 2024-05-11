
export interface Ies {

    codigo: string;
    nome: string;
    dataCriacao: Date;
    cnpj: string;

}

export interface IesCriacaoDto {
    
    nome: string;
    cnpj: string;

}

export interface IesUpdateDto {
    
    nome?: string;
    cnpj?: string;

}
