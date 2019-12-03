import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  Input
} from "@angular/core";

@Component({
  selector: "app-ciclo",
  templateUrl: "./ciclo.component.html",
  styleUrls: ["./ciclo.component.css"]
})
export class CicloComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() valorInicial: number = 10;

  ngAfterContentInit(): void {
    throw new Error("Method not implemented.");
  }
  //Aula 15

  constructor() {
    this.log("constructor");
  }

  ngOnChanges() {
    this.log("ngOnChanges");
  }

  ngOnInit() {
    this.log("ngOnInit");
  }

  ngDoCheck() {
    this.log("ngDoCheck");
  }

  ngAfterContentChecked() {
    this.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    this.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    this.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    this.log("ngOnDestroy");
  }

  private log(hook: string) {
    console.log(hook);
  }
}
