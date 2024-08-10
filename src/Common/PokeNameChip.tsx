import styled from "@emotion/styled"

interface PokeNameChip {
    name: string,
    id: number, 
}

const PokeNameChip = (props:PokeNameChip) => {
    const renderNumber = (id:number) => {
        const digits = 3
        const numberString = id.toString()

        if (numberString.length >= 3) {
            return numberString
        }

        let result = ''
        const digitsNumberStringLen = (digits - numberString.length)

        for (let i = 0; i < digitsNumberStringLen; i++) {
            result += '0';   
        }

        return `${result}${numberString}`
    }

    return (
        <Chip>
            <NumberChip>
                <Number>{renderNumber(props.id)}</Number>
            </NumberChip>
            <Text>{props.name}</Text>
        </Chip>
    )
}

const Chip = styled.div`
    display: flex;
    align-items: center;

    border: 1px solid #c0c0c0;
    border-radius: 16px;

    font-weight: bold;
    box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`

const NumberChip = styled.div`
    padding: 4px 6px;
    background-color: yellow;
    border-radius: 16px;
    opacity: 0.8;
`

const Number = styled.label`
    opacity: 1;
`

const Text = styled.label`
    margin: 0 8px;
`

export default PokeNameChip