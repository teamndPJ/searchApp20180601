import React from 'react';
import ReactDOM from 'react-dom';
import {SearchInput, Button} from 'react-onsenui';

export default class Test02_Search extends React.Component {

  handleClick(e) {
    alert('Hello world!');
  }
   
  render() {
    return(
      <div>
        <section style={{margin: '16px'}}>
          <SearchInput placeholder='Search' onChange={this.handleChange} />
          <Button style={{margin: '6px'}}  modifier='quiet' onClick={this.handleClick}>Setting</Button>
        </section>
        
        <section style={{margin: '16px'}}>
            <Button style={{margin: '6px'}} onClick={this.handleClick}>Normal</Button>
            <Button style={{margin: '6px'}} modifier='quiet'>Quiet</Button>
            <Button style={{margin: '6px'}} modifier='outline'>Outline</Button>
            <Button style={{margin: '6px'}} modifier='cta'>Call to action</Button>
            <Button style={{margin: '6px'}} modifier='large'>Large</Button>
        </section>

      </div>
    );
  }
}
