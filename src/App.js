import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './react-bootstrap-table2.min.css';
import cellEditFactory from 'react-bootstrap-table2-editor';
// import filterFactory, { numberFilter, Comparator} from 'react-bootstrap-table2-filter';


class App extends Component { 
  render() {

    const products=[{
        id:1, name:'Item name 1',price:2101
      },
      {
        id:2, name:'Item name 2',price:2103
      },
      {
        id:3, name:'Item name 3',price:2200
      },
      {
        id:4, name:'Item name 4',price:2102
      }

    ];

    const columns = [ {
      dataField: 'name',
      text: 'Product Name',
      sort: true,
      headerSortingClasses
    }, {
      dataField: 'price',
      text: 'Product Price'
    },{
      dataField: 'id',
      text: 'Product ID',
      sort: true,
      headerSortingClasses
    
    }];

    // const defaultSorted=[{
    //   dataField:'name',
    //   order:'desc'
    // }];

    return (
      <div>
          <BootstrapTable keyField='id' 
          data={ products } columns={ columns } 
          cellEdit={ cellEditFactory({ mode: 'click' }) }
           />
      </div>
    );
  }
}

export default App;
