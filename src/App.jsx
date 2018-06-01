import React from 'react';
import ReactDOM from 'react-dom';
import {Tabbar, Tab} from 'react-onsenui';

import HomePage from './HomePage';
import SearchPage from './SearchPage';
import SettingsPage from './SettingsPage';

export default class App extends React.Component {
  renderTabs() {
    return [
      {
        content: <HomePage />,
        tab: <Tab label='Home' icon='md-home' />
      },
      {
        content: <SearchPage />,
        tab: <Tab label='Search' icon='md-search' />
      },
      {
        content: <SettingsPage />,
        tab: <Tab label='Setting' icon='md-settings' />
      }
    ]
  }

  render() {
    return (
      <Tabbar initialIndex={0} renderTabs={this.renderTabs.bind(this)} />
    );
  }
}