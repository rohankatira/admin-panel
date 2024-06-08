$("#calender-main,#google,#profile,#table,#login,#register,#logout").hide();

$(".dashbord>button").on("click",function(){
    $("#Dashbord,#calender-main,#google,#profile,#table,#login,#register,#logout").hide();
    $($(this).attr("for")).show();
    
})

// counter.js
$(".counter").counter({
    autoStart:true,
    duration: 5000,
    countFrom: 1,
    countTo:350897

});
// chart-one
var options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Sales value',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-one"), options);
  chart.render();

  // chart-2

  var options = {
    series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
    chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    text: 'Total order',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#444'
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-2"), options);
  chart.render();


  // -------------- sidebar-nav ----------------------

  $(".bx-menu").on("click",function(){
     $("#slider").toggle();
  })

  $(".bx-menu-alt-left").hide()
  
  // ------------------- media - query ----------------

  if(visualViewport.width <= 600){
    $(".bx-menu").hide()
    $(".bx-menu-alt-left").show()
    $("#slider").hide()
    $(".bx-menu-alt-left").on("click",function(){
      $("#slider").css("width","200px");
      $("#slider").css("position","absolute");
      $("#slider").css("z-index","20");
      $("#slider").toggle();
   })

  }




  var calendarInstance1 = new calendarJs( "calendar", {
    manualEditingEnabled: true
    
  } );