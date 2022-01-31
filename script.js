function comparadorNumeros(){
    // variáveis e constantes
    const num1 = Number(prompt('Insira o primeiro valor:'));
    const num2 = Number(prompt('Insira o segundo valor:'));
    resultadoSoma = num1 + num2;
    soma = (`Sua soma é ${resultadoSoma}`);
    let comparadorInput, comparador10, comparador20;

    if (!resultadoSoma){
        alert('Erro - Operação inválida');
        comparadorNumeros();
    }

    // operações relacionais
    (num1 == num2) ? comparadorInput = (`Os números ${num1} e ${num2} são iguais`) : comparadorInput = (`Os números ${num1} e ${num2} não são iguais`);

    (resultadoSoma > 10) ? comparador10 = ('que é maior que 10') : comparador10 = ('que é menor que 10');

    (resultadoSoma < 20) ? comparador20 = ('e menor que 20') : comparador20 = ('e maior que 20');

    alert(`${comparadorInput}. ${soma}, ${comparador10} ${comparador20}.`);

    // função para repetir a rotina
    repetir();

    function repetir(){
        let option = prompt('Deseja comparar outros números?\n 1 - Sim\n 2 - Não');
        if (option == 1){
            comparadorNumeros();
        }else if (option == 2){
            alert('Até mais');
        }else {
            alert('Erro - Digite uma opção válida');
            repetir();
        }
    }
}

comparadorNumeros();