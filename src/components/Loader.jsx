import React from 'react';
import LoaderImage from '../assets/images/icons/loader.svg';

export default function Loader() {
    return (
        <div style={styles.container}>
            <img style={styles.loader} src={LoaderImage} alt="Loader" />
        </div>
    )
}


const styles = {
    loader : {
        width: 90,
    },
    container : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}