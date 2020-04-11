import React from 'react';
import Timeline from "../components/timeline/Timeline";

enum OrderStatus {
    White = "White Belt",
    Blue = "Blue Belt",
    Purple = "Purple Belt",
    Brown = "Brown Belt",
    Black = "Black Belt",
    rejected = "White Belt"
}

//todo create real data here
function App() {
    //todo from email
    //excludeStatus: if currentStatus is one of the exclude statuses render a 
    //component that says "This order is currently in a {currentStatus} state.

    const orderStatus = "Black";

    return (
        <div>
            <Timeline
                name="Order"
                currentStatus={OrderStatus[orderStatus]}
                statuses={Object.values(OrderStatus)}
                excludeStatuses={[OrderStatus.rejected]}
            />
        </div>
    );
}

export default App;
