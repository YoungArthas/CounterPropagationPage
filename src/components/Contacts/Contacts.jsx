import styled from "styled-components";
import React from 'react'
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat:50.42795680029026,
    lng:30.540345940486677
};
const Contacts = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAAsR9qnK0tfMgt2qQoTXVi1Iqdqs9O3Ic"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return(
        <ContactsContainer>
            <h1 id={'contacts'} style={{padding:'20px 0'}}>Контакти</h1>
            <div className={'block'}>
                <div className={'left_part'}>
                    <h1>Адреса</h1>
                    <p>вул. Князів Озтроських 36/2</p>
                    <h1>Номер телефону</h1>
                    <p>+380683452532</p>
                    <h1>Електронна пошта</h1>
                    <p>mitiv@viti.edu.ua</p>
                </div>
                <div className={'right_part'}>
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    ) : <></>}
                </div>
            </div>
        </ContactsContainer>
    )
}

const ContactsContainer = styled.div`
  padding:40px 0;
  color: white;
  h1{
    text-align: center;
  }
  .block{
    display: flex;
    justify-content: space-between;
    padding: 0 110px;
    align-items: center;
    text-align: center;
    .left_part{
      padding-left: 100px;
    }
    .right_part{
      width: 50%;
    }
  }
 
`

export default Contacts