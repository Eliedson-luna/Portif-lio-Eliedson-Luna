import Sidebar from "./SideBar/index.jsx";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 250px;
    height: 100vh;
    padding: 0 80px;
    margin: 50px;
    background-color: #30000040;
    border-radius: 5px;
    box-shadow: orange 0px 1px 3px;
`

const Profile = () => {
    return (
        <StyledDiv>
            <Sidebar/>
        </StyledDiv>
    )
}

export default Profile