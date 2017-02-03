import React from 'react';
import BasePage from '../base/BasePage.js';
import Window from '../view/Window.js';
import TabbarView from '../view/TabbarView.js';
import Tab from '../view/Tab.js';


export default class HomePage extends BasePage {

  constructor(props, context) {
    super(props, context);

    this.state = {
      windows: []
    }
  }

  componentDidMount() {
    this.onOpenWindowClicker();
  }

  /**
   * 打开一个窗口
   */
  onOpenWindowClicker() {
    var win1 = {
      title: "test"
    };
    this.setState({
      windows: [win1]
    });

    // var tab = new Tab();
    // tab.title = "短信管理";
    // tab.onClick = this.onTabClicker.bind(this, tab);
    // this.refs.tabbarView.addTab(tab);


    var tab = new Tab();
    tab.title = "短信管理";
    tab.onClick = this.onTabClicker.bind(this, tab);
    this.refs.tabbarView.addStatus(tab);
  }

  onTabClicker(tab) {
    console.log("onTabClicker");
    console.log(tab);
    this.refs.tabbarView.removeTab(tab);
  }

  render() {
    var windowViews = this.state.windows.map((win, index) => {
      console.log(win);
      return (
        <Window
          key={index}
          title={win.title}
          style={{width: 200, height: 200}}
        >
          窗口内容
        </Window>
      );
    });

    return (
      <div className="homeRootView">
        <div id="window" style={{backgroundColor: "#ff0"}}>
          <button onClick={this.onOpenWindowClicker.bind(this)}>HomePage</button>
          {windowViews}
        </div>
        <TabbarView ref="tabbarView" className="tabbar"/>
      </div>
    );
  }
}
