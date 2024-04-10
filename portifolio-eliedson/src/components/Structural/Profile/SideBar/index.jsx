import SocialNetworks from "../SocialNetworks/index.jsx";
import InfoContainer from "../InfoContainer/index.jsx";
import DownloadCvBtn from "../DownloadCvBtn/index.jsx";
import styled from "styled-components";

import profPicture from "../../../../assets/img/fotoPerfil.png";


const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 100%;
    color: white;
`

const StyledImg = styled.img`
    width: 300px;
    border-radius: 100%;
    margin: 50px 0 30px 0;
    box-shadow: purple 0px 1px 5px;
`

const StyledParag = styled.p`
    font-size: 25px;
    margin-bottom: 40px;
`

const Sidebar = () => {
    return (
    <StyledAside>
        <StyledImg src={profPicture} alt="Eliedson Luna"/>
        <StyledParag>Desenvolvedor</StyledParag>
        <SocialNetworks/>
        <InfoContainer/>
        <DownloadCvBtn/>
    </StyledAside>
    )
}
export default Sidebar