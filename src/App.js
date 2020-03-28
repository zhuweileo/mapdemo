import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Map, {mapInstance} from './components/Map';
import VideoActions from "./components/VideoActions";
import {createMarkers, addCluster} from "./global";


function App(props) {
    const {showVideoActions} = props;
    const [mapLoad, setMapLoad] = useState(false);

    useEffect(function () {
        if (!mapLoad) return;
        createMarkers();
        addCluster();
    }, [mapLoad]);


    return (
        <div className="App">
            <Map onload={() => setMapLoad(true)}/>
            {
                showVideoActions ? <VideoActions/> : null
            }
        </div>
    );
}

function mapState({global}) {
    return {
        ...global
    }
}

export default connect(mapState)(App);
