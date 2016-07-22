require('normalize.css');
require('styles/App.css');

import React from 'react';
import DynamicTable from './DynamicTable'

const data = [
	{
		color: 'red',
		value: '#f00'
	},
	{
		color: 'green',
		value: '#0f0'
	},
	{
		color: 'blue',
		value: '#00f'
	},
	{
		color: 'cyan',
		value: '#0ff'
	},
	{
		color: 'magenta',
		value: '#f0f'
	},
	{
		color: 'yellow',
		value: '#ff0'
	},
	{
		color: 'black',
		value: '#000'
	}
]

class AppComponent extends React.Component {
  render() {
    return (
      <div>
      	<DynamicTable tableData={data} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
}

export default AppComponent;
