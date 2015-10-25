import React, { PropTypes, Component } from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, Link, IndexRoute } from 'react-router';
let history = createBrowserHistory();

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/watches/gold-watches/478356348/product.html'>Product</Link></li>
        </ul>
      </div>
    );
  }
};

class Home extends Component {
  render() {
    return (
      <div>Home</div>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <div>Contact</div>
    );
  }
}

class Product extends Component {
  render() {
    return (
      <div>
        <h3>Product</h3>
        <p>{ this.props.params.productId }</p>
        <p>{ this.props.params.seoName }</p>
        <p>{ this.props.params.store }</p>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default class Root extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='contact' component={Contact} />
          <Route path=':store/:seoName/:productId/product.html' component={Product} />
        </Route>
      </Router>
    );
  }
}

React.render(<Root/>, document.body);
