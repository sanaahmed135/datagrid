import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './react-bootstrap-table2.min.css';
import filterFactory, { dateFilter, Comparator} from 'react-bootstrap-table2-filter';

class App extends Component { 
  render() {

    const products=[{
        id:1, name:'Sana',inStockDate:'02.05.2018'
      },
      {
        id:2, name:'Saad',inStockDate:'31.05.1989'
      },
      {
        id:3, name:'Sarah',inStockDate:'11.09.2014'
      }
    ];

    const columns = [{
      dataField: 'id',
      text: 'Product ID'
    }, {
      dataField: 'name',
      text: 'Product Name'
    }, {
      dataField: 'inStockDate',
      text: 'InStock Date',
      filter: dateFilter({
        defaultValue: { date: new Date(2018, 0, 1), comparator: Comparator.GT }
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
