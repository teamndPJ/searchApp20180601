import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar} from 'react-onsenui';

import Test01_Props from './Test01_Props';

export default class HomePage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() =>
          <Toolbar>
            <div className='center'>Home</div>
          </Toolbar>
        }
      >
        <div>
          Home Page１
        </div>

        <div>
          Home Page２
        </div>

        <Test01_Props />

        <Test01_Props name="nami" age="39" hobby="ランニング" />

        <Test01_Props />

      </Page>
    );
  }
}