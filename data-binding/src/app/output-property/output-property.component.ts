import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "contador",
  templateUrl: "./output-property.component.html",
  styleUrls: ["./output-property.component.css"]
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  // Aula 16 - Variavel Local #campoInput

  // @ViewChild("campoInput") campoValorInput: ElementRef;

  incrementa() {
    //   console.log(this.campoValorInput.nativeElement.value);
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  constructor() {}

  ngOnInit() {}
}
