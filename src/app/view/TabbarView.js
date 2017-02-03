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
import classnames from 'classnames';

import TabView from './TabView.js';
import StatusView from './StatusView.js';

export default class TabbarView extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  state = {
    datas: [],
    status: []
  };


  constructor(props, context) {
    super(props, context);

  }

  addTab(tabView) {
    this.state.datas.push(tabView);
    this.setState({datas: this.state.datas});
  }

  removeTab(tabView) {
    var array = this.state.datas.filter((item) => {
      return item != tabView;
    });

    this.setState({datas: array});
  }

  addStatus(tab) {
    this.state.status.push(tab);
    this.setState({status: this.state.status});
  }

  removeStatus(tab) {
    var array = this.state.status.filter((item) => {
      return item != tab;
    });

    this.setState({status: array});
  }

  renderStatusViews() {
    return this.state.status.map((item, index) => {
      return <StatusView  />;
    });
  }

  renderTabViews() {
    return this.state.datas.map((item, index) => {
      return <TabView key={index}
                      title={item.title}
                      onClick={item.onClick}/>;
    });
  }


  render() {

    return (
      <div className={classnames(this.props.className, "tabbarView")}>
        <div className="tabbarGroup">
          {this.renderTabViews()}
        </div>
        <div className="tabbarStatus">
          {this.renderStatusViews()}
        </div>
      </div>
    );
  }
}
