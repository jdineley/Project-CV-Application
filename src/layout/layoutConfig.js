
const layoutConfig = {
    HeaderTypes: {
        Header1: {
            Photo: false,
            Personal: false,
            NameWrapper: {
                'grid-column': '1/-1',
                'grid-row': '1/3'
            },
            TitleWrapper: {
                'grid-column': '1/-1',
                'grid-row': '3/4'
            }
        },
        Header2: {
            Photo: {
                'grid-column': '1/3',
                'grid-row': '1/4',
                'margin-right': '20px'
            },
            Personal: {
                'grid-column': '3/-1',
                'grid-row': '3/4'
            },
            NameWrapper: {
                'grid-column': '3/-1',
                'grid-row': '1/2'
            },
            TitleWrapper: {
                'grid-column': '3/-1',
                'grid-row': '2/3'
            }
        },
        Header3: {
            Photo: {
                'grid-column': '-3/-1',
                'grid-row': '1/4'
            },
            Personal: {
                'grid-column': '1/-3',
                'grid-row': '3/4'
            },
            NameWrapper: {
                'grid-column': '1/-3',
                'grid-row': '1/2'
            },
            TitleWrapper: {
                'grid-column': '1/-3',
                'grid-row': '2/3'
            }
        }
    },
    layoutComponents: {
        style1: {
            Header: 'Header1',
            SideBar: true
        },
        style2: {
            Header: 'Header2',
            SideBar: false
        },
        style3: {
            Header: 'Header1',
            SideBar: true
        },
        style4: {
            Header: 'Header3',
            SideBar: false
        }
    },
    layoutStyles: {
        style1: {
            HeaderWrapper: {
                'grid-column': '1/-1',
                'grid-row': '1/2'
            },
            SideBarWrapper: {
                'grid-column': '-4/-1',
                'grid-row': '2/-1'
            },
            ContentWrapper: {
                'grid-column': '1/-4',
                'grid-row': '2/-1'
            }
        },
        style2: {
            HeaderWrapper: {
                'grid-column': '1/-1',
                'grid-row': '1/2'
            },
            ContentWrapper: {
                'grid-column': '1/-1',
                'grid-row': '2/-1'
            },
            PersonalWrapper: {
                'grid-column': '3/-1',
                'grid-row': '3/-1',
                'display': 'flex'
            }
        },
        style3: {
            HeaderWrapper: {
                'grid-column': '1/-1',
                'grid-row': '1/2'
            },
            SideBarWrapper: {
                'grid-column': '1/4',
                'grid-row': '2/-1'
            },
            ContentWrapper: {
                'grid-column': '4/-1',
                'grid-row': '2/-1'
            }
        },
        style4: {
            HeaderWrapper: {
                'grid-column': '1/-1',
                'grid-row': '1/2'
            },
            ContentWrapper: {
                'grid-column': '1/-1',
                'grid-row': '2/-1'
            },
            PersonalWrapper: {
                'grid-column': '1/-3',
                'grid-row': '3/-1',
                'display': 'flex'
            }
        }
    }
}

export default layoutConfig