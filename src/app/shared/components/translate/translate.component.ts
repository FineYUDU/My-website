import { Component  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {

  // Se define un array de lenguajes soportados.
 supportLanguages = ['es', 'en']

 // Se define el constructor que recibe una instancia del servicio de traducción (TranslateService).
 constructor( public translateService:TranslateService) { 
    // Se inicializa el array de lenguajes soportados.
   this.supportLanguages
   // Se establece el idioma por defecto.
   this.translateService.setDefaultLang('en');
}

// Este método se llama cuando se selecciona un idioma.
selectLang(lang:any) {
 
 // Si se selecciona el idioma español, se establece el idioma en 'es'.
 // Si se selecciona otro idioma, se establece el idioma en 'en'.
 lang.checked === true ? this.translateService.use('es') : this.translateService.use('en')
}


}
