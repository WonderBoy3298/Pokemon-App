import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el:ElementRef) {
    this.setHeight(180)
    this.setBorderColor('#f5f5f5')
  }


  setHeight(height:number){
      this.el.nativeElement.style.height=`${height}px`
  }


  setBorderColor(color:String){
   this.el.nativeElement.style.border=`solid 4px ${color}`
  }


  


}