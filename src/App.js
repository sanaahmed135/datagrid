import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './react-bootstrap-table2.min.css';
import filterFactory, { numberFilter, Comparator} from 'react-bootstrap-table2-filter';


class App extends Component { 
  render() {

    let priceFilter;
    const products=[{
        id:1, name:'Item name 1',price:2101
      },
      {
        id:2, name:'Item name 2',price:2103
      },
      {
        id:3, name:'Item name 3',price:2100
      },
      {
        id:4, name:'Item name 4',price:2102
      }

    ];

    const columns = [{
      dataField: 'id',
      text: 'Product ID'
    }, {
      dataField: 'name',
      text: 'Product Name'
    }, {
      dataField: 'price',
      text: 'Product Price',
      filter: numberFilter({
        getFilter: (filter) => {
          // pricerFilter was assigned once the component has been mounted.
          priceFilter = filter;
        }
      })
    }];

    const handleClick = () => {
      priceFilter({
        number:2103,
        comparator:Comparator.GT
      });
    };
    return (
      <div>
          <button className="btn btn-lg btn-primary" onClick={handleClick}>filter all columns which is greater than 2103</button>
          <BootstrapTable keyField='id' 
          data={ products } columns={ columns } 
          filter={ filterFactory() } />
      </div>
    );
  }
}

export default App;
