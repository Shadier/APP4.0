const COLORS = {
    primary: '#8262e2',
    secondary: '#6d70e0',
    third: '#567fde',
    blue: '#0087ff',
    darkGray: '#555',
    gray: '#999',
    lightGray: '#ededed',
}

const STYLES ={
    margin: 16,
    padding: 16,
    borderRadius: 7,

    button: {
        width: '99%',
        marginHorizontal: 2,
        borderWidth: 0,
        borderColor: '#ededed',
        backgroundColor : '#fff',
        borderRadius: 5,
        elevation: 2,
        marginBottom: 16
    },
    
    textButton : {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: '#0087ff',
        width: '100%',
        fontSize: 16,
    },

    emptyListMessage: {
        textAlign: 'center',
        color: '#999',
        fontSize: 16,
        paddingTop: 40
    }
}
export { STYLES, COLORS };