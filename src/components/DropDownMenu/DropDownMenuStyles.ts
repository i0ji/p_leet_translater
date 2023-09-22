
const leadGrey = '#333';
const midGrey = '#797777'
const leadTurq = 'rgba(0, 255, 255, 0.5)';
const testRed = 'red';

export const DropDownMenuStyles = {
    container: () => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
    }),
    control: (styles: any) => ({
        ...styles,
        backgroundColor: leadTurq,
        width: '100%'
    }),
    option: (styles: any, state: any) => ({
        // backgroundColor: state.isSelected ? leadTurq : midGrey,
        backgroundColor: state.isFocused? leadTurq : midGrey,
        
    }),
}

// export {}