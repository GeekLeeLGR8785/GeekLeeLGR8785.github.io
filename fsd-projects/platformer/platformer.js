$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(10, 200, 100, 50, "teal"); //done
    createPlatform(300, 300, 100, 50, "#ff0505"); //done
    createPlatform(500, 200, 100, 50, "#ff0000"); //done
    createPlatform(600, 500, 100, 50, "#ff0000"); //done
    createPlatform(800, 400, 100, 50, "#6bd539"); //done
    createPlatform(1000, 300, 100, 30, "#39abd1"); //done
    createPlatform(1300, 200, 100, 50, "#39abd1"); //done
    createPlatform(1200, 250, 20, 700, "#ADD8E6"); //done
    createPlatform(1350, 600, 100, 50, "#ADD8E6"); //done
    // TODO 3 - Create Collectables
    createCollectable("database", 1350, 50);
    createCollectable("steve", 600, 400, 0.9, 0.7);
    createCollectable("diamond", 1300, 400);
    // TODO 4 - Create Cannons
    createCannon("top", 200, 500);
    createCannon("right", 300, 2000);
    createCannon("right", 805, 15)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
