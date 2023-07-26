import React from 'react';
import ReactDOM from 'react-dom';
import DynamicForm from './DynamicForm';

// ReactDOM.render(DynamicForm, document.getElementById('root'));

const monthChart = document.getElementById('monthChart');
const revenueChart = document.getElementById('revenueChart');

document.getElementById('month-form-submit').addEventListener(('click'), function(evt) {
    evt.preventDefault();
    subCost = document.getElementById('sub-cost')
    console.log(subCost.value);
    const monthForm = new FormData(document.querySelector('#month-form'))
    fetch(('/calculate-income'), {
        method: 'POST',
        body: monthForm
    })
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        console.log(responseJson);

        monthChart.innerHTML = '';
        new Chart(monthChart, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'New Subscriptions',
                    data: responseJson.month_subs,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        revenueChart.innerHTML = '';
        new Chart(revenueChart, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Income',
                    data: responseJson.revenue,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
})

