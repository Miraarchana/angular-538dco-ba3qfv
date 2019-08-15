import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';//setup the new component to receive input
import { Output, EventEmitter } from '@angular/core';//Notify me component emits an event to product-list component when user clicks Notify Me
//-@Component decorator indicates that following class is a component and specifies its metadata
//selector -- Name given to Angular component when it is rendered as HTML element, usually starts with app-

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
//export class handles functionality for the component
export class ProductAlertsComponent implements OnInit {
  @Input() product; //@Input decorator - indicates that the input value will be passed from component's parent - in this case product-list component
  @Output() notify = new EventEmitter();//@Output decorator - with instance of Event emitter will ensure that an event is emitted when value of notify me button changes
  constructor() { }

  ngOnInit() {
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}

