// particleground(document.getElementById('contianer'));
document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('contianer'), {
        dotColor: '#66Ff',
        lineColor: '#5cbdaa',
        density: 6000,
        lineWidth: 0.1,
        proximity: 200,
        particleRadius:0.5,
    });
}, false);