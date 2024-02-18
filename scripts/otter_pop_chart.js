const years = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2022, 2023
];

const totalPopulation = [
    17, 16, 12, 11, 14, 13, 16, 16, 14, 21,
    23, 26, 27, 38, 31, 25, 41, 30, 25, 33,
    45, 50, 58, 62, 68, 61, 104, 81, 95, 121,
    121, 146
];

const ctx = document.getElementById('otter_population_chart').getContext('2d');
const pop_chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
            label: 'Sea Otter Population in California',
            data: totalPopulation,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
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
