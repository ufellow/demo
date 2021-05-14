import styled from 'styled-components'

export const MenuContainer = styled.ul`    
    flex: 0.8;
    display:flex; 
    flex-direction: row;
    justify-content: space-between;   
    align-items:center; 
    margin: 10px;
    li{
         padding: 10px;
    }
    .tabs_link{
      font-size: 18px;
      font-weight: 800;
    }
`;
export const activeStyle = {
    backgroundColor: 'red'
}
