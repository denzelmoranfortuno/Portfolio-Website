/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: ["#3fa9f5", "#6dd5ff", "#1f6cff"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.35,
      random: true
    },
    size: {
      value: 2.4,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#4da3ff",
      opacity: 0.28,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },

  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: false
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 160,
        duration: 0.4
      }
    }
  },

  retina_detect: true
});
