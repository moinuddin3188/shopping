import React, { useMemo } from 'react';
import { Chart } from 'react-charts';

const Earning = () => {

    const series = React.useMemo(
        () => ({
            type: 'bar'
        }),
        []
    )

    const data = useMemo(
        () => [
            {
                specialLabel: 'Series 1',
                data: [[0, 3], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                specialLabel: 'Series 2',
                data: [[0, 3], [1, 2], [2, 4], [3, 2], [4, 7]]
            }
        ],
        []
    )

    const axes = useMemo(
        () => [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return (
        <section>
            <div
                style={{
                    width: '100%',
                    height: '263px'
                }}
            >
                <Chart data={data} series={series} axes={axes} />
            </div>
        </section>
    );
};

export default Earning;