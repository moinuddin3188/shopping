import React, { useMemo } from 'react';
import './DashboardHeader.css';
import { Chart } from 'react-charts';

const DashboardHeader = () => {

    const data = useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            }
        ],
        []
    )

    const axes = useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom', show: false },
            { type: 'linear', position: 'left', show: false }
        ],
        []
    )

    const firstChart = React.useCallback(
        series => ({
            color: 'rgb(241, 83, 110)'
        }), []
    )

    const secondChart = React.useCallback(
        series => ({
            color: 'rgb(61, 165, 244)'
        }), []
    )

    const thirdChart = React.useCallback(
        series => ({
            color: 'rgb(0, 198, 137)'
        }), []
    )

    const fourthChart = React.useCallback(
        series => ({
            color: 'rgb(253, 160, 6)'
        }), []
    )

    return (
        <section className='row mt-3'>
            <div className="col-3 pr-0">
                <div className="count-card">
                    <h2 style={{color: 'rgb(241, 83, 110)'}} >$345</h2>
                    <p>Total Sales</p>
                    <div
                        style={{
                            width: '100%',
                            height: '50px'
                        }}
                    >
                        <Chart data={data} axes={axes} getSeriesStyle={firstChart} />
                    </div>
                </div>
            </div>
            <div className="col-3 pr-0">
                <div className="count-card">
                    <h2 style={{color: 'rgb(61, 165, 244)'}}>$345</h2>
                    <p>Total Sales</p>
                    <div
                        style={{
                            width: '100%',
                            height: '50px'
                        }}
                    >
                        <Chart data={data} axes={axes} getSeriesStyle={secondChart} />
                    </div>
                </div>
            </div>
            <div className="col-3 pr-0">
                <div className="count-card">
                    <h2 style={{color: 'rgb(0, 198, 137)'}}>$345</h2>
                    <p>Total Sales</p>
                    <div
                        style={{
                            width: '100%',
                            height: '50px'
                        }}
                    >
                        <Chart data={data} axes={axes} getSeriesStyle={thirdChart} />
                    </div>
                </div>
            </div>
            <div className="col-3 pr-0">
                <div className="count-card">
                    <h2 style={{color: 'rgb(253, 160, 6)'}}>$345</h2>
                    <p>Total Sales</p>
                    <div
                        style={{
                            width: '100%',
                            height: '50px'
                        }}
                    >
                        <Chart data={data} axes={axes} getSeriesStyle={fourthChart} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardHeader;