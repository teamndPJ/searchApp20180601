import React from 'react';
import ReactDOM from 'react-dom';

export default class TestComp1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      age: this.props.age,
      hobby: this.props.hobby
    }
  }

  render() {
    return(
      <div>
        <ul>
          <li>{this.state.name}</li>
          <li>{this.state.age}</li>
          <li>{this.state.hobby}</li>
        </ul>
      </div>
    );
  }
}

TestComp1.propTypes = {
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
    hobby: React.PropTypes.string.isRequired
}

TestComp1.defaultProps = {
    name: "hoge",
    age: 20,
    hobby: "映画鑑賞"
}
