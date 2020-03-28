import React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import InfoContent from "../components/InfoContent";
import {mapInstance} from "../components/Map";
import {store} from "../index";

const T = window.T;

let cluster = null;
let infoWin = new T.InfoWindow();
let markers = []

export function createMarkers() {
    for (let i = 0; i < 20000; i++) {
        const messages = [
            {
                name: '集装箱号',
                value: 'TBJU9053970',
            },
            {
                name: '设备编号',
                value: '0000121901105562',
            },
            {
                name: '电压',
                value: '3630mV',
                display: 'inline',
            },
            {
                name: '电量',
                value: '98%',
                display: 'inline',
            },
            {
                name: '定位方式',
                value: '卫星定位',
            },
            {
                name: '网络类型',
                value: '4G',
            },
            {
                name: '安装日期',
                value: '2019-12-12',
            },
            {
                name: '所在国家',
                value: '中国',
            },
            {
                name: '海拔',
                value: '118米',
            },
            {
                name: '定位时间',
                value: '2020-03-28 09:46:43',
            },
        ]
        const marker = new T.Marker(new T.LngLat(Math.random() * 40 + 85, Math.random() * 30 + 21), {title: i, name: `我是${i}`});
        const el = document.createElement('div');
        marker.addEventListener('click',function (e) {
            render(
                <Provider store={store}>
                    <InfoContent messages={messages} map={mapInstance}/>
                </Provider>,
                el
            );
            infoWin.setContent(el);
            this.openInfoWindow(infoWin)
        });
        markers.push(marker);
    }
}

export function addCluster() {
    cluster = new T.MarkerClusterer(mapInstance, {markers});
}

export function clearCluster() {
    if(cluster) {
        cluster.clearMarkers();
        infoWin.closeInfoWindow();
    }
}