
const leadGrey = '#333';
const midGrey = '#797777'
const leadTurq = 'rgba(0, 255, 255, 0.5)';
const testRed = 'red';

export const DropDownMenuStyles = {
    container: () => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '30%',
        border: 'none',
        color: 'black',
        transition: 'all 1s ease-in-out',
    }),
    control: (styles: any, state: any) => ({
        ...styles,
        '&:hover': {
            border: 'none',
            backgroundColor: leadTurq,
        },
        '&:active': {
            border: 'none',
            backgroundColor: leadTurq,
        },
        boxShadow: 'none',
        borderRadius: '15px',
        backgroundColor: state.isFocused ? leadTurq : midGrey,
        width: '180%',
        height: '90%',
        border: 'none',
        textAlign: 'center',
    }),
    option: (styles: any, state: any) => ({
        backgroundColor: state.isFocused ? leadTurq : midGrey,
        borderRadius: '15px',
        padding: '3px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid #333',
        margin: '10px 0',
        transition: 'all .5s ease-in-out',
        '&:hover': {
            boxShadow: '1px 1px 2px rgba(0, 255, 255, 0.5), 0px 2px 4px rgba(0, 255, 255, 0.5), 0px 4px 8px rgba(0, 255, 255, 0.5)',
            transform: 'scale(1.02)',
        }

    }),
    menu: () => ({
        backgroundColor: midGrey,
        borderRadius: '20px',

        texAlign: 'center',

    }),
    menuList: () => ({
        borderRadius: '20px',
        padding: '5px 10px',
        border: '3px solid #333',
        backgroundColor: 'transparent',

    }),
    menuPortal: (styles: any, state: any) => ({
        ...styles,
        top: '38%',
        position: 'fixed',
        borderRadius: '50px',
        boxShadow: 'none',
    }),

}


export { }