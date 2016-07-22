require('normalize.css')
require('styles/App.css')

import React from 'react'
import TestTable from './TestTable'

class AppComponent extends React.Component {
  render() {
    return (
      <div>
      	<TestTable />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
