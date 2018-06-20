import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { productsGenerator } from '../node_modules/util';
import './react-bootstrap-table2.min.css'
//import '../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class App extends Component {
  
  render() {
    // function rankFormatter(cell, row, rowIndex, formatExtraData) {
    //   return (
    //     <i className={ formatExtraData[cell] }></i>
    //   );
    // }
    function priceFormatter(column,colIndex){
      return(
        <h5><strong>$$ {column.text} $$</strong></h5>
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

        // attrs:{title:'id column'}
        // align: 'center',
        // style: {
        //   fontWeight: 'bold',
        //   fontSize: '18px'
        // }
        // events:{
        //   onClick:()=> alert('Click on Product ID field')
        // },
        // classes:'demo-key-row'
      }, {
        dataField: 'name',
        text: 'Product Name',
        // attrs: (cell,row,rowIndex,colIndex)=>({'data-test':`customized data ${rowIndex}`})
        // title:(cell,row,rowIndex,colIndex)=>`this is custom title for ${cell}`,
        // style: (cell, row, rowIndex, colIndex) => {
        //   if (rowIndex % 2 === 0) {
        //     return {
        //       backgroundColor: '#81c784'
        //     };
        //   }
        //   return {
        //     backgroundColor: '#c8e6c9'
        //   };
        // }

        // classes: (cell, row, rowIndex, colIndex) => {
        //   if (rowIndex % 2 === 0) return 'demo-row-even';
        //   return 'demo-row-odd';
        // }
      
        // align:(cell,row,rowIndex,colIndex)=>{
        //   if(rowIndex % 2 === 0) return 'right';
        //   return 'left';
        // }
      },
      {
        dataField:'price',
        text: 'Product Price',
        headerFormatter:priceFormatter
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
