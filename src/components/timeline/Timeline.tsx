import * as React from 'react';
import "./timeline.css"

//I think this is typescript stuff?
//TODO make sure there is full default props and other type scripty stuff
export interface ITimelineProps {
    name: string,
    currentStatus: string,
    statuses: string[]
}

const Timeline: React.SFC<ITimelineProps> = ({ name, currentStatus, statuses }) => (
    <div className="timeline-main">
        <span className="header">{name}</span>
        <div className="timeline-container">
            <span className="circle complete">
                <span className="label">hiii</span>
            </span>

            <span className="line"></span>

            <span className="circle complete">
                <span className="label">There is a thing</span>
            </span>

            <span className="line"></span>

            <span className="circle current">
                <span className="label">This is a really long entry, hopefully trhings wont be this long but you never know</span>
            </span>

            <span className="line"></span>

            <span className="circle incomplete">
                <span className="label">ABC 123</span>
            </span>

            <span className="line"></span>

            <span className="circle incomplete">
                <span className="label">Dragon Ball Z is a thing</span>
            </span>
        </div>
    </div>
);

Timeline.defaultProps = {
    name: "No Name Provided",
    currentStatus: "",
    statuses: []
};

export default Timeline;
