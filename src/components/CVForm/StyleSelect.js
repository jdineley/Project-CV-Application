


import Section from "../Utils/Section"
import StyleSelectButton from "../Utils/StyleSelectButton"


export default function StyleSelect({ onClickStyle, layout }) {

    return (
        <Section title="CV Layout Selection">
            <StyleSelectButton layout={layout} format="style1" onClickStyle={onClickStyle}/>
            <StyleSelectButton layout={layout} format="style2" onClickStyle={onClickStyle}/>
            <StyleSelectButton layout={layout} format="style3" onClickStyle={onClickStyle}/>
            <StyleSelectButton layout={layout} format="style4" onClickStyle={onClickStyle}/>
        </Section>
    )
}