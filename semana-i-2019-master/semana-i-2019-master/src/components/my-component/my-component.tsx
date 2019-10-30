import {Component, h, Method, Prop, State} from '@stencil/core';
import './Script.js';
import MovieSearch from './MovieSearch';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {

  @State() arrayKeywords: any [] = [];

  @Method()  waitingForData(keyword: any []) {
    this.arrayKeywords = keyword;
    console.log(this.arrayKeywords)
  }

  @Method() async printConsoleLog(){
    let variableArreglo = await MovieSearch.getWeightbyKeyword();
    this.waitingForData(variableArreglo);
  }
 

  addClass() {
    try {
      window['TagCanvas'].Start('myCanvas', 'tags', {
        textFont: 'Roboto',
        textColour: '#ff970c',
        outlineColour: '#08454a',
        reverse: true,
        depth: 2,
        interval: 20,
        minBrightness: 0.1,
        pulsateTo: 0.2,
        pulsateTime: 0.75,
        initial: [0.1, -0.1],
        decel: 0.98,
        hideTags: false,
        shadow: '#ccf',
        shadowBlur: 3,
        weight: true,
        weightFrom: 'data-weight',
        fadeIn: 800,
        maxSpeed: 0.05
      });
    } catch (e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  }

  render() {

console.log(this.arrayKeywords.length);
    console.log(this.arrayKeywords);
      console.log("render");
      return (
        <div>
          <div id="myCanvasContainer">
            <canvas width="1000" height="300" id="myCanvas">
              <p>Anything in here will be replaced on browsers that support the canvas element</p>
            </canvas>
          </div>
          <div id="tags">
            <ul>
              {this.arrayKeywords.map((item) => (<li><a href={item.link} data-weight={item.weight*.1}>{item.keyword}</a></li>))}
            </ul>
          </div>
        </div>
      );
  }

  componentDidRender () {
      console.log('did')
      this.addClass(); 

  }
} 