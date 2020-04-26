/* CONFIG */
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    backgroundColor: "cccccc",
    physics: {
      default: 'arcade',
      arcade: {}
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ StartScene, TutorialScene, GameScene, WinScene, LoseScene]
  };
  
  const game = new Phaser.Game(config);