import React, {Component} from "react"
import Spinner from "react-bootstrap/Spinner"

class Square extends Component {

  componentDidMount() {
      const script = document.createElement("script");    
      script.async = true;    
      script.src = "https://square.site/appointments/buyer/widget/k64q4dixvxib0s/L9KS532W67MTR.js";    
      this.div.appendChild(script); 
    }
   
  render() {
    return (
      <div className="text-center">
      <Spinner animation="grow" role="status"><span className="visually-hidden">Loading...</span></Spinner>
      <div className="app" ref={el => (this.div = el)}>
          {/* Script is inserted here */}
      </div>
      </div>
      );
    }
  }


export default Square;