import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { productsGenerator } from '../node_modules/util';
import './react-bootstrap-table2.min.css';
//import filterFactory,{textFilter} from 'react-bootstrap-table2-filter'
//import '../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class App extends Component {
  
  render() {


    const products=[
      {
        id:1, name:'Sana',price:2100
      },
      {
        id:2, name:'Saad',price:2104
      }
    ];

    const columns = [
      // omit...
      {
        dataField: 'id',
        text: 'Product ID',
        headerAttrs: { title: 'ID header column' }

      }, {
        dataField: 'name',
        text: 'Product Name',
        headerAttrs: (column, colIndex) => ({ 'data-test': `customized data ${colIndex}` })

      },
      {
        dataField:'price',
        text: 'Product Price'
      

      }
    ]
      
    return (
      <div>
          <BootstrapTable
            keyField="id"
            data={ products }
            columns={ columns }
          />
      </div>
    );
  }
}

export default App;
