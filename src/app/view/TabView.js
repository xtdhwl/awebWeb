/**
 * <p>Copyright: Copyright (c) 2016</p>
 * <p>Company: 联动优势电子商务有限公司</p>
 * <p>17-2-3</p>
 *
 * @author xtdhwl
 * @description
 * @version 1.0
 * modified:
 */


import React from 'react';


export default class TabView extends React.Component {

  static propTypes = {
    //onClick: React.PropTypes.fun,
    title: React.PropTypes.string
  };

  static defaultProps = {
    // onClick : null
    title: ""
  };


  render() {
    return (
      <div className="tabView" onClick={this.props.onClick}>
        <div className="tabTitleView">
          {this.props.title}
        </div>
      </div>
    );
  }
}
