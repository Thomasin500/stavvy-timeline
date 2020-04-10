import React from 'react';
import './App.css';
import Timeline from "../components/timeline/Timeline";

enum OrderStatus {
    White = "White Belt",
    Blue = "Blue Belt",
    Purple = "Purple Belt",
    Brown = "Brown Belt",
    Black = "Black Belt"
}

//todo create real data here
function App() {
    //todo from email
    //excludeStatus: if currentStatus is one of the exclude statuses render a 
    //component that says "This order is currently in a {currentStatus} state.

    const orderStatus = "Purple";

    return (
        <div className="App">
            <Timeline
                name="Order"
                currentStatus={OrderStatus[orderStatus]}
                statuses={Object.values(OrderStatus)}
                //excludeStatuses={[OrderStatus.rejected]} //<-- TODO still need to finish this
            />
        </div>
    );
}

export default App;
