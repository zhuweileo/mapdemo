import React from "react";
import {connect} from 'react-redux';
import {addCluster, carTrack} from "../../global";

function VideoActions(props) {
    const {global} = props;

    function goBack() {
        addCluster();
        global.setState({showVideoActions: false});
        carTrack.clear();
    }
    function start() {
        carTrack.start();
    }
    function pause() {
        carTrack.pause();
    }
    function stop() {
        carTrack.stop();
    }
    return (
        <div className={'video-actions'}>
            <button onClick={start}>播放</button>
            <button onClick={pause}>暂停</button>
            <button onClick={stop}>结束</button>
            <button onClick={goBack}>返回</button>
        </div>
    )
}
function mapState({global}) {
    return {
        ...global
    }
}
function mapDispatch({global}) {
    return {
        global
    }
}
export default connect(mapState,mapDispatch)(VideoActions)