import React from 'react';
import './App.css';
import './styles.css';

import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';
import {
    HomeSolid,
    HashtagOutline,
    BellOutline,
    MailOutline,
    UserOutline,
    DotsCircleHorizontalOutline,

} from "@graywolfai/react-heroicons";

class App extends React.Component {

    constructor() {
        super(); //Es necesario colocar super para poder crear mi estado para este componente
        this.state = {
            iconArray: [ 
              < HomeSolid />,
              < HashtagOutline />, 
              < BellOutline />, 
              < MailOutline />, 
              < UserOutline />, 
              < DotsCircleHorizontalOutline />,
            ],
       
            profileUrl: 'https://i.pinimg.com/originals/ee/ce/b4/eeceb4bd979a5cf044418add179f180b.png'
        }
    }

    cambiarImagen = () => {
      this.setState({profileUrl: 'https://i.pinimg.com/originals/86/25/28/8625282b3561cdf731640473528cac07.png'})
    }

    render() {
        return (
            <div>
                <div className="App">
                    <Sidebar iconList={this.state.iconArray} profileUrl={this.state.profileUrl} />
                    <Main profileUrl={this.state.profileUrl} cambiarImagen={this.cambiarImagen}  />
                </div>
            </div>
        )
    }
}

export default App;
