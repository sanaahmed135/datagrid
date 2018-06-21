import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './react-bootstrap-table2.min.css';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';

class App extends Component { 
  render() {
    const selectOptions = {
      0: 'Good',
      1: 'Bad',
      2: 'unknown'
    };

    const products=[{
        id:1, name:'Sana',quality:'Bad'
      },
      {
        id:2, name:'Saad',quality:'Good'
      },
      {
        id:3, name:'Sarah',quality:'unknown'
      }
    ];

    const columns = [{
      dataField: 'id',
      text: 'Product ID'
    }, {
      dataField: 'name',
      text: 'Product Name'
    }, {
      dataField: 'quality',
      text: 'Product Quailty',
      formatExtraData: (cell)=> selectOptions[cell],
      //formatter: (cell)=> selectOptions[cell],
      filter: selectFilter({
        options: selectOptions
      })
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
