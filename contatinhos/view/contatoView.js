class ContatosView {
  constructor (controller, model) {
    this.button = document.querySelector('#button');
    this.nome = document.querySelector('#nome');
    this.telefone = document.querySelector('#telefone');
    this.list = document.querySelector('#list');
    this.controller = controller;
    this.model = model;
    this.button.onclick = this.createContato.bind(this);
  }

  createContato () {
    if (this.nome.value == '') {
      alert("Campo vazio");
    } else {
      this.controller.createContato(this.nome.value,this.telefone.value);
      this.show();
    }

  }

  removeContato (code) {
    this.controller.removeContato(code);
    this.show();
  }

  completeContato (code) {
    this.controller.completeContato(code);
    this.show();
  }

  show () {
       this.list.innerHTML = '';
      for (var i = 0; i < this.model.data.length; i++ ) {
        var contato = this.model.data[i];
        this.list.innerHTML += '<div class="grid_12 task_container">' +
          '<div class="task">' +
          '  <p>'+contato.printInfo()+'</p>'+
          '</div>'+
          '<div class="task_action">'+
          '<button id="removebutton" type="button" data-id="'+contato.code+'" onclick="view.removeContato('+contato.code+')" name="completeButton">Remover</button>'+
            '<button type="button" data-id="'+contato.code+'" onclick="view.completeContato('+contato.code+')" name="completeButton">Ja pegou ?</button>'+
          '</div>'+
        '</div>';

    }
    }
  }

