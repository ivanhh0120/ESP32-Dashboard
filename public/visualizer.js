var chart = "";

const loadChart = (_labels, _data) => {
  var ctx = document.getElementById("myChart").getContext("2d");
  chart = new Chart(ctx, {
    //Tipo de gráfica
    type: "line",
    // datos del dataset
    data: {
      labels: _labels,
      datasets: [
        {
          label: "Battery",
          backgrounColor: "rgb(255,255,255,0.8)",
          borderColor: "rgb(255,255,255,0.8)",
          data: _data
        }
      ]
    },
    //Configuración
    options: {}
  });
};
