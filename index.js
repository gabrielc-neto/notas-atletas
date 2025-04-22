class Atleta{
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
  calculaCategoria(){
    if(this.idade >= 9 && this.idade <= 11){
      return "Infantil";
    } else if(this.idade == 12 || this.idade == 13){
      return "Juvenil";
    } else if(this.idade == 14 || this.idade == 15){
      return "intermediário";
    } else if(this.idade >= 16 && this.idade<=30){
      return "Adulto";
    } else{
      return "Sem categoria";
    }
  }
  calculaIMC(){
    return this.peso/(this.altura*this.altura);
  }
  calculaMediaValida(){
    let soma = 0;
    for(let i = 0; i < this.notas.length; i++){
      soma += this.notas[i];
    }
    soma = soma/this.notas.length;
    return soma;
  }
  obtemNomeAtleta(){
    return this.nome;
  }
  obtemIdadeAtleta(){
    return this.idade;
  }
  obtemPesoAtleta(){
    return this.peso;
  }
  obtemNotasAtleta(){
    return this.notas.join(",");
  }
  obtemCategoria(){
    return this.calculaCategoria()
  }
  obtemIMC(){
    return this.calculaIMC();
  }
  obtemMediaValida(){
    return this.calculaMediaValida();
  }
  saidaTotal(){
    return `
    Nome: ${this.obtemNomeAtleta()}
    Idade: ${this.obtemIdadeAtleta()}
    Peso: ${this.obtemPesoAtleta()}
    Altura: ${this.altura}
    Notas: ${this.obtemNotasAtleta()}
    Categoria: ${this.obtemCategoria()}
    IMC: ${this.obtemIMC()}
    Média Válida: ${this.obtemMediaValida()}\n\n`;
  }
}
const atleta = new Atleta("Cesar Abascal",
  30, 80, 1.70,
  [10, 9.34, 8.42, 10, 7.88]);
  console.log(atleta.saidaTotal());
