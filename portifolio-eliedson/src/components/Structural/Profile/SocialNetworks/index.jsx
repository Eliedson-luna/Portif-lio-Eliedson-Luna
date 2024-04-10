import styled from "styled-components"

const socialNetworks = [
    { name: "Linkedin", link: "https://www.linkedin.com/in/eliedsonLuna/"},
    { name: "Github", link: "https://github.com/Eliedson-luna"},
    { name: "Instagram", link: "https://www.instagram.com/eli.sk8r/"},
]

const StyledSec = styled.section`
  margin: 20px;
`
const Astyled = styled.a`
  margin: 5px;
  padding: 8px;
  color: white;
  background-color: #50200080;
  border-radius: 5px;

  &:hover {
    color: orange;
  }
`


const SocialNetwork = () => {
    return (
      <StyledSec>
        {socialNetworks.map((network) => (
          <Astyled href={network.link} key={network.name}>
            {network.name}
          </Astyled>  
        ))}
    </StyledSec>)
}
export default SocialNetwork