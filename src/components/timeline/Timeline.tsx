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

    const finalStatus = statuses.pop();

    return (
        <div className="timeline-main">
            <span className="header">{name}</span>
            <div className="timeline-container">


                {statuses.map(status => {

                    return (
                        <div className="status-container">
                            <span className="circle complete">
                                <span className="label">{status}</span>
                            </span>

                            <span className="line"></span>
                        </div>
                    )

                })}

                <span className="circle complete">
                    <span className="label">{finalStatus}</span>
                </span>

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
