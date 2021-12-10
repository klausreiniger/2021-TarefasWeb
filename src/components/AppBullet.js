import React from 'react'
import styled from 'styled-components'
import Typography from '@mui/material/Typography'

const AppBulletHeader = styled.h1`
    color: blue;
`;

class AppBullet extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <li key={this.props.key}>
                <div>
                    <AppBulletHeader>{this.props.type}</AppBulletHeader>
                    <Typography paragraph>{this.props.content}</Typography>
                </div>
            </li>
        )
    }
}

export default AppBullet