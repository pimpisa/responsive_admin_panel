function progressChart() {
    var data = google.visualization.arrayToDataTable([
        ['Project', 'projects'],
        ['Completed',10],
        ['In progress',7],
        ['Upcoming',  5],
        ]);

        var options = {
          title: 'Project Beta progress',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
}

function expenseChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2011',  1000,      400],
          ['2012',  1170,      460],
          ['2013',  660,       1120],
          ['2014',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }