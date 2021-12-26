# Helen Miamii Moon Tarot and Astro Gatsby Theme 🔮 

This is a responsive, simple, and elegant website for my Tarot and Astrology brand "Helen Miamii Moon". This theme is a great template for an Artist that offers bookable services and is looking to streamline that booking process for their clients.

This website is altered from a Gatsby Starter Theme using React and React-Bootstrap.

## Square Appointments
The Customer Self-Booking feature uses the [Square Appointments](https://squareup.com/us/en/appointments) widget. It is activated in a modal by the ` <Button/> ` found in  ` src/components/reading.js `

Update the `script.src=` in ` src/components/square.js ` with your own Square Appointments widget src link. 

### Square Appointments Widget Link Example:
```
https://square.site/appointments/buyer/widget/[YOUR OWN UNIQUE SQUARE CODE]/[YOUR OWN UNIQUE SQUARE CODE].js
```

### Example Usage:
```
import React, {Component} from "react"
import Spinner from "react-bootstrap/Spinner"

class Square extends Component {

  componentDidMount() {
      const script = document.createElement("script");    
      script.async = true;    
      script.src = "https://square.site/appointments/buyer/widget/[YOUR OWN UNIQUE SQUARE CODE]/[YOUR OWN UNIQUE SQUARE CODE].js";    
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

```

I'm currently working on a CSS file to override (!Important) the Square Appointments Widget CSS to customize the widget for a more "on brand" feel. Coming soon.
