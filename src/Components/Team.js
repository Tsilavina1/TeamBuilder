import React from "react";

class Team extends React.Component {
    constructor(props){
        super(props)
        this.state={
            team:[]
        }

    }

    // Affichage des infos User (user associé au parametre p de la methode map)

    render(){
        return(
        
            <div className="card col-3">

                <img src={this.props.user.avatar} id="avatar" alt="Avatar" style={{width:"100%"}} /> 

                <div className="container">
        
                    <div id="prenom">{this.props.user.first_name}</div>
                    <div id="email">{this.props.user.email}</div>
                    <div id="phone">{this.props.user.phone}</div>
                    <div id="state">{this.props.user.state}</div>

                </div>
            </div>
        )
    }
}

export default Team;