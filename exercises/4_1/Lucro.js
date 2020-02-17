let custoProduto = 100;
let valorVenda = 350;

function Lucro (custo, venda){
    
let lucroAbsoluto = 0;
    
    if (custo < 0 || venda < 0){
        return "ERRO:O VALOR INFORMAD NAO PODE SER 0.";
    }

lucroAbsoluto = ((venda * 0.80) - custo) * 1000;

return ("O Lucro na venda de 1000 unidades será de " + lucroAbsoluto + " Mil reais");
   
}

console.log(Lucro(custoProduto, valorVenda));