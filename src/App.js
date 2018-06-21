import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './react-bootstrap-table2.min.css';
import filterFactory, { textFilter} from 'react-bootstrap-table2-filter';

class App extends Component { 
  render() {
    const owners = {
        0: 'Allen', 
        1: 'Bob', 
        2:'Cat'};

    const types = [
      'Cloud Service',
      'Message Service',
      'Add Service',
      'Edit Service',
      'Money'];

    const products=[{
        id:1, name:'IT',owner:1,type:'Cloud Service'
      },
      {
        id:2, name:'Vertrieb',owner:0,type:'Add Service'
      },
      {
        id:3, name:'BI',owner:2,type:'Edit Service'
      },
      {
        id:4, name:'Support',owner:1,type:'Message Service'
      }

    ];

    const columns = [{
      dataField: 'id',
      text: 'Job ID'
    }, {
      dataField: 'name',
      text: 'Job Name',
      filter: textFilter()

    }, {
      dataField: 'owner',
      text: 'Job Owner',
      filter: textFilter(),
      formatter: (cell, row) => owners[cell],
      filterValue: (cell, row) => owners[cell]
    }, {
      dataField: 'type',
      text: 'Job Type',
      filter: textFilter(),
      filterValue: (cell, row) => types[cell]
    }];
      
    return (
      <div>
          <BootstrapTable keyField='id' 
          data={ products } columns={ columns } 
          filter={ filterFactory() } />
      </div>
    );
  }
}

export default App;
