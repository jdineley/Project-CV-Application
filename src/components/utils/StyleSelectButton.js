import styled from "styled-components"
import style1 from "../../assets/style1.png"
import style2 from "../../assets/style2.png"
import style3 from "../../assets/style3.png"
import style4 from "../../assets/style4.png"


export default function StyleSelectButton({ layout, onClickStyle }) {

    return <SelectButton value={layout} layout={layout} onClick={onClickStyle}/>
}



const SelectButton = styled.button`
    width: 105px;
    height: 148px;
    border: 2px solid black;
    background-image: url(${(props) => {
        if(props.layout === 'style1') {
            return style1
        } 
        else if(props.layout === 'style2') {
            return style2
        } 
        else if(props.layout === 'style3') {
            return style3
        } 
        return style4
    }});
    background-size: cover;
`