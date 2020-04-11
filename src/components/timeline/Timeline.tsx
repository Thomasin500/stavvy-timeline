import * as React from 'react';
import "./timeline.css"

//I think this is typescript stuff?
//TODO make sure there is full default props and other type scripty stuff
export interface ITimelineProps {
    name: string,
    currentStatus: string,
    statuses: string[],
    excludeStatuses: string[]
}

const Timeline: React.SFC<ITimelineProps> = ({ name, currentStatus, statuses, excludeStatuses }) => {

    if (excludeStatuses.includes(currentStatus)) {
        return (<div>This order is currently in a {currentStatus} state.</div>)
    }

    let foundCurr = false;

    return (
        <div className="timeline-main">
            <span className="header">{name}</span>
            <div className="timeline-container">

                {statuses.map((status, index) => {

                    console.log(status)

                    //TODO maybe put this in a separate function
                    let lineNode;
                    let lineClassNames = "line ";
                    let cirlceClassNames = "circle ";
                    let labelClassNames = "label ";

                    if (foundCurr) {
                        cirlceClassNames += "circle-incomplete";
                        lineClassNames += "line-incomplete";
                        labelClassNames += "label-incomplete";
                    }
                    else if (status === currentStatus) {
                        foundCurr = true;
                        cirlceClassNames += "circle-current";
                        lineClassNames += "line-incomplete";
                        labelClassNames += "label-current";
                    } else {
                        cirlceClassNames += "circle-complete";
                        lineClassNames += "line-complete";
                        labelClassNames += "label-complete";
                    }

                    if (index !== statuses.length - 1) {
                        lineNode = (<span className={lineClassNames}></span>);
                    }
                  
                    return (
                        <div className="status-container" key={status}>
                            <span className={cirlceClassNames}>
                                <span className={labelClassNames}>{status}</span>
                            </span>
                            {lineNode}
                        </div>
                    )
                })}     
            </div>
        </div>
    )
}

Timeline.defaultProps = {
    name: "No Name Provided",
    currentStatus: "",
    statuses: [],
    excludeStatuses: []
};

export default Timeline;
