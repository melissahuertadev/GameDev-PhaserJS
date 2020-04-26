// Tutorial screen
class TutorialScene extends Phaser.Scene {
    constructor() {
      super({key: 'TutorialScene'})
    }
  
    preload() {
      this.load.image('Shake', 'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/fastfoodie/art/Shake.png');
      this.load.image('Fries', 'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/fastfoodie/art/Fries.png');
      this.load.image('Burger', 'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/fastfoodie/art/Burger.png');
    }
  
    create() {
      gameState.cam = this.cameras.main;
  
      // Instructions title + description
      this.add.text(gameState.cam.midPoint.x, 48, 'Instructions', { fontSize: '48px', fill: '#000000' }).setOrigin(0.5);
      this.add.text(gameState.cam.midPoint.x, 128, 'Feed customers to get a 5-star rating! But don\'t leave them too full OR too hungry, else you\'ll lose stars.', { fontSize: '24px', fill: '#555555', wordWrap: { width: 800 }}).setOrigin(0.5, 0).setLineSpacing(10);
  
      // Buttons
      let instructionTextBurger = this.add.text(256, 300, 'A: Make a burger (5 hunger points)', { fontSize: '30px', fill: '#000000' }).setOrigin(0, 0.5);
      this.add.sprite(instructionTextBurger.x - 24, instructionTextBurger.y, 'Burger').setOrigin(1, 0.5).setScale(0.5);
  
      let instructionTextFries = this.add.text(instructionTextBurger.x, instructionTextBurger.y + 96, 'S: Make fries (3 hunger points)', { fontSize: '30px', fill: '#000000' }).setOrigin(0, 0.5);
      this.add.sprite(instructionTextBurger.x - 24, instructionTextFries.y, 'Fries').setOrigin(1, 0.5).setScale(0.5);
  
      let instructionTextShake = this.add.text(instructionTextBurger.x, instructionTextFries.y + 96, 'D: Make a shake (1 hunger point)', { fontSize: '30px', fill: '#000000' }).setOrigin(0, 0.5);
      this.add.sprite(instructionTextBurger.x - 24, instructionTextShake.y, 'Shake').setOrigin(1, 0.5).setScale(0.5);
  
      let instructionTextServe = this.add.text(instructionTextBurger.x, instructionTextShake.y + 96, 'Enter: Serve food', { fontSize: '30px', fill: '#000000' }).setOrigin(0, 0.5);
  
      // Instructions image
  
      // Prompt to play the game
      this.add.text(gameState.cam.midPoint.x, instructionTextServe.y + 128, 'Press enter to play', { fontSize: '24px', fill: '#555555' }).setOrigin(0.5);
  
      // Creates keyboard keys
      gameState.keys =  {};
  
      // Enter button
      gameState.keys.Enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
  
    update() {
      // Press Enter to start the game
      if (Phaser.Input.Keyboard.JustDown(gameState.keys.Enter)) {
        this.scene.stop('TutorialScene');
        this.scene.start('GameScene');
      }
    }
  }