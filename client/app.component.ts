import 'reflect-metadata';
import { Component } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { Karinas } from "../collections/my-collection";
import { appTemplate } from "./app.html";
import { appStyle } from "./app.style";

@Component({
  selector: 'app',
  template: appTemplate,
  styles: [appStyle]
})
export class App {
  karinas: Mongo.Cursor<Object>;

  constructor () {
    this.karinas = Karinas.find();
  }

}
