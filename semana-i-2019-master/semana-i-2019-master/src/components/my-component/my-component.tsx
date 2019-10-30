import {Component, Prop, h,Event ,EventEmitter, Method} from '@stencil/core';
import MovieSearch from "./MovieSearch";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() data: any = { keyItems: []};

  @Method() async printConsoleLog(){
    MovieSearch.getWeightbyKeyword()
  }

  @Event() myCustomEvent: EventEmitter;

  private myEvent(item){
    this.myCustomEvent.emit(item);
  }

  public render():any {
    const items = this.data.items;
     return;
    
  }
}

