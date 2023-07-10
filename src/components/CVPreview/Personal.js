import styled from "styled-components"
import layoutConfig from "../../layout/layoutConfig"
import emailIcon from "../../assets/envelope-square-solid.svg"
import telIcon from "../../assets/phone-square-solid.svg"
import mapMarkerIcon from "../../assets/map-marker-alt-solid.svg"

export default function Personal({ layout, personalInfo }) {
    const { email, address, phoneNumber} = personalInfo
    console.log(layoutConfig.layoutComponents[layout])

    const isPartOfSideBar = layoutConfig.layoutComponents[layout].SideBar

    return (
        <PersonalWrapper layout={layout} isPartOfSideBar={isPartOfSideBar}>
            <PersonalInfoSection layout={layout} isPartOfSideBar={isPartOfSideBar}><Icon src={emailIcon} alt="email"/>{email}</PersonalInfoSection>
            {!isPartOfSideBar  && '•'}
            <PersonalInfoSection layout={layout} isPartOfSideBar={isPartOfSideBar}><Icon src={telIcon} alt="phone"/>{phoneNumber}</PersonalInfoSection>
            {!isPartOfSideBar && '•'}
            <PersonalInfoSection layout={layout} isPartOfSideBar={isPartOfSideBar}><Icon src={mapMarkerIcon} alt="address"/>{address}</PersonalInfoSection>
        </PersonalWrapper>
    )
}


const PersonalWrapper = styled.div`
grid-column: ${(props) => !props.isPartOfSideBar && layoutConfig.layoutStyles[props.layout].PersonalWrapper['grid-column']};
grid-row: ${(props) => !props.isPartOfSideBar && layoutConfig.layoutStyles[props.layout].PersonalWrapper['grid-row']};
align-items: center;
gap: 20px;
font-size: 1.2rem;
display: ${(props) => !props.isPartOfSideBar && layoutConfig.layoutStyles[props.layout].PersonalWrapper['display']};

`

const PersonalInfoSection = styled.section`
display: flex;
gap: 10px;
margin-bottom: ${(props) => props.isPartOfSideBar && '20px'};
`

const Icon = styled.img`
width: 14px;
`
// display: ${(props) => layoutConfig[props.layout].PersonalWrapper['display']};
// margin-bottom: ${(props) => layoutStyles[props.layout].PersonalInfoSection['margin-bottom']};