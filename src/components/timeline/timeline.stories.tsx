import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Timeline from "./Timeline";

storiesOf("Timeline", module)
    .add("with short text", () => {

        enum OrderStatus {
            White = "White Belt",
            Blue = "Blue Belt",
            Purple = "Purple Belt",
            Brown = "Brown Belt",
            Black = "Black Belt"
        }

        const rejected = ["Blue Belt"];
        const orderStatus = "Purple";

       return (
            <Timeline
                name="Jiu Jitsu Belts"
                currentStatus={OrderStatus[orderStatus]}
                statuses={Object.values(OrderStatus)}
                excludeStatuses={rejected}
            />
        )
    })
    .add("with long text", () => {

        enum OrderStatus {
            White = "White Belt with a little bit of length",
            Blue = "Blue Belt highlights",
            Purple = `Purple Belt is the best belt`,
            Brown = "Brown Belt",
            Black = `Black Belt is the best belt because I need text, lots and lots of text to make space`
        }

        const rejected = ["Blue Belt"];
        const orderStatus = "Blue";

        return (
            <Timeline
                name="Jiu Jitsu Belts"
                currentStatus={OrderStatus[orderStatus]}
                statuses={Object.values(OrderStatus)}
                excludeStatuses={rejected}
            />
        )
    })
    .add("with current status excluded", () => {

        enum OrderStatus {
            White = "White Belt",
            Blue = "Blue Belt",
            Purple = "Purple Belt",
            Brown = "Brown Belt",
            Black = "Black Belt"
        }

        const rejected = ["Purple Belt"];
        const orderStatus = "Purple";

        return (
            <Timeline
                name="Order"
                currentStatus={OrderStatus[orderStatus]}
                statuses={Object.values(OrderStatus)}
                excludeStatuses={rejected}
            />
        )
    })
    