import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Timeline from "./Timeline";



storiesOf("Timeline", module)
    .add("with text", () => {

        //todo import real data and feed it here? maybe look into best practices
        enum OrderStatus {
            White = "White Belt",
            Blue = "Blue Belt",
            Purple = "Purple Belt",
            Brown = "Brown Belt",
            Black = "Black Belt"
        }

        const orderStatus = "Blue"

       return (
            <Timeline
                name="Order"
                currentStatus={OrderStatus[orderStatus]}
                statuses={Object.values(OrderStatus)}
            //excludeStatuses={[OrderStatus.rejected]} //<-- TODO still need to finish this
            />
        )
    })
    