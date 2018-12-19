import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { ReactTableDefaults } from "react-table";
//const data = [];
class Table extends React.Component{
    
  render(){
    console.log("this.props.data", this.props.data);
    //const pageSize =5;
    Object.assign(ReactTableDefaults, {
    showPagination: false,
    minRows: this.props.data.length
  });
  
    const columns = [{
    Header: 'First Name',
    accessor: 'fname', // String-based value accessors!
    headerClassName: 'head',
    className: 'cell'
  }, {
    Header: 'Last Name',
    accessor: 'lname',
    headerClassName: 'head',
    className: 'cell'
  }, {    
    Header: 'Email',
    accessor: 'email',
    headerClassName: 'head'
  }]
    return(
      <div className="table-section">
     <ReactTable data={this.props.data}
    columns={columns}
  />
  </div>
    )
  }
}
export default Table;