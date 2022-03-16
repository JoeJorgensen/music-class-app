import styled, { css } from "styled-components";
import { PRIMARY_COLOR, PRIMARY_DARK_COLOR } from "../styles";

const Button = styled.button`
padding: 10px 16px;
border-radius: 3px;
border:none;
margin: 10px;
background-color: ${PRIMARY_COLOR};
color: white;

&: hover{
    background-color: ${PRIMARY_DARK_COLOR};
    cursor: pointer;

}
${(props)=> 
props.outline && css`
background-color: white;
color: ${PRIMARY_COLOR};
border: 1px solid ${PRIMARY_COLOR};
&: hover{
    background-color:${PRIMARY_COLOR};
    color:white;
    cursor:pointer;
}
`
}


`
export default Button