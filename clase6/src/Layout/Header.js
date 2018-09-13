import React from 'react';
import logo from "../logo.svg";

/*class Header extends React.Component {

    render(){
        let title = this.props.title;
        console.log(title);
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{title}</h1>
            </header>
        )
    }
}*/

const Header = (props) => {
    let title = props.title;
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{title}</h1>
        </header>
    )
};

export default Header;