(function() {
  console.log('circles');
    var renderer = PIXI.autoDetectRenderer(
        1400, 700, {
        antialias: true
      });
    document.body.appendChild(renderer.view);


    //full view testing

    // renderer.view.style.position = "absolute";
    // renderer.view.style.display = "block";
    // renderer.view.style.width = window.innerWidth + "px";
    // renderer.view.style.height = window.innerHeight + "px";

    var stage = new PIXI.Container();

    // Render a circle to a texture
    var texture = new PIXI.RenderTexture(renderer, 25, 25);
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0x44FFFF);
    graphics.drawCircle(12, 12, 12);
    graphics.endFill();
    texture.render(graphics);

    //Create some sprites
    for(var i=0; i<10; i++) {
      var s = new PIXI.Sprite(texture);
      s.position.x = Math.random() * renderer.width;
      s.position.y = Math.random() * renderer.height;
      stage.addChild(s);
    }
    renderer.render(stage);

      PIXI.utils.sayHello(type);
})();
