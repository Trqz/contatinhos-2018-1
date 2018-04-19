
var contatos = new ContatoCollection();

var controller = new ContatoController(contatos);

var view = new ContatosView(controller, contatos);
