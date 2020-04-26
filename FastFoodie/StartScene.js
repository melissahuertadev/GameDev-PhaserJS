// Title screen
class StartScene extends Phaser.Scene {
    constructor() {
      super({ key: 'StartScene' })
    }
  
    preload() {
      // Preload screen
      const baseURL = 'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/fastfoodie/'
      this.load.image('start', `${baseURL}art/start_screen.png`);
      // Preload song
      this.load.audio('introTheme', [
        `${baseURL}audio/music/1-introTheme.ogg`,
        `${baseURL}audio/music/1-introTheme.mp3`
      ]); // Credit: "Happy 8bit Loop 01" by Tristan Lohengrin: https://www.tristanlohengrin.com
    }
  
    create() {
      gameState.currentMusic = this.sound.add('introTheme');
  
      gameState.currentMusic.play({ loop: true });
  
      // Define the main camera so we can use it for easy midpoints, top, and bottom of view
      gameState.cam = this.cameras.main;
  
      // Title screen text
      this.add.image(gameState.cam.midPoint.x, gameState.cam.midPoint.y, 'start').setOrigin(0.5).setScale(0.5)
  
      // Creates keyboard keys
      gameState.keys = {};
  
      // Enter button
      gameState.keys.Enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
  
    update() {
      // Press Enter to start the game
      if (Phaser.Input.Keyboard.JustDown(gameState.keys.Enter)) {
        this.scene.stop('StartScene');
        this.scene.start('TutorialScene');
      }
    }
  }