import * as React from 'react';
import "./timeline.css"

//I think this is typescript stuff?
//TODO make sure there is full default props and other type scripty stuff
export interface ITimelineProps {
    name: string,
    currentStatus: string,
    statuses: string[]
}

const Timeline: React.SFC<ITimelineProps> = ({ name, currentStatus, statuses }) => {


    let foundCurr = false;

    return (
        <div className="timeline-main">
            <span className="header">{name}</span>
            <div className="timeline-container">


                {statuses.map((status, index) => {

                    let cirlceClassNames = "circle ";

                    if (foundCurr) {
                        cirlceClassNames += "incomplete";
                    }
                    if (status === currentStatus) {
                        foundCurr = true;
                        cirlceClassNames += "current";
                    } else {
                        cirlceClassNames += "complete";
                    }

                    let lineNode;

                    if (index !== statuses.length - 1) {
                        lineNode = (<span className="line"></span>);

                    }

                    return (
                        <div className="status-container">
                            <span className={cirlceClassNames}>
                                <span className="label">{status}</span>
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
    statuses: []
};

export default Timeline;
