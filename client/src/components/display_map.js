import React,{Component} from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import ReactMapboxGl from 'react-mapbox-gl';
import MapboxDraw from 'MapboxDraw';

console.log(MapboxDraw)

class DisplayMap extends Component {

    componentWillMount(){
        this.setState({
            center : [138.6000, -34.9286]
        })
    }

    _polygonClicked = ({ feature }) => {
    console.log('Polygon clicked', feature.geometry.coordinates);
    };

    _onStyleLoad = (map, event) => {
        console.log('map', map, 'event: ', event, this.refs.map)
        const draw = new MapboxDraw();
        console.log(draw);
        map.addControl(draw);
    }

    _onClick = () => {
        this.setState({
            center : [110,23]
        })
    }

    render() {
        return (
        <div className='App'>
            <div className='App-header'>
            </div>
            <ReactMapboxGl
                style={'mapbox://styles/mapbox/streets-v8'}
                center={this.state.center}
                onStyleLoad={this._onStyleLoad}
                zoom={[13]}
                accessToken={this.props.accessToken}
                containerStyle={this.props.containerStyle}
                // onStyleLoad={this._onStyleLoad}
                onClick={this._onClick}
                ref='map'>
            </ReactMapboxGl>
        </div>
    );
    }
}

export default DisplayMap;