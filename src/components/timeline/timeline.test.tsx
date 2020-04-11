import React from 'react';
import { render } from '@testing-library/react';
import Timeline from './Timeline';

test('renders learn react link', () => {

    enum OrderStatus {
        White = "White Belt",
        Blue = "Blue Belt",
        Purple = "Purple Belt",
        Brown = "Brown Belt",
        Black = "Black Belt"
    }

    const orderStatus = "Purple";

    const { getByText } = render(<Timeline
        name="Order"
        currentStatus={OrderStatus[orderStatus]}
        statuses={Object.values(OrderStatus)}
    //excludeStatuses={[OrderStatus.rejected]} //<-- TODO still need to finish this
    />);
    const linkElement = getByText(/learn react/i);
    expect(true).toBe(true);
});
