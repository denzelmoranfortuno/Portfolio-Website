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

particlesJS("particles-js", {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#c6cfdf"   // muted blue-gray (blends with navy + white)
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.25,
      random: true
    },
    size: {
      value: 2.5,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 160,
      color: "#b8c3d9",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
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
        mode: "repulse"   // ✅ matches video behavior
      },
      onclick: {
        enable: false
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 180,
        duration: 0.4
      }
    }
  },
  retina_detect: true
});
