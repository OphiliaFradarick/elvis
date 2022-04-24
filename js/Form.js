class Form {
  constructor() {

    this.playButton = createButton("Play");
    this.titleImg = createImg("assets/IMG-5591.PNG", "game title");

  }

  hide() {

    this.playButton.hide();

  }

  displayContent() {
    this.titleImg.position(width / 2 - 300, 30);
    this.titleImg.class("gameTitle");

    this.playButton.position(windowWidth / 2 - 30, windowHeight / 2 - 50);
    this.playButton.class("customButton")
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.playButton.hide();
      game.update(1)
    })
  }

  display() {

    this.displayContent()
    this.handleMousePressed();

  }

}