


import Section from "../Utils/Section"
import StyleSelectButton from "../Utils/StyleSelectButton"


export default function StyleSelect({ onClickStyle }) {

    return (
        <Section title="CV Layout Selection">
            <StyleSelectButton layout="style1" onClickStyle={onClickStyle}/>
            <StyleSelectButton layout="style2" onClickStyle={onClickStyle}/>
            <StyleSelectButton layout="style3" onClickStyle={onClickStyle}/>
            <StyleSelectButton layout="style4" onClickStyle={onClickStyle}/>
        </Section>
    )
}