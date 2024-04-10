import styled from "styled-components";

const TextContent = styled.div`
    margin: 50px;
    max-height: 80vh;
`
const StyledTitle = styled.h1`
    font-size: 35px;
    color: darkorange;
    word-spacing: 5px;
`
const StyledParag = styled.p`
    font-size: 30px;
    color: white;
    line-height: 60px;
    width: 80%;
    a {
        margin-left: 5px;
        text-decoration: none;
        color: lightblue;
        letter-spacing: 3px;
        transition: color 1s;
    }
    a:hover {
        color: yellow;
    }
`

const Card = () => {
    return ( 
    <TextContent>
        <StyledTitle>
            Eae ? tudo joia ?
        </StyledTitle>
        <StyledParag>
            &nbsp;&nbsp;Meu nome é Eliedson, estudo Análise e Desenvolvimento de Sistemas na <a href="https://www.uninter.com">Uninter.</a><br/>
        </StyledParag>
        <StyledParag>
            &nbsp;&nbsp;Estou me desenvolvendo cada vez mais no ramo da programação, desde que comecei a estudar
            vi um pouco sobre html e css, conexão de banco de dados com sistema java com JPA, criação de api com Nodejs, SQL, Python
             e PowerBi e busco evoluir sempre.<br/>
        </StyledParag>
        <StyledParag>
            &nbsp;&nbsp;Estou aberto a novas propostas para trabalho, ainda estou em busca da minha primeira oportunidade
        </StyledParag>
    </TextContent>    
            
    )
}

export default Card