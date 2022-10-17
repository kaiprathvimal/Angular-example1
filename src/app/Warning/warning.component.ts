import {Component} from "@angular/core";
@Component({
  selector: 'app-warning',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3>Warning</h3>
        </div>
      </div>
    </div>
  `,
  styles: [`h3 {
    color: orange;
  }`]

})
export class WarningComponent{

}
