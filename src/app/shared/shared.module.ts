import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateComponent } from './components/translate/translate.component';



@NgModule({
  declarations: [
    TranslateComponent
  ],
  exports: [
    TranslateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
