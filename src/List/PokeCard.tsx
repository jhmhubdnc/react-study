import styled from "@emotion/styled"
import PokeNameChip from "../Common/PokeNameChip"
import PokeMarkChip from "../Common/PokeMarkChip"

const TempImgUrl = 'https://i.namu.wiki/i/9_tLPzF06K2tkSuG6JcxLW7QwNbiImKSEA683DyGf8zkZzchWW9Of0K1pyIqsfF_6nUWuBVxhk2vUEI5e-_tgA.webp'

const PokeCard = () => {
    return (
        <Item>
            <Header>
                <PokeNameChip></PokeNameChip>
            </Header>
            <Body>
                <Image src={TempImgUrl} alt="제크로무 이미지" />
            </Body>
            <Footer>
                <PokeMarkChip></PokeMarkChip>
            </Footer>
        </Item>
    )
}

const Item = styled.li`
    display: flex;
    flex-direction: column;

    padding: 8px;

    width: 250px;
    height: 300px;

    border: 1px solid #c0c0c0;
    box-shadow: 1px 1px 3px 1px #c0c0c0;
`

const Header = styled.section`
    display: flex;
    flex-direction: row;
    margin: 8px 0;
`

const Body = styled.section`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 8px 0;
`

const Image = styled.img`
    width: 180px;
    height: 180px;
`

const Footer = styled.section`
    display: flex;
    flex-direction: row;
    margin: 8px 0;
`

export default PokeCard
