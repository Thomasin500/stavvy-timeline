import React from 'react';
import { render } from '@testing-library/react';
import Timeline from './Timeline';

enum OrderStatus {
    White = "White Belt",
    Blue = "Blue Belt",
    Purple = "Purple Belt",
    Brown = "Brown Belt",
    Black = "Black Belt"
}

it('renders a basic timeline', () => {

    const rejected = ["Blue Belt"];
    const orderStatus = "Purple";
    const headerName = "Jiu Jitsu Belts";

    const { getByText, getAllByTestId } = render(<Timeline
        name={headerName}
        currentStatus={OrderStatus[orderStatus]}
        statuses={Object.values(OrderStatus)}
        excludeStatuses={rejected}
    />);

    const enumValues = Object.values(OrderStatus);

    const circles = getAllByTestId('circle');
    const lines = getAllByTestId('line');
    const labels = getAllByTestId('label');

    enumValues.forEach(val => {
        expect(val).toEqual(getByText(val).innerHTML)
    });

    expect(labels.length).toEqual(enumValues.length);
    expect(circles.length).toEqual(enumValues.length);
    expect(lines.length).toEqual(enumValues.length - 1);
    expect(getByText(headerName)).toBeTruthy();
});

it('renders a timeline with an excluded status', () => {

    const rejected = ["Purple Belt"];
    const orderStatus = "Purple";
    const headerName = "Jiu Jitsu Belts";

    const { getByText, queryByTestId } = render(<Timeline
        name={headerName}
        currentStatus={OrderStatus[orderStatus]}
        statuses={Object.values(OrderStatus)}
        excludeStatuses={rejected}
    />);

    const expectedText = 'This order is currently in a Purple Belt state.';
    expect(getByText(expectedText)).toBeTruthy();

    expect(queryByTestId('circle')).toBeNull()
});
