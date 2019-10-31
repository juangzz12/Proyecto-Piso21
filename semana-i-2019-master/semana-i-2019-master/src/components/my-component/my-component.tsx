import {Component, EventEmitter, h, Method, Prop, State} from '@stencil/core';
import './Script.js';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {

  addClass() {
    TagCanvas.Start('myCanvas', 'tags', {
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
  }

  @Prop() arrayKeywords = [];

  @Event() onClickKeyword: EventEmitter;

  private outputKeyword(item){
    this.onClickKeyword.emit(item);
  }

  componentDidUpdate() {
    if (this.arrayKeywords.length) {
      this.addClass();
    }
  }

  render() {
    if (this.arrayKeywords.length > 0) {
      return (
        <div>
          <div id="myCanvasContainer">
            <canvas width="1000" height="500" id="myCanvas">
              <p>Anything in here will be replaced on browsers that support the canvas element</p>
            </canvas>
          </div>
          <div id="tags">
            <ul>
              {this.arrayKeywords.map((item) => (
                <li><a onClick={(event) => {
                  event.preventDefault();
                  this.outputKeyword(item.link)
                }} data-weight={item.weight*.1 + 10}>{item.keyword}</a></li>))}
            </ul>
          </div>
        </div>
      );
    }
  }
}
