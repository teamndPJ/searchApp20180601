import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar, ToolbarButton, Icon} from 'react-onsenui';

import Test02_Search from './Test02_Search';

export default class SettingsPage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() =>
          <Toolbar>
            <div className='center'>Search</div>
            <div className='right'>
             <ToolbarButton>
              <Icon icon="ion-navicon, material:md-menu"></Icon>
             </ToolbarButton>
            </div>
          </Toolbar>
        }
      >
        <div>
          <Test02_Search />
        </div>
      </Page>
    );
  }
}