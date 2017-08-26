


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

    var distance = Math.sqrt(Math.random()*(r1Squared - r2Squared) + r2Squared) / 2;

    var x = Math.round(distance * Math.cos(theta));
    var y = Math.round(distance * Math.sin(theta));

    return [x,y];
  };

  var getSize = function(maxPixels) {
    return Math.ceil(Math.random() * maxPixels);
  };

  var getOpacity = function(multiplier) {
    multiplier = multiplier || 1;
    return Math.random() * multiplier;
  };

  var plotStars = function(number) {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var height = window.innerHeight;
    var group = document.querySelector(".background");
    for (var i = 0; i < number; i++) {
      var star = document.createElement("div");
      star.className = "asteroid";
      var coordinates = [Math.round(Math.random() * windowHeight), Math.round(Math.random() * windowWidth)];
      var size = getSize(2);
      var opacity = getOpacity(0.4);
      star.style.top = coordinates[0] + "px";
      star.style.left = coordinates[1] + "px";
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.opacity = opacity;
      group.appendChild(star);
    }
  };

  plotStars(1000);

  var plotAsteroids = function(obj, element, innerOrbit, outerOrbit) {
    var name = Object.keys(obj)[0];
    var number = obj[name];
    var field = document.querySelector(element);
    var group = document.createElement("div");
    group.className = name;
    innerOrbitWidth = window.getComputedStyle(document.querySelector("." + innerOrbit)).width.slice(0, -2);
    outerOrbitWidth = window.getComputedStyle(document.querySelector("." + outerOrbit)).width.slice(0, -2);

    for (var i = 0; i < number; i++) {
      var asteroid = document.createElement("div");
      asteroid.className = "asteroid";
      var coordinates = getCoordinates(outerOrbitWidth, innerOrbitWidth);
      var size = getSize(2);
      var opacity = getOpacity();
      asteroid.style.top = coordinates[0] + "px";
      asteroid.style.left = coordinates[1] + "px";
      asteroid.style.width = size + "px";
      asteroid.style.height = size + "px";
      asteroid.style.opacity = opacity;
      group.appendChild(asteroid);
    }
    field.appendChild(group);
  };

  var asteroidFields = {
    asteroidBelt: {
      div: ".asteroid_belt",
      outerOrbit: "jupiter",
      innerOrbit: "mars",
      groups: [
        {
          slow: 500
        },
        {
          medium: 250
        },
        {
          fast: 125
        }
      ]
    },
    kuiperBelt: {
      div: ".kuiper_belt",
      outerOrbit: "system",
      innerOrbit: "neptune",
      groups: [
        {
          slow: 1000
        },
        {
          medium: 5000
        },
        {
          fast: 250
        }
      ]
    }
  };

  var createAsteroidFields = function() {
    for (var field in asteroidFields) {
      createAsteroidGroups(asteroidFields[field]);
    }
  };

  var createAsteroidGroups = function(field) {
    for (var i = 0; i < field.groups.length; i++) {
      var group =  field.groups[i];
      plotAsteroids(group, field.div, field.innerOrbit, field.outerOrbit);
    }
  };


  createAsteroidFields();
});
