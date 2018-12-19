import React from 'react'; 
import Table from './table';


//import CustomerList from './helper'; 
const tableData =require('../data/db.json'); 
var displayTable = false; 
class Main extends React.Component{ 
constructor(){ 
    super();
     this.state = {'searchTxt': '', data: []}; 
     this.filterTable = this.filterTable.bind(this); 
      this.setSearchTxt = this.setSearchTxt.bind(this); 
      this.starClick = this.starClick.bind(this); 
   } 
    setSearchTxt(e){ 
     this.setState({searchTxt: e.target.value}); 
   } 
   filterTable(e){ 
     e.preventDefault() 
     console.log("table:")
     let searchTxt = this.state.searchTxt; 
      let data = tableData; 
      data = data.filter(record => { 
        return Object.keys(record).some(key => record[key].toString().search(searchTxt.toLowerCase())!== -1); 
      }); 
      this.setState({'data': data}); 
  
 
     displayTable = (data.length > 0 && this.state.searchTxt !== '') ? true : false;       } 
    starClick(){ 
      console.log("tableData",tableData);
      displayTable = true; 
      this.setState({'data': tableData}); 
   } 
    render(){ 
      return( 
        <div>         <div className="search-form">       
         {/* <h3>Search</h3>  */}
     
      <form onSubmit={this.filterTable}> 
        <div className="form-group">        <input type="text"  onChange={this.setSearchTxt} />           <button  type="submit">Search</button>                  </div> 
        </form> 
        <button className="space" onClick={this.starClick}> Click me to get the Customer Base </button> 
       </div> 
       {displayTable ? <Table data = {this.state.data} /> : null}
        
       </div>

    ) 
  } 
 } 
export default Main; 
