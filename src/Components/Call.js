import React from 'react';
import axios from 'axios'; 

class Call extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            user: []
        }
    }

// 1- Creation d'un evenement avec la fonction userCall
// 2- Recuperation de l'API avec axios
// 3- Modification du state avec setState et recuperation du props

userCall(){
    axios.get(`https://random-data-api.com/api/users/random_user`)
      .then(res => {
        const user = res.data; 
        this.setState({ user });

        this.props.newUser(user)
      })
}


render(){
    return(
        <div>
            <h2>Call User</h2>
            <button type="button" className="btn btn-dark" onClick={this.userCall.bind(this)}> Call</button>
        </div>
    )
}

}



export default Call