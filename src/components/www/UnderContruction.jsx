import React from 'react'

export default function UnderContruction() {
    return (
        <div>
            <div style={styles.centerStyle}>
                <b>Under Construction</b>
            </div>
        </div>
    )
}


const styles ={
    centerStyle:{
        textAlign:'center',
        padding:5,
        color:'#fff',
        border: '1px solid #416294',
        backgroundColor: '#416294'
    }
}