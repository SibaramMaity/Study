import { Component } from "@angular/core";

@Component({
  selector: 'app-property-card',
  template: `<div class="row">
               <div class="card">
                 <h1>{{Property.Name}}</h1>
                 <h2>{{Property.Type}}</h2>
                 <h2>{{Property.Price}}</h2>
               </div>
             </div>
  `
}
)
export class PropertCardComponent {
  Property: any = {
    "Id": 1,
    "Name" : "Birla House",
    "Type": "House",
    "Price" : 12000
  }

}
