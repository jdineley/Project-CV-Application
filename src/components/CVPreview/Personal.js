import styled from "styled-components"
import layoutStyles from "../../layout/layout"
import emailIcon from "../../assets/envelope-square-solid.svg"
import telIcon from "../../assets/phone-square-solid.svg"
import mapMarkerIcon from "../../assets/map-marker-alt-solid.svg"

export default function Personal({ layout, personalInfo }) {
    const { email, address, phoneNumber} = personalInfo
    return (
        <PersonalWrapper layout={layout}>
            <PersonalInfoSection layout={layout}><Icon src={emailIcon} alt="email"/>{email}</PersonalInfoSection>
            {layout === 'layout1' && '•'}
            <PersonalInfoSection layout={layout}><Icon src={telIcon} alt="phone"/>{phoneNumber}</PersonalInfoSection>
            {layout === 'layout1' && '•'}
            <PersonalInfoSection layout={layout}><Icon src={mapMarkerIcon} alt="address"/>{address}</PersonalInfoSection>
        </PersonalWrapper>
    )
}


const PersonalWrapper = styled.div`
    display: ${(props) => layoutStyles[props.layout].PersonalWrapper['display']};
    align-items: center;
    gap: 20px;
    font-size: 1.2rem;
`

const PersonalInfoSection = styled.section`
    display: flex;
    gap: 10px;
    margin-bottom: ${(props) => layoutStyles[props.layout].PersonalInfoSection['margin-bottom']};
`

const Icon = styled.img`
    width: 14px;
`