const moonPath = "M14 30C14 46.5685 30 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C30 0 14 13.4315 14 30Z";
const sunPath = "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z";
const DarkMode = document.querySelector("#DarkMode");
let toggle = false;

DarkMode.addEventListener('click', () => {
  const timeline = anime.timeline ({
      duration: 700,
      easing: "easeInOutExpo"
  });
  timeline.add({
    targets: ".sun",
    d: [{value: toggle ? sunPath : moonPath}]
  })
  .add({
    targets: "#DarkMode",
    rotate: toggle ? 0 : 320
  }, "-= 450")
  .add ({
    targets: "section",
    background: toggle ? "url('sun.jpg')" : "url('moon.jpg')",
  }, "-= 750")
  .add ({
    targets: "h2",
    color: toggle ? "rgb(22,22,22)" : "rgb(222,222,222)"
  }, "-= 750")
  .add ({
    targets: "label",
    color: toggle ? "rgb(22,22,22)" : "rgb(222,222,222)"
  }, "-= 750")
  .add ({
    targets: "input",
    color: toggle ? "rgb(22,22,22)" : "rgb(222,222,222)"
  }, "-= 750")
  .add ({
    targets: "ion-icon",
    color: toggle ? "rgb(22,22,22)" : "rgb(222,222,222)"
  }, "-= 750")
  .add ({
    targets: ".forget",
    color: toggle ? "rgb(22,22,22)" : "rgb(222,222,222)"
  }, "-= 750")
  .add ({
    targets: "a",
    color: toggle ? "rgb(22,22,22)" : "rgb(222,222,222)"
  }, "-= 750")
  .add ({
    targets: ".register",
    color: toggle ? "rgb(22,22,22)" : "rgb(222,222,222)"
  }, "-= 750")
  .add ({
    targets: "p",
    color: toggle ? "rgb(22,22,22)" : "rgb(222,222,222)"
  }, "-= 750")
  .add ({
    targets: "button",
    background: toggle ? "rgb(222,222,222)" : "rgb(55,55,55)",
    color: toggle ? "rgb(22,22,22)" : "rgb(222,222,222)"
  })

  if(!toggle){
    toggle=true;
  }else{
    toggle=false;
  }
});
