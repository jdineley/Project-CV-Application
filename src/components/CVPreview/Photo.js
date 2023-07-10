import styled from 'styled-components'
import layoutConfig from '../../layout/layoutConfig';


export default function Photo({ personalInfo, layout, HeaderType }) {

    return (
        <PhotoWrapper layout={layout} HeaderType={HeaderType}>
            <PhotoStyled src={personalInfo.photo}  />
        </PhotoWrapper>
    )
}

const PhotoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: ${(props) => layoutConfig.HeaderTypes[props.HeaderType].Photo['grid-column']};
    grid-row: ${(props) => layoutConfig.HeaderTypes[props.HeaderType].Photo['grid-row']};
    margin-right: ${(props) => layoutConfig.HeaderTypes[props.HeaderType].Photo['margin-right']};
    `
    
    const PhotoStyled = styled.img`
    `;
    
    // padding: ${(props) => props.padding};
    // margin-bottom: ${(props) => layoutConfig[props.layout].Photo['margin-bottom']};
    // padding: ${(props) => layoutConfig[props.layout].Photo['padding']};
    // background-color: ${(props) => layoutConfig[props.layout].Photo['background-color']};