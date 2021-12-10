import React, {useState} from 'react'
import styled from 'styled-components'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const styledIcon = styled(CheckIcon)`
    min-width: 5px;
    min-height: 5px;
    color: blue;
    opacity: ${props => props.isSet == "true" ? "1" : "0.2"}
`;

function AppBullet(props) {
    const [status, setstatus] = useState(false)
    return (
        <Card key={props.key} sx={{ minWidth: 275 }}>
        <CardContent>
           <Typography variant="h5" component="div">
             {props.type}
           </Typography>
           <Typography variant="body2">
             {props.content}
           </Typography>
         </CardContent>
         <CardActions>
           <Button size="small" onclick={
               () => {setstatus(true)}
           }>
                <CheckIcon/>               
                <styledIcon isSet={status ? "true" : "false"}/>
            </Button>
            <Button size="small" onclick={
               () => {setstatus(false)}
           }>
                <styledIcon as="ClearIcon" isSet={status ? "false" : "true"}/>
            </Button>
         </CardActions>
       </Card>
    )
}

export default AppBullet