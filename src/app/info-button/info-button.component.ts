import { Component } from '@angular/core';

@Component({
  selector: 'info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.css']
})
export class InfoButtonComponent{
  roundButton = "w3-button w3-circle w3-cyan w3-hover-teal";
  closeButton = "w3-button w3-display-topright";
  txt = "Entre com seu nome de usuário do Github no campo\
  em branco e pressione 'Buscar Repositórios' para ter acesso a\
  lista de todos repositórios do perfil selecionado. Pressione\
  qualquer item da lista para ser direcionado à pagina correspondente\
  do Github.";
  show = false;
  showModal(){
    this.show = true;
  }
  hideModal(){
    this.show = false;
  }
}
