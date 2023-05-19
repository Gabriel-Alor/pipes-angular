import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18nSelect 
  public name : string = 'Fernando';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
      male: 'invitarlo',
      female: 'invitarla'
  }

  public changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['María','Pedro','Fernando','Hernando','Eduardo','Melisa','Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  public deleteClient(): void {
    this.clients.shift(); 
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Veracruz, México'
  }


  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
        .pipe(
          tap( value => console.log('tap', value ) )
        );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos la promesa');
    }, 3500);
  });
}
