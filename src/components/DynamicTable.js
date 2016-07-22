import React from 'react';
import CeruleanTheme from '../styles/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export class DynamicTable extends React.Component {
  constructor(props){
    super(props)
  }

  getChildContext() {
      return { muiTheme: getMuiTheme(CeruleanTheme) }
  }

  render() {
    let header = [];
    let index = 0;
    for(let k in this.props.tableData[0]){
      header.push(<TableHeaderColumn key={index++}>{k}</TableHeaderColumn>);
    }
    let rows = [];
    for(let r in this.props.tableData){
      rows.push(<Row key={index++} rowData={this.props.tableData[r]} />);
    }

    return(
      <Table selectable={false}>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            {header}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    );
  }
}

DynamicTable.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired
};

class Row extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let row = [];
    let index = 0;
    for(let k in this.props.rowData){
      row.push(<TableRowColumn key={index++}>{this.props.rowData[k]}</TableRowColumn>);
    }
    return(
      <TableRow>
        {row}
      </TableRow>
    );
  }
}