import React  from 'react'; 
 
 
  class NoData extends React.Component{ 
    render(){ 
      return( 
            <div className="nodata-section">      
              <button onClick={this.starClick}> Click me to get the Customer Base </button>
       </div> 
     ) 
    } 
} 
export default NoData; 
