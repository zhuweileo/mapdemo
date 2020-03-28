import React from "react";
import {connect} from 'react-redux';
import {addCluster} from "../../global";

function VideoActions(props) {
    const {global} = props;
    console.log(props);
    console.log(global);

    function goBack() {
        global.setState({showVideoActions: false});
        addCluster();
        // console.log(document.getElementsByClassName('tdt-marker-icon').length);
    }
    return (
        <div className={'video-actions'}>
            <button>播放</button>
            <button>暂停</button>
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