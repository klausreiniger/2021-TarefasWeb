import React, {useState} from 'react'
import styled from 'styled-components'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const StyledTypo = styled(Typography)`
  background-color: ${props => props.green ? "green" : "transparent"};
`;

const StyledButton = styled(Button)`
  ${props => props.isVisible ? "" : "display: none"}
`;

function AppBullet(props) {
    const [status, setStatus] = useState(false)
    return (
        <Card key={props.key} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {props.type}
            </Typography>
            <Typography variant="body2">
              {props.content}
            </Typography>
            <br/>
            <StyledTypo green={status} variant="body2">
              {status ? "Done" : "To Do"}
            </StyledTypo>
          </CardContent>
          <CardActions>
            <StyledButton isVisible={!status} size="small" onClick={
               () => {setStatus(true)}
            }>
                <CheckIcon/>               
            </StyledButton>
            <StyledButton isVisible={status} size="small" onClick={
               () => {setStatus(false)}
            }>
                <ClearIcon/>
            </StyledButton>
          </CardActions>
       </Card>
    )
}

export default AppBullet