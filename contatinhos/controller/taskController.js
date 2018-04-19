class ContatoController {
  constructor (model) {
    this.model = model;
  }

  createContato (nome, telefone) {
    let contato = new Contato(nome, telefone);
    this.model.create(contato);
  }

  removeContato (code) {
    this.model.delete(code);
  }
 
  completeContato (code) {
    let contato = this.model.find(code);
    contato.isCompleted = true;
  }
}
