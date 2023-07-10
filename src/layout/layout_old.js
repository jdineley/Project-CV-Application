import Theme from "../theme/Theme"

const layoutStyles = {
    'default': {
        SideBar: true,
        CVPreviewWrapper: {
            'grid-template-columns': '150mm 60mm',
            'grid-template-rows': '35mm 262mm'
        },
        Photo: {
            'margin-bottom': '2rem',
        },
        CVHeaderWrapper: {
            'display': 'grid',
            'grid-column': '1/-1',
            'grid-row': '1/2'
        },
        PersonalWrapper: {
            'display': 'block'
        },
        ContentWrapper: {
            'grid-column': '1/-3',
            'grid-row': '2/-1'
        },
        SidebarWrapper: {
            'grid-column': '-3/-1',
            'grid-row': '2/-1'
        },
        PersonalInfoSection: {
            'margin-bottom': '20px'
        }
    },
    'layout1': {
        SideBar: false,
        CVPreviewWrapper: {
            'grid-template-columns': 'repeat(10, 1fr)',
            'grid-template-rows': 'repeat(10, 1fr)'
        },
        Photo: {
            'margin-bottom': '0',
            'padding': '0.5rem',
            'background-color': 'auto',
            'grid-column': '1/3',
            'grid-row': '1/2'
        },
        CVHeaderWrapper: {
            'grid-column': '3/-1',
            'grid-row': '1/2',
            'display': 'grid'
        },
        PersonalWrapper: {
            'display': 'flex'
        },
        ContentWrapper: {
            'grid-column': '1 / -1',
            'grid-row': '2 / -1'
        },
        PersonalInfoSection: {
            'margin-bottom': '0'
        }
    },
    'layout2': {
        sideBar: true,
        CVPreviewWrapper: {
            'grid-template-columns': '60mm 150mm',
            'grid-template-rows': '35mm 262mm'
        },
        Photo: {
            'margin-bottom': '2rem',
        },
        CVHeaderWrapper: {
            'display': 'grid',
            'grid-column': '1/-1',
            'grid-row': '1/2'
        },
        PersonalWrapper: {
            'display': 'block'
        },
        ContentWrapper: {
            'grid-column': '3/-1',
            'grid-row': '2/-1'
        },
        SidebarWrapper: {
            'grid-column': '1/3',
            'grid-row': '2/-1'
        },
        PersonalInfoSection: {
            'margin-bottom': '20px'
        }
    },
}

export default layoutStyles


