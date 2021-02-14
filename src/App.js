import React,{Component } from 'react'
import "./App.css";
import image from "./assets/photo.jpg";
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
     
      fullName:"Malki Hajer",
      bio:"Arianna Huffington est une femme d affaires et est notamment célèbre pour avoir fondé le site d’actualités le Huffington Post Née en Grèce elle a suivi des études d économie à Cambridge en Angleterre puis décide à 25 ans de s’installer aux Etats-Uni Ce n’est qu’en 2005 à l’âge de 55 ans qu’elle fonde le Huffington Post et le succès est très rapidement au rendez-vou Ce site d’actualités est désormais décliné dans plusieurs pays et dans plusieurs langues "
      , 
      imgSrc:image, 
      profession:"PDG",
      show:false,
      intervall:null,
      timer:0
    
    };
  }
  
  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  componentDidMount(){
    this.setState({
      intervall:setInterval(()=>{
        this.setState({timer: this.state.timer +1});
      },1000),
    });
  }
 
  render() {
    return (
      
      <div>
        
        <button onClick={this.handleShow}>Toggle</button>
        
            {this.state.show?(
              <div className='neon'>
             
                 <img src={this.state.imgSrc} alt="fjfg" style={{}} />
         <h3>{this.state.timer}</h3>
        <h1>{this.state.fullName}</h1>
        <h2>{this.state.bio}</h2>
       
        <h3>{this.state.profession}</h3>
        
        </div>
        ):
        (<h1>click on the button to show user</h1>
        )
            }
      </div>
    )
  }
}

