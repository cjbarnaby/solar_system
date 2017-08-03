var system = {
  bodies: {
    sun: {
      distanceEr: 0,
      radiusEr: 109
    },
    mercury: {
      distanceEr: 9157.62,
      radiusEr: 0.38
    },
    venus: {
      distanceEr: 16906.37,
      radiusEr: 0.95
    },
    earth: {
      distanceEr: 23481.07,
      radiusEr: 1
    },
    mars: {
      distanceEr: 35221.60,
      radiusEr: 0.53
    },
    jupiter: {
      distanceEr: 122101.54,
      radiusEr: 11
    },
    saturn: {
      distanceEr: 223070.13,
      radiusEr: 9
    },
    uranus: {
      distanceEr: 450836.46,
      radiusEr: 4
    },
    neptune: {
      distanceEr: 706780.08,
      radiusEr: 4
    },
    pluto: {
      distanceEr: 927502.10,
      radiusEr: 0.18
    }
  },
  maths: {
    erToAu: function(er) {
      return er / 23481.0658766;
    },
    auToEr: function(au) {
      return Number((au * 23481.0658766).toFixed(2));
    }
  }

};
