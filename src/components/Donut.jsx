import React from 'react';
import DonutChart from 'react-minimal-pie-chart';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

let Donut = (props) => {
    return (
        <div style={{ margin: "auto", padding: "10px", width:"25vw" }}>
            <ReactMinimalPieChart
                animate={true}
                animationDuration={600}
                animationEasing="ease-out"
                cx={50}
                cy={50}
                data={[
                    {
                        color: '#7DF9FF',
                        value: props.amount
                    }
                ]}
                label
                labelPosition={0}
                labelStyle={{
                    fontFamily: 'sans-serif',
                    fontSize: '25px'
                }}
                lengthAngle={360}
                lineWidth={10}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={0}
                radius={50}
                rounded={true}
                startAngle={270}
                totalValue={100}
                viewBoxSize={[
                    100,
                    100
                ]}
            />
        </div>
    );
};

export default Donut;