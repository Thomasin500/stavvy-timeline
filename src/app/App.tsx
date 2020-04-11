import React from 'react';
import Timeline from "../components/timeline/Timeline";

enum OrderStatus {
    White = "White Belt",
    Blue = "Blue Belt",
    Purple = "Purple Belt",
    Brown = "Brown Belt",
    Black = "Black Belt"
}

function App() {
    
    const rejected = ["Blue Belt"];
    const orderStatus = "Black";

    return (
        <div>
            <Timeline
                name="Jiu Jitsu Belts"
                currentStatus={OrderStatus[orderStatus]}
                statuses={Object.values(OrderStatus)}
                excludeStatuses={rejected}
            />
        </div>
    );
}

export default App;
