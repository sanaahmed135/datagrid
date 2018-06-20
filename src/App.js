import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { productsGenerator } from '../node_modules/util';
import './react-bootstrap-table2.min.css';
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter'
//import '../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class App extends Component {
  
  render() {

    function priceFormatter(column,colIndex,{sortElement,filterElement}){
      return(
        <div style={{display:'flex',flexDirection:'column'}}>
          { filterElement }
          { column.text }
          { sortElement }
        </div>
      )
    }
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
        text: 'Product ID'


      }, {
        dataField: 'name',
        text: 'Product Name',

      },
      {
        dataField:'price',
        text: 'Product Price',
        sort: true,
        filter: textFilter(),
        headerFormatter:priceFormatter
      }
    ]
      
    return (
      <div>
          <BootstrapTable
            keyField="id"
            data={ products }
            columns={ columns }
            filter={ filterFactory() }

          />
      </div>
    );
  }
}

export default App;
