import * as Phaser from 'phaser';

export default class CustomButton extends Phaser.GameObjects.Container {
  private readonly overImage: Phaser.GameObjects.Image;

  private readonly hoverImage: Phaser.GameObjects.Image;

  private readonly textBtn: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene, x: number, y: number,
    text: string) {
    super(scene, x, y);

    this.hoverImage = scene.add.image(0, 0, 'btnActive');
    this.overImage = scene.add.image(0, 0, 'btnNoActive');
    this.textBtn = scene.add.text(0, 0, text).setOrigin(0.5);

    this.add(this.hoverImage);
    this.add(this.overImage);
    this.add(this.textBtn);

    this.hoverImage.setVisible(false);

    this.setSize(this.hoverImage.width, this.hoverImage.height);

    this.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
        this.overImage.setVisible(false);
        this.hoverImage.setVisible(true);
      })
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
        this.hoverImage.setVisible(false);
        this.overImage.setVisible(true);
      });
  }
}
