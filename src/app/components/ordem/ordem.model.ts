export interface Ordem{
    id?: number // a ? significa que o campo eh opcional
    nomeCliente: string
	telefone: string
	endereco: string
	preco: number
	busto: number
	cintura: number
	quadril: number
	status?: string
	data_abertura?: string
	data_encerramento?: string
}