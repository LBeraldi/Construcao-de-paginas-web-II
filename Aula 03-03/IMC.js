/*
let massa = 111;
let altura = 1.88;



*/
//Formula para arredondar um número para casa decimal mais próxima determinada na string

let massa = prompt('Insira seu peso aqui !')
let altura = prompt ('Insira sua altura !')

let imc = parseFloat(conta.toFixed(2));
let conta =  massa / (altura * altura);

if( imc < 17 ){
    console.log("Seu IMC é : ", imc);
    console.log("Muito abaixo do peso");

    }else if ( imc < 18.49){
        console.log("Seu IMC é : ", imc);
        console.log("Abaixo do peso");

        }else if ( imc < 24.99){
            console.log("Seu IMC é : ", imc);
            console.log("Peso normal");

            }else if ( imc < 29.99){
                console.log("Seu IMC é : ", imc);
                console.log("Acima do peso");

                }else if (  imc < 34.99){   
                    console.log("Seu IMC é : ", imc);
                    console.log("Obesidade I");

                    }else if ( imc < 39.99){
                        console.log("Seu IMC é : ", imc);
                        console.log("Obesidade II (severa)");


                        }else if ( imc > 40){
                            console.log("Seu IMC é : ", imc);
                            console.log("Obesidade III (mórbida)");
                        }