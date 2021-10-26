import React from "react";
import Team from './Team';

class Infos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            team: []
        }
    }

// 1- Push user dans le tableau team
// 2- Modification du state de team avec setState

userSelect(){
    if(this.state.team.length < 6) {
        this.state.team.push(this.props.user);
        this.setState({team:this.state.team});
    }

}

// 1- Affichage des infos User recuperées de l'API après click du bouton Call
// 2- Creation d'un evenement avec la fonction userSelect
// 3- Appel de Team en realisant une boucle avec la methode map()
// 4- Affichage de divTeam

render(){
    let divTeam = this.state.team.map((p, index) => 
    <Team user={p} key={index}/>)

    return (
        <div>
            <div className="card col-3">
        
            <img src={this.props.user.avatar} id="avatar" alt="Avatar" style={{width:"100%"}} /> 

            <div className="container">
            
                <div>{this.props.user.first_name}</div>
                <div>{this.props.user.username}</div>
                <div>{this.props.user.email}</div>
                <div>{this.props.user.phone_number}</div>

            </div>
            
            <button type="button" className= {this.state.team.length < 6 ? 'btn btn-dark' : 'btn btn-danger' } onClick={this.userSelect.bind(this)}>SELECT</button>

        
            </div>
            <div className="row">{divTeam} </div>
        </div>
        
    )
}

}


export default Infos;