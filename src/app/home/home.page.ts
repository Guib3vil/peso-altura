import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private alertController: AlertController) {}
sexo='';
altura='';
peso=0;

calcularPeso(){
if (this.sexo==='m'){
this.peso=72.7*parseFloat(this.altura)-58;
}
else{
this.peso=62.1*parseFloat(this.altura)-44.7;
}
this.exibirPeso();
}
async exibirPeso() {
const alert = await this.alertController.create({
header: 'App do Peso Ideal',
message: `Seu peso deve ser aproximadamente
${this.peso.toFixed(1)}`,
buttons: ['OK'],
});
await alert.present();
}
}
