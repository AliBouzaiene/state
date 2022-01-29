import React from "react";
import image from './image.jpg';
import Profil from './Profil';
import Compteur from './compteur.jsx';
class Person extends React.Component {
  
  state = {  
      show: false,
      fullName: "Bouzaiene Ali",
      profession: "Ingenieur",
      bio:"3alibz@gmail.com / Tel: 53250795", 
      image: <Profil>{image}</Profil>    
  };
  handleClick=()=>this.setState({show:true})  
  render() {
    
    return( 
      <div>
        <div>
          <button onClick={this.handleClick} > Open</button>
        </div>
          {(this.state.show)?       
           <>           
            {this.state.image}
            <h2>{this.state.fullName}</h2> 
            <h4>{this.state.profession}</h4>
            <h4>{this.state.bio}</h4>
            <Compteur />
            </>: null
          }
        </div>
    )
  }
 }
export default Person;
