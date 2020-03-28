import React from "react";
import {connect} from 'react-redux'
import {clearCluster, addCluster, addCarLine} from "../../global";

function InfoContent(props) {
    const {messages, map, global} = props;

    function onClick() {
        clearCluster();
        addCarLine();
        global.setState({ showVideoActions: true })
    }
    return (
        <div>
            {
                messages.map( (m, index) => {
                    if(m.display === 'inline') {
                        return <span key={index}>{m.name}: {m.value}</span>
                    } else {
                        return <p key={index}>{m.name}: {m.value}</p>
                    }
                })
            }
            <div>
                <button onClick={onClick}>轨迹回放</button>
            </div>
        </div>
    )
}
function mapDispatch({global}) {
    return {
        global
    }
}

export default connect(null, mapDispatch)(InfoContent)
