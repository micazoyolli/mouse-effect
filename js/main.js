// Properties
var p = {
  figures: document.querySelectorAll('#mouseEffect figure'),
  horizontal: true,
  mouseX: 0,
  mouseY: 0,
  vertical: true,
  zone: document.querySelector('#mouseEffect')
};

// Methods
var m = {
  init: function() {
    p.zone.addEventListener('mousemove', m.mouseMovement);

    // Show images in tag figure
    for (var i = 0; i < p.figures.length; i++) {
      p.figures[i].innerHTML = '<img src="img/mouse/level0' + i + '.png">';

      p.figures[i].style.zIndex = -i;
    }

    // After a second, get heigth of image in figure
    setTimeout(function() {
      p.zone.style.height = p.figures[0].childNodes[0].height + "px";
    }, 100);

  },

  mouseMovement: function(mouse) {
    p.mouseX = mouse.offsetX;
    p.mouseY = mouse.offsetY;

    for (var i = 0; i < p.figures.length; i++) {
      if (p.horizontal) {
        p.figures[i].style.left = -p.mouseX / (i * 100 + 150) + "%";
      }

      if (p.vertical) {
        p.figures[i].style.top = -p.mouseY / (i * 100 + 150) + "%";
      }

    }
  }
};

m.init();
