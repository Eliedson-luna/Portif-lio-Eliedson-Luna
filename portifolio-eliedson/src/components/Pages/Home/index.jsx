import styled from "styled-components";
import Profile from "../../Structural/Profile/index.jsx";
import Card from "./Card/index.jsx";

const StyledDiv = styled.div`

    display: flex;
    width: 100%;
    
    justify-content: center;
    font-family: 'Gill Sans', sans-serif;

    ::-webkit-scrollbar {
        width: 0px;
    }
`
const Content = styled.div`
    overflow: scroll;
    height: 100vh;
    width: 100%;
    margin: 50px;
    border-radius: 5px;
    background-color: #00000050;
    box-shadow: orange 0px 1px 3px;
`
function Body() {

    return (
        <StyledDiv>
            <Profile />
            <StyledDiv>
                <Content>
                    <Card/>
                </Content>
            </StyledDiv >
        </StyledDiv>
    )
}

export default Body
