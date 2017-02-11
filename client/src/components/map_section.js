import React from 'react';
import {Row, Col} from 'reactstrap';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import ReactMapboxGl from 'react-mapbox-gl';
import DisplayMap from './display_map.js'




export const MapSection = (props) =>{
  return(
    <div id='mapsection'>  
      <Row className='full'>
        <Col className="full" xs="6">
          <DisplayMap
            style='mapbox://styles/mapbox/light-v9'
            containerStyle={{ height: '100%', width: '100%' }}
            accessToken='pk.eyJ1IjoiZ2FydGhkYmVldGxlIiwiYSI6ImNpcHl5emhrdjB5YmxoY25yczF6MHhhc2IifQ.2Ld30uLqcffVv-RUAWk_qQ'/>
        </Col>
      </Row>
    </div>
  )
}
