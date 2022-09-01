import { Transferencia } from './../model/transferencia.model';
import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaService } from 'src/services/transferencia.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']

})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>()

constructor(private service: TransferenciaService,private router: Router){

}

  valor: number;
  destino: number;

  trasferir(){
  console.log("nova trasferenica cadastrada")
  const valorEmitir = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado =>{
      console.log(resultado)
      this.limparCampo()

      this.router.navigateByUrl('extrato')
    },(error)=>{console.error(error)})

    this.limparCampo()
}
limparCampo(){
    this.valor = 0
    this.destino = 0
  }

}
