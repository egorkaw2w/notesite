import React from "react";
class Header extends React.Component {
    render(){
        return (
            <div>
            <h1 className="header">{this.props.title}</h1>
            </div>
        );
    }
}

export default Header