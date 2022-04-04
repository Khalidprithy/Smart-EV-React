import React from 'react';
import './Chart.css'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
    {
        name: 'EV Electra',
        month: 'Jan',
        price: 2400,
        sells: 2400,
    },
    {
        name: 'Super Bolt',
        month: 'Feb',
        price: 1398,
        sells: 2210,
    },
    {
        name: 'Bullet EV',
        month: 'Mar',
        price: 9800,
        sells: 8290,
    },
    {
        name: 'EV prime',
        month: 'Api',
        price: 3908,
        sells: 2000,
    },
    {
        name: 'Smart EV',
        month: 'May',
        price: 4800,
        sells: 2181,
    },
    {
        name: 'EV Lite',
        month: 'June',
        price: 3800,
        sells: 2500,
    },
    {
        name: 'EV city',
        month: 'July',
        price: 4300,
        sells: 2100,
    },
];

const data2 = [
    {
        name: 'EV Electra',
        month: 'Jan',
        price: 2400,
        sells: 2500,
    },
    {
        name: 'Super Bolt',
        month: 'Feb',
        price: 2398,
        sells: 2210,
    },
    {
        name: 'Bullet EV',
        month: 'Mar',
        price: 9800,
        sells: 8290,
    },
    {
        name: 'EV prime',
        month: 'Api',
        price: 5908,
        sells: 2000,
    },
    {
        name: 'Smart EV',
        month: 'May',
        price: 4800,
        sells: 5181,
    },
    {
        name: 'EV Lite',
        month: 'June',
        price: 3800,
        sells: 4500,
    },
    {
        name: 'EV city',
        month: 'July',
        price: 5300,
        sells: 3100,
    },
];

const Chart = () => {
    return (
        <div className='charts'>
            <div>
                <LineChart
                    width={400}
                    height={200}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis dataKey='price'></YAxis>
                    <Tooltip></Tooltip>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="sells" stroke="#82ca9d" />

                </LineChart>

            </div>
            <div>
                <BarChart
                    width={400}
                    height={200}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" />
                    <Bar dataKey="sells" fill="#82ca9d" />
                </BarChart>
            </div>
            <div>
                <PieChart width={300} height={300}>
                    <Pie data={data} dataKey="price" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data2} dataKey="sells" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Chart;