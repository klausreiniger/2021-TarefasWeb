import React from 'react'

class Bullet extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <li key={this.props.key}>
                <strong>{this.props.type}</strong> {this.props.content}
            </li>
        )
    }
}

export default Bullet