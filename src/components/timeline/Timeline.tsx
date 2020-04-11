import * as React from 'react';
import "./timeline.css"

export interface ITimelineProps {
    name: string,
    currentStatus: string,
    statuses: string[],
    excludeStatuses: string[]
}

const Timeline: React.SFC<ITimelineProps> = ({ name, currentStatus, statuses, excludeStatuses }) => {

    if (excludeStatuses.includes(currentStatus)) {
        return (<div className="excluded">This order is currently in a {currentStatus} state.</div>)
    }

    let foundCurr = false;

    return (
        <div data-testid="timeline-main" className="timeline-main">
            <span data-testid="header" className="header">{name}</span>
            <div data-testid="timeline-container" className="timeline-container">

                {statuses.map((status, index) => {

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
                        lineNode = (<span data-testid="line" className={lineClassNames}></span>);
                    }
                  
                    return (
                        <div data-testid="status-container" className="status-container" key={status}>
                            <span data-testid="circle" className={cirlceClassNames}>
                            <span data-testid="label" className={labelClassNames}>{status}</span>
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
