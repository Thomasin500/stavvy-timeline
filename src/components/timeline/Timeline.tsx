import * as React from 'react';
import "./timeline.css"

export interface IButtonProps {
    children?: React.ReactNode,
    onClick?: (e: any) => void
}


const Timeline: React.SFC<IButtonProps> = (props) => (
    <button onClick={props.onClick} className="timeline-container" >
        {props.children}
    </button>
);

Timeline.defaultProps = {
    children: null,
    onClick: () => {
        console.log('BUTTON CLICK')
    }
};
export default Timeline;