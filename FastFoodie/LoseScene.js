// Lose screen
class LoseScene extends Phaser.Scene {
    constructor() {
      super({key: 'LoseScene'})
    }
  
    preload() {
      // Preload screen
      const baseURL = 'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/fastfoodie/';
      this.load.image('lose', `${baseURL}art/lose_screen.png`);
  
      // Preload song
      this.load.audio('loseTheme', [
          'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/fastfoodie/audio/music/4-loseTheme.ogg',
          'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/fastfoodie/audio/music/4-loseTheme.mp3'
      ]); // Credit: "Pixel Song #18" by hmmm101: https://freesound.org/people/hmmm101
    }
  
    create() {
      // Stop, reassign, and play the new music
      // gameState.currentMusic.stop();
      gameState.currentMusic = this.sound.add('loseTheme');
      gameState.currentMusic.play({ loop: true });
  
      // Lose screen
      this.add.image(gameState.cam.midPoint.x, gameState.cam.midPoint.y, 'lose').setOrigin(0.5).setScale(0.5);
  
      // Score text goes here
  
      // Prompt
      this.add.text(gameState.cam.midPoint.x, gameState.cam.midPoint.y + 300, 'Press enter to play again', { fontSize: '30px', fill: '#ffffff' }).setOrigin(0.5);
  
      // Define enter key again
      gameState.keys.Enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
  
    update() {
      // Press Enter to start the game
      if (Phaser.Input.Keyboard.JustDown(gameState.keys.Enter)) {
        this.scene.stop('LoseScene');
        this.scene.start('TutorialScene');
      }
    }
  }