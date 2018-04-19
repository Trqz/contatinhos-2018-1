class Contato {
  constructor (nome, telefone) {
    this.nome = nome;
    this.telefone = telefone;
    this.isCompleted = false;
    this.code = 0;
  }

  printInfo () {
    if (this.isCompleted) {
      return 'Nome: '+this.nome + ' Telefone: '+this.telefone + ' - Já peguei'
    } else {
      return 'Nome: '+this.nome + ' Telefone: '+this.telefone + ' - Não peguei'
    }
  }

  complete () {
    this.isCompleted = true;
  }
}
