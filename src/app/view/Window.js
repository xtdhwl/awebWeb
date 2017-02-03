import React from 'react';
import classnames from 'classnames';
import DraggableUtil from '../util/DraggableUtil.js';

/**
 * 窗口
 * title
 * style
 */
export default class Window extends React.Component {

  static TAG = "Window";
  static propTypes = {
    title: React.PropTypes.string
  };

  static defaultProps = {
    title: ""
  };

  state = {};

  componentDidMount() {

  }


  _onMouseMove(event) {
    if (this.isDown) {
      var x = event.clientX - this.posX + this.objLeft;
      var y = event.clientY - this.posY + this.objTop;
      this.refs.window.style.left = x + 'px';
      this.refs.window.style.top = y + 'px';
    }
  }

  _onMouseUp(event) {
    this.isDown = false;
  }

  _onMouseOUt(event) {
    this.isDown = false;
  }

  _onMouseDown(event) {
    this.isDown = true;
    this.objLeft = this.refs.window.offsetLeft;
    this.objTop = this.refs.window.offsetTop;
    this.posX = event.clientX;
    this.posY = event.clientY;
  }

  render() {

    return (
      <div ref="window" style={this.props.style} className="windowView">
        <div
          onMouseMove={this._onMouseMove.bind(this)}
          onMouseUp={this._onMouseUp.bind(this)}
          onMouseDown={this._onMouseDown.bind(this)}
          onMouseOut={this._onMouseOUt.bind(this)}
          className="windowTitleView">
          <span>{this.props.title}</span>
          <div className="windowMenu">
            <div className="windowClose"/>
            <div className="windowMinimize"/>
            <button className="windowMinimize"/>
          </div>
        </div>
        <div className="hLine"/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
