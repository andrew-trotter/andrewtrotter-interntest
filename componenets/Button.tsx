import styled from "@emotion/styled";
import { Button } from "@mui/material";

//trying a styled button

const StyledButton = styled(Button)({
  color: '#FFFFFF'
})

interface Props {
  text: string
}

export default function BasicButton(props:Props){
  return <StyledButton>{props.text}</StyledButton>
}