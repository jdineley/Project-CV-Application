import styled from "styled-components"
import style1 from "../../assets/style1.png"
import style2 from "../../assets/style2.png"
import style3 from "../../assets/style3.png"
import style4 from "../../assets/style4.png"


export default function StyleSelectButton({ format, onClickStyle, layout }) {

    return <SelectButton value={format} format={format} onClick={onClickStyle} layout={layout}/>
}



const SelectButton = styled.button`
    width: 105px;
    height: 148px;
    border: ${(props) => {
        if(props.format === props.layout){
            return '4px solid red'
        } 
        return '2px solid black'
    }};
    background-image: url(${(props) => {
        if(props.format === 'style1') {
            return style1
        } 
        else if(props.format === 'style2') {
            return style2
        } 
        else if(props.format === 'style3') {
            return style3
        } 
        return style4
    }});
    background-size: cover;
    `