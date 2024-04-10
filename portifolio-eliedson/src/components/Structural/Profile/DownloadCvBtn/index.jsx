import styled from "styled-components";
import curriculo from "../../../../assets/doc/curriculo.pdf";

const archiveName = 'curriculoEliedsonLuna'

const ButtonStyled = styled.button`
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 15px;
  
  background-color: #50200080;
  border-radius: 5px;

  &:hover {
    color: violet;
  }
`

const downloadCV = () => {
    const a = document.createElement('a');
    a.style = 'display: none;';
    document.body.appendChild(a); 
    return () => {
        a.href = curriculo;
        a.download = archiveName;
        a.click();
    }
}

const DownloadCvButton = () => {
    return (
        <ButtonStyled onClick={downloadCV()}> 
            Baixar Curriculo
        </ButtonStyled>
    )
}

export default DownloadCvButton