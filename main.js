


// var system = {
//   bodies: {
//     sun: {
//       distanceEr: 0,
//       radiusEr: 109
//     },
//     mercury: {
//       distanceEr: 9157.62,
//       radiusEr: 0.38
//     },
//     venus: {
//       distanceEr: 16906.37,
//       radiusEr: 0.95
//     },
//     earth: {
//       distanceEr: 23481.07,
//       radiusEr: 1
//     },
//     mars: {
//       distanceEr: 35221.60,
//       radiusEr: 0.53
//     },
//     jupiter: {
//       distanceEr: 122101.54,
//       radiusEr: 11
//     },
//     saturn: {
//       distanceEr: 223070.13,
//       radiusEr: 9
//     },
//     uranus: {
//       distanceEr: 450836.46,
//       radiusEr: 4
//     },
//     neptune: {
//       distanceEr: 706780.08,
//       radiusEr: 4
//     },
//     pluto: {
//       distanceEr: 927502.10,
//       radiusEr: 0.18
//     }
//   },
//   maths: {
//     erToAu: function(er) {
//       return er / 23481.0658766;
//     },
//     auToEr: function(au) {
//       return Number((au * 23481.0658766).toFixed(2));
//     }
//   }
//
// };

document.addEventListener("DOMContentLoaded", function() {

  var getCoordinates = function(outerRadius, innerRadius) {
    var r1 = outerRadius;
    var r1Squared = Math.pow(r1, 2);
    var r2 = innerRadius;
    var r2Squared = Math.pow(r2, 2);
    var theta = Math.round(360 * Math.random());

    var distance = Math.sqrt(Math.random()*(r1Squared - r2Squared) + r2Squared);

    var x = Math.round(distance * Math.cos(theta)) / 2;
    var y = Math.round(distance * Math.sin(theta)) / 2;

    return [x,y];
  };

  var getSize = function() {
    return Math.ceil(Math.random() * 2);
  };

  var getOpacity = function() {
    return Math.random();
  };

  var plotAsteroids = function(obj) {
    var name = Object.keys(obj)[0];
    var number = obj[name];
    var field = document.querySelector(".asteroid_belt");
    var group = document.createElement("div");
    group.className = name;

    for (var i = 0; i < number; i++) {
      var dot = document.createElement("div");
      dot.className = "asteroid";
      var coordinates = getCoordinates(500, 300);
      var size = getSize();
      var opacity = getOpacity();
      dot.style.top = coordinates[0] + "px";
      dot.style.left = coordinates[1] + "px";
      dot.style.width = size + "px";
      dot.style.height = size + "px";
      dot.style.opacity = opacity;
      group.appendChild(dot);
    }
    field.appendChild(group);
  };

  var asteroidGroups = [
    {
      slow: 500
    },
    {
      medium: 200
    },
    {
      fast: 100
    }
  ];

  var createAsteroids = function() {
    for (var i = 0; i < asteroidGroups.length; i++) {
      plotAsteroids(asteroidGroups[i]);
    }
  };

  createAsteroids();
});
