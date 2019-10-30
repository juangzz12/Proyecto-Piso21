import {Component, Method} from '@stencil/core';
import MovieSearch from "./MovieSearch";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Method() async printConsoleLog(){
    MovieSearch.getWeightbyKeyword()
  }


  public render():any {
     return;

  }
}

