import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { productsGenerator } from '../node_modules/util';
import './react-bootstrap-table2.min.css'
//import '../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class App extends Component {
  
  render() {
    function rankFormatter(cell, row, rowIndex, formatExtraData) {
    //  console.log( rowIndex)
    //  console.log(formatExtraData[0]);
      return (
        <i className={ formatExtraData[cell] }></i>
      );
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
        text: 'Product ID',
        align: 'center'
      }, {
        dataField: 'name',
        text: 'Product Name',
        align:(cell,row,rowIndex,colIndex)=>{
          if(rowIndex % 2 === 0) return 'right';
          return 'left';
        }
      },
      {
        dataField:'price',
        text: 'Product Price'
      }
      // {
      //   dataField: 'rank',
      //   text: 'Rank',
      //   formatter: rankFormatter,
      //   formatExtraData: {
      //     up: 'glyphicon glyphicon-chevron-up',
      //     down: 'glyphicon glyphicon-chevron-down'
      // }
];
      
    return (
      <div>
        {/* <p>Cloud icon on a styled link button:
          <a href="#" className="btn btn-info btn-lg">
            <span className="glyphicon glyphicon-cloud"></span> Cloud 
          </a>
      </p>  */}
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
