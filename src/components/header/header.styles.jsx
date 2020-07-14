import styled,{css} from 'styled-components';    //this library give a random and unique classname to components.
import {Link} from 'react-router-dom';

const OptionContainerStyles=css`
 padding: 10px 15px;
 cursor: pointer;
`;

export const HeaderContainer= styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-between;
padding: 0px 60px;
`;

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
// padding: 35px;
`;

export const  OptionsContainer =styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
padding:25px;
`;

export const OptionLink = styled(Link) `
 ${OptionContainerStyles}
`;

export const OptionDiv =styled.div`
  ${OptionContainerStyles}
`;