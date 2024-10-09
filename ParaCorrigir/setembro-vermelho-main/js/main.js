var contador = 1;

function alterar() {

    if(contador == 1) {
        document.getElementById("a1").innerHTML = "Tabagismo";
        document.getElementById("a2").innerHTML = "Reconhecido como uma doença crônica causada pela dependência das toxinas presentes nos produtos à base de tabaco.";
        document.getElementById("a3").innerHTML = "Gera doenças respiratórias, patologias buco-dentais, doenças cardiovasculares, além de diversos tipos de câncer.";
        contador = 2;
    }
    else if(contador == 2) {
        document.getElementById("a1").innerHTML = "Diabetes";
        document.getElementById("a2").innerHTML = "Síndrome metabólica crônica, na qual o organismo não produz ou não consegue empregar adequadamente a insulina que produz no corpo.";
        document.getElementById("a3").innerHTML = "Prejudica diversos órgãos, como os rins, os olhos, os nervos e o coração, aumentando o risco de AVC, infarto e doença vascular.";
        contador = 3;
    }
    else if(contador == 3) {
        document.getElementById("a1").innerHTML = "Hipertensão arterial";
        document.getElementById("a2").innerHTML = "Doença crônica caracterizada pelos níveis elevados da pressão que o sangue exerce nas artérias.";
        document.getElementById("a3").innerHTML = "Principais fatores de risco para a ocorrência de AVC, infarto, aneurismas e insuficiências renal e cardíaca.";
        contador = 4;
    }
    else if(contador == 4) {
        document.getElementById("a1").innerHTML = "Colesterol elevado";
        document.getElementById("a2").innerHTML = "Presença de níveis elevados de lipídios, ou seja, gorduras no sangue.";
        document.getElementById("a3").innerHTML = "Gera colesterol alto é o aumento considerável do risco de doenças cardiovasculares.";
        contador = 5;
    }
    else if(contador == 5) {
        document.getElementById("a1").innerHTML = "Estresse";
        document.getElementById("a2").innerHTML = "Reação do corpo a situações prejudiciais, reais ou percebidas. Quando nos sentimos ameaçados, o corpo desencadeia uma reação química conhecida como Luta ou fuga.";
        document.getElementById("a3").innerHTML = "Gera risco de problemas cardiovasculares, como infarto e AVC, de problemas psiquiátricos, como depressão e ansiedade, aceera o envelhecimento precoce, afeta o sono, apetite e libido.";
        contador = 6;
    }
    else if(contador == 6) {
        document.getElementById("a1").innerHTML = "Obesidade";
        document.getElementById("a2").innerHTML = "Pode ser desencadeado por uma série de fatores que vão desde questões emocionais, como disfunções endócrinas e ainda pelo estilo de vida pouco equilibrado, que inclui uma alimentação desbalanceada e falta de atividade física";
        document.getElementById("a3").innerHTML = "Gera doenças cardiovasculares, síndrome metabólica, apneia do sono, alguns tipos de câncer, problemas no fígado e de circulação sanguínea."; 
        contador = 7;
    }
    else{
        document.getElementById("a1").innerHTML = "Alcoolismo";
        document.getElementById("a2").innerHTML = "O consumo constante de bebidas, de forma descontrolada e progressiva pode causar dependência e comprometer o bom funcionamento do organismo.";
        document.getElementById("a3").innerHTML = "Gera problemas cardiovasculares, incluindo doenças coronariana, acidente vascular cerebral, insuficiência cardíaca, hipertensão, cardiomiopatia, fibrilação atrial e aneurisma.";
  
    }
}