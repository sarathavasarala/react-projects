var React = require('react');
var ReactDOM = require('react-dom');
require('./main.scss');


var HelloWorld = React.createClass({
  render() {
    return (
        <div>
          If you see this, you've succeeded in setting up your dev setup.
          <p> Your scss should be in main.scss, and your app in main.js (this file). Webpack will bundle everything. </p>
        </div>
      )
  }
});

ReactDOM.render(<HelloWorld />,document.getElementById('react-container'))