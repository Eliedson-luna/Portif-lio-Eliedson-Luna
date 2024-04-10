import styled from "styled-components"

const StyledDiv = styled.div`
    
`

const InfoContainer = () => {
    return (
        <section>
            <StyledDiv>
                    <h3>E-mail</h3>
                    <p>goncalveseliedson@gmail.com</p>
            </StyledDiv>
            <StyledDiv>
                    <h3>Localização</h3>
                    <p>Ipatinga, MG</p>
            </StyledDiv>
        </section>
    )
}
export default InfoContainer