import { moedaPais, idioma } from './global';

function formatarPreco(preco) {
    return Number(preco).toLocaleString(idioma , {
        style: 'currency', 
        currency: 'BRL'
    });
}

export { formatarPreco }
