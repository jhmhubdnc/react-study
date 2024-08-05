import styled from "@emotion/styled"

const TempImgUrl = 'https://i.namu.wiki/i/9_tLPzF06K2tkSuG6JcxLW7QwNbiImKSEA683DyGf8zkZzchWW9Of0K1pyIqsfF_6nUWuBVxhk2vUEI5e-_tgA.webp'

const PokemonDetail = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src={TempImgUrl} alt="포켓몬 이미지" />
            </ImageContainer>
            <Divider></Divider>
            포켓몬 상세 페이지
        </Container>
    )
}

const Container = styled.section`
    border: 1px solid #c0c0c0;
    margin: 16px 32px;
    border-radius: 16px;
    box-shadow: 1px 1px 3px 1px #c0c0c0;
`

const ImageContainer = styled.section`
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    margin: 8px 0;
`

const Image = styled.img`
    width: 350px;
    height: 350px;
`

const Divider = styled.hr`
    margin: 32px;

`

export default PokemonDetail 