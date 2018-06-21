import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './react-bootstrap-table2.min.css';
import filterFactory, { numberFilter,Comparator } from 'react-bootstrap-table2-filter';

class App extends Component { 
  render() {
    const selectOptions = {
      '03': '03',
      '04': '04',
      '01': '01'
    };

    const products=[{
        id:1, name:'Sana',quality:'01'
      },
      {
        id:2, name:'Saad',quality:'02'
      },
      {
        id:3, name:'Sarah',quality:'04'
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
      filter: numberFilter({
        defaultValue:{number:'02',comparator:Comparator.GT}
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
