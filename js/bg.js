particlesJS("particles-js", {
  particles: {
    number: {
      value: 58,
      density: { enable: false, value_area: 561.194221302933 },
    },
    color: { value: "#3c383c" },
    shape: {
      type: "circle",
      stroke: { width: 1, color: "#1e1c1c" },
      polygon: { nb_sides: 6 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 4.008530152163807,
      random: true,
      anim: {
        enable: true,
        speed: 53.59709601188878,
        size_min: 12.993235396821524,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 432.92125643369116,
      color: "#3c3838",
      opacity: 1,
      width: 2.886141709557941,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 881.8766334760375, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "remove" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
