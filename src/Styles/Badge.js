import styled, { css } from "styled-components";
import { PRIMARY_COLOR, PRIMARY_DARK_COLOR, SECONDARY_COLOR, SUCCESS_COLOR} from "../styles";



const Badge = styled.span`
color: white;
font-size: 20px;
padding: 4px 7px;
margin: 10px;
font-style: normal;
font-weight: 600;
line-height: 11px;
background:${PRIMARY_COLOR};
border-radius: ${props => props.rounded ? '15px' : '3px'};

&: hover{
    background-color:${PRIMARY_DARK_COLOR};
    cursor: pointer;
}
${(props)=>
     props.secondary && css`
background-color:${SECONDARY_COLOR}
    `
}
${(props)=>
    props.success && css`
background-color:${SUCCESS_COLOR}
   `
}

`

export default Badge