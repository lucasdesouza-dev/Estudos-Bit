import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']

})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>()

  valor: number;
  destino: number;

  trasferir(){
  console.log("nova trasferenica cadastrada")
  const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparCampo()
}
limparCampo(){
    this.valor = 0
    this.destino = 0
  }

}
