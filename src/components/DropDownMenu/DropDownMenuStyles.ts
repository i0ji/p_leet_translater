const midGrey = '#797777'
const leadTurq = 'rgba(0, 255, 255, 0.5)';


export const DropDownMenuStyles = {
    container() {
        return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            height: '30%',
            border: 'none',
            color: 'black',
            transition: 'all 1s ease-in-out',
            overflow: 'hidden',
        };
    },
    control(styles: object) {
        return {
            ...styles,
            '&:hover': {
                border: 'none',
                backgroundColor: leadTurq,
            },
            '&:active': {
                border: 'none',
                backgroundColor: leadTurq,
            },
            backgroundColor: midGrey,
            boxShadow: 'none',
            borderRadius: '15px',
            width: '180%',
            height: '90%',
            border: 'none',
            textAlign: 'center',
        };
    },
    option() {
        return {
            width: '90%',
            borderRadius: '15px',
            padding: '3px',
            display: 'flex',
            justifyContent: 'center',
            margin: '10px 0',
            transition: 'all .5s ease-in-out',
            '&:hover': {
                boxShadow: '1px 1px 2px rgba(0, 255, 255, 0.5), 0px 2px 4px rgba(0, 255, 255, 0.5), 0px 4px 8px rgba(0, 255, 255, 0.5)',
                transform: 'scale(1.04)',
                backgroundColor: "rgba(0, 255, 255, 0.5)"
            }
        };
    },
    menu() {
        return {
            backgroundColor: midGrey,
            borderRadius: '20px',
            texAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
        };
    },
    menuList() {
        return {
            width: '100%',
            borderRadius: '20px',
            padding: '5px 10px',
            border: '3px solid #333',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            flexFlow: 'column'
        };
    },
    menuPortal(styles: object) {
        return {
            ...styles,
            top: '38%',
            position: 'fixed',
            borderRadius: '50px',
            boxShadow: 'none',
        };
    },
    indicatorSeparator() {
        return {
            display: 'none',
        };
    },
    indicatorsContainer() {
        return {
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all .4s ease-in-out',
            '&:hover': {
                backgroundColor: 'transparent',
                transform: 'scale(2.02)',
            }
        };
    }
}