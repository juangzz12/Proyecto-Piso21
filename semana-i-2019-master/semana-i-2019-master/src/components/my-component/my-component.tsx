import {Component, Prop, h,Event ,EventEmitter, Method} from '@stencil/core';
import {MovieService} from "./MovieSearch";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  async fetchMovies(): Promise<any> {
    const responsePromise =  MovieService.getKeyword();
    const dataResponse = await responsePromise;

    /*let arrayJSON = [];
    dataResponse.forEach(obj => {
      arrayJSON.push(obj);
    });*/
    console.log(dataResponse);
  }

  /**
   * The first name
   */
  @Prop() data: any = { items: []};
  @Prop() myTitle: string = "";

  @Method() async printConsoleLog(){
    this.fetchMovies();
    console.log("method");
  }

  @Event() myCustomEvent: EventEmitter;

  private myEvent(item){
    this.myCustomEvent.emit(item);
  }

  render() {
    const items = this.data.items;

    return (
      <div class="my-class">
        <h1>{this.myTitle}</h1>
        {items.map((item)=> (<div onClick={() => this.myEvent(item)}>{item.name}</div>))}
      </div>
    );
  }
}
