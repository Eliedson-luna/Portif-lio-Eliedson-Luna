import styled from "styled-components"
import {Link} from "react-router-dom"


const options = [
    {id: "1", name: "Home", route:"/"},
    {id: "2", name: "Projetos", route: "/Projetos"},
    {id: "3", name: "Sobre o portifolio", route: "/Sobre"}]


const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    font-size: 10px;
    transition: font-size .5s;
    
    &:hover {
        
        font-size: 12px;
        li {
        color:white
        }
    }
`

const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    
`

const StyledItem = styled.li`
    
    display:flex;
    justify-content: space-around;
    margin: 4rem 100px;
    padding: 0px 5rem 0px 5rem;
    border: none;
    
    cursor: pointer;
    color: gray;

    &:hover {
        p {color: orange;}
        box-shadow: orange 0px 6px;
    }
    &:active {
        color: lightblue;
        box-shadow: lightblue 0px 6px;
    }


`
const Menu = () => {
    return (
        <StyledDiv>
            <StyledList>
               { options.map( option => (
                    <Link to={option.route}>
                        <StyledItem key={option.id}>
                            <p>{option.name}</p>
                        </StyledItem>
                    </Link>
                        )
                    )
               }
            </StyledList>
        </StyledDiv>
    )
}

export default Menu;