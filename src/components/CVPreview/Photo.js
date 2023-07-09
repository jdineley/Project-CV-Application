import styled from 'styled-components'
import layoutStyles from '../../layout/layout';


export default function Photo({ personalInfo, layout }) {

    return (
        <PhotoWrapper layout={layout}>
            <PhotoStyled src={personalInfo.photo}  />
        </PhotoWrapper>
    )
}

const PhotoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: ${(props) => layoutStyles[props.layout].Photo['grid-column']};
    grid-row: ${(props) => layoutStyles[props.layout].Photo['grid-row']};
    margin-bottom: ${(props) => layoutStyles[props.layout].Photo['margin-bottom']};
    padding: ${(props) => layoutStyles[props.layout].Photo['padding']};
    background-color: ${(props) => layoutStyles[props.layout].Photo['background-color']};
`

const PhotoStyled = styled.img`
`;

// padding: ${(props) => props.padding};