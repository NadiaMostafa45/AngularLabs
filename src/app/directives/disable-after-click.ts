import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
})
export class DisableAfterClick {
  constructor(private el:ElementRef,private renderer:Renderer2) {}

    @HostListener('click')
    onClick(){
      const originText=this.el.nativeElement.innerText;
      this.renderer.setProperty(this.el.nativeElement,'disabled',true);
      this.renderer.setProperty(this.el.nativeElement,'innerText','Processing...');
      setTimeout(()=>{
        this.renderer.setProperty(this.el.nativeElement,'disabled',false);
        this.renderer.setProperty(this.el.nativeElement,'innerText',originText);
        },3000);
      }
    }

