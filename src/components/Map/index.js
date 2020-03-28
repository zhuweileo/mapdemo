import React, {useEffect} from "react";

const T = window.T;

export let mapInstance = null;
export default function (props) {
    const {onload} = props;
    
    useEffect(function () {
        const zoom = 5;
        mapInstance = new T.Map('map');
        mapInstance.centerAndZoom(new T.LngLat(116.40769, 39.89945), zoom);
        onload()
    }, []);
    
    return (
        <div id={'map'}></div>
    )
}
