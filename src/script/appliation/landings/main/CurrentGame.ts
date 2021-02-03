// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';

export default class CurrentGame {
  public container: ElementBuilder;

  constructor() {
    this.container = new ElementBuilder('div', 'content__gameProp blocks');
    const h2 = new ElementBuilder('h2', '');
    h2.element.innerHTML = 'Game description';
    const race = new ElementBuilder('div', 'DesRace desbtn');
    race.element.innerHTML = 'Race';
    const tetris = new ElementBuilder('div', 'DesTetris desbtn');
    tetris.element.innerHTML = 'Tetris';
    const breakout = new ElementBuilder('div', 'DesBreakout desbtn');
    breakout.element.innerHTML = 'Breakout';
    const space = new ElementBuilder('div', 'DesSpace desbtn');
    space.element.innerHTML = 'Space Attack';
    const flappy = new ElementBuilder('div', 'DesBird desbtn');
    flappy.element.innerHTML = 'Flappy Bird';
    const snake = new ElementBuilder('div', 'DesSnake desbtn');
    snake.element.innerHTML = 'Snake';
    const snow = new ElementBuilder('div', 'DesSnow desbtn');
    snow.element.innerHTML = 'Snow game';

    const raceWrap = new ElementBuilder('div', 'RaceWrap');
    const raceh21 = new ElementBuilder('h2', '');
    const racep1 = new ElementBuilder('p', '');
    raceh21.element.innerHTML = 'Description:';
    racep1.element.innerHTML = 'a car is driving along the highway, accidentally meeting other cars alongthe way. The vehicle"s trajectory can be controlled to avoid collisions with other vehicles. The collision ends the game';
    const raceh22 = new ElementBuilder('h2', '');
    const racep2 = new ElementBuilder('p', '');
    raceh22.element.innerHTML = 'Control:';
    racep2.element.innerHTML = 'right and left arrows - which allows you to change the trajectory.';
    const raceh23 = new ElementBuilder('h2', '');
    const racep3 = new ElementBuilder('p', '');
    raceh23.element.innerHTML = 'Levels:';
    racep3.element.innerHTML = 'with an increase in the level of difficulty of the game - the speed of the car increases.';

    const tetrisWrap = new ElementBuilder('div', 'TetrisWrap');
    const tetrish21 = new ElementBuilder('h2', '');
    const tetrisp1 = new ElementBuilder('p', '');
    tetrish21.element.innerHTML = 'Description:';
    tetrisp1.element.innerHTML = 'geometrical figures of different shapes randomly appear on the field, which are shifted to the lower border. It is necessary to combine them so that they form a continuous single area. The figures can be displaced and rotated, accelerate downward movement. If the folded figures collect a continuous horizontal line, then it is removed and additional points are awarded.';
    const tetrish22 = new ElementBuilder('h2', '');
    const tetrisp2 = new ElementBuilder('p', '');
    tetrish22.element.innerHTML = 'Control:';
    tetrisp2.element.innerHTML = 'up, down, right, left and space arrows (rotation) - which allows you to change the trajectory of a moving figure and the angle of its entry into an already formed set of previous figures. Pressing the down arrow accelerates the descent of the figure, but shrinks a short distance before colliding.';
    const tetrish23 = new ElementBuilder('h2', '');
    const tetrisp3 = new ElementBuilder('p', '');
    tetrish23.element.innerHTML = 'Levels:';
    tetrisp3.element.innerHTML = 'with an increase in the level of difficulty of the game, which is tied to the amount of points received, the speed of movement of the figures increases.';

    const breakoutWrap = new ElementBuilder('div', 'BreakoutWrap');
    const breakouth21 = new ElementBuilder('h2', '');
    const breakoutp1 = new ElementBuilder('p', '');
    breakouth21.element.innerHTML = 'Description:';
    breakoutp1.element.innerHTML = 'in the center of the playing field there is a block of elements from which you need to knock out the components with a ball. The movement of the ball begins at the beginning of the game and in physics changes from collisions with field boundaries, a hero and a block of elements. The ball must not fall, for this it is necessary to horizontally shift the player, from whom the ball will push off.';
    const breakouth22 = new ElementBuilder('h2', '');
    const breakoutp2 = new ElementBuilder('p', '');
    breakouth22.element.innerHTML = 'Control:';
    breakoutp2.element.innerHTML = 'mouse movement moves the player horizontally, mouse click allows to shoot.';
    const breakouth23 = new ElementBuilder('h2', '');
    const breakoutp3 = new ElementBuilder('p', '');
    breakouth23.element.innerHTML = 'Levels:';
    breakoutp3.element.innerHTML = 'in the next version.';

    const spaceWrap = new ElementBuilder('div', 'SpaceWrap');
    const spaceh21 = new ElementBuilder('h2', '');
    const spacep1 = new ElementBuilder('p', '');
    spaceh21.element.innerHTML = 'Description:';
    spacep1.element.innerHTML = 'at the top of the playing field, a lot of viruses are randomly generated. The player must have time to destroy them before they fall to the surface.';
    const spaceh22 = new ElementBuilder('h2', '');
    const spacep2 = new ElementBuilder('p', '');
    spaceh22.element.innerHTML = 'Control:';
    spacep2.element.innerHTML = 'mouse movement moves the player horizontally, mouse click allows to shoot.';
    const spaceh23 = new ElementBuilder('h2', '');
    const spacep3 = new ElementBuilder('p', '');
    spaceh23.element.innerHTML = 'Levels:';
    spacep3.element.innerHTML = 'the difficulty of the game increases with the number of points received.';

    const flappyWrap = new ElementBuilder('div', 'FlappyWrap');
    const flappyh21 = new ElementBuilder('h2', '');
    const flappyp1 = new ElementBuilder('p', '');
    flappyh21.element.innerHTML = 'Description:';
    flappyp1.element.innerHTML = 'the hero of the game is a bird, its flight must be controlled so that it doesnot fall to the ground and does not collide with obstacles in flight';
    const flappyh22 = new ElementBuilder('h2', '');
    const flappyp2 = new ElementBuilder('p', '');
    flappyh22.element.innerHTML = 'Control:';
    flappyp2.element.innerHTML = 'spacebar and left click.';
    const flappyh23 = new ElementBuilder('h2', '');
    const flappyp3 = new ElementBuilder('p', '');
    flappyh23.element.innerHTML = 'Levels:';
    flappyp3.element.innerHTML = ' in the next version.';

    const snakeWrap = new ElementBuilder('div', 'SnakeWrap');
    const snakeh21 = new ElementBuilder('h2', '');
    const snakep1 = new ElementBuilder('p', '');
    snakeh21.element.innerHTML = 'Description:';
    snakep1.element.innerHTML = 'a snake runs across the field, mice appear randomly on the field, which it must eat. For each mouse eaten, points are awarded and the length of the snake itself increases. Also, obstacles (flowers) are randomly formed on the field, the task is not to stumble upon them with a snake. Also, the snake should not touch its body during movement - all this leads to the end of the game.';
    const snakeh22 = new ElementBuilder('h2', '');
    const snakep2 = new ElementBuilder('p', '');
    snakeh22.element.innerHTML = 'Control:';
    snakep2.element.innerHTML = 'up, down, right, left arrows - which allows you to change the trajectory of the snake, including changing the direction of movement to the opposite.';
    const snakeh23 = new ElementBuilder('h2', '');
    const snakep3 = new ElementBuilder('p', '');
    snakeh23.element.innerHTML = 'Levels:';
    snakep3.element.innerHTML = 'with an increase in the level of difficulty of the game - the speed of movement of the snake increases, more mice are generated. The number of obstacles also increases. The constantly increasing body length of the snake with each mouse eaten makes it difficult to control its movement across the field.';

    const snowWrap = new ElementBuilder('div', 'SnowWrap');
    const snowh21 = new ElementBuilder('h2', '');
    const snowp1 = new ElementBuilder('p', '');
    snowh21.element.innerHTML = 'Description:';
    snowp1.element.innerHTML = 'the player can move around the field, collecting snowballs, which allow them to accumulate health (plus 1 unit for each snowball). Starting health - 1 unit. When hit by a bomb, 5 health points are removed. The game ends if the player spends more health than he has accumulated. Snowballs and bombs are generated at the start of the game and are added randomly 1 piece per field upon collision with the player. Physics of gravity and collision works. Points are awarded for the number of snowballs collected.';
    const snowh22 = new ElementBuilder('h2', '');
    const snowp2 = new ElementBuilder('p', '');
    snowh22.element.innerHTML = 'Control:';
    snowp2.element.innerHTML = 'up, down, right, left arrows - which allows you to change the trajectory of the player and allows you to jump. If you are tired, no need to cry, you can give up. To stop suffering press the space bar.';
    const snowh23 = new ElementBuilder('h2', '');
    const snowp3 = new ElementBuilder('p', '');
    snowh23.element.innerHTML = 'Levels:';
    snowp3.element.innerHTML = ' in the next version.';

    this.container.append(h2, race, tetris, breakout, space, flappy, snake, snow);
    race.append(raceWrap);
    raceWrap.append(raceh21, racep1, raceh22, racep2, raceh23, racep3);
    tetris.append(tetrisWrap);
    tetrisWrap.append(tetrish21, tetrisp1, tetrish22, tetrisp2, tetrish23, tetrisp3);
    breakout.append(breakoutWrap);
    breakoutWrap.append(breakouth21, breakoutp1, breakouth22, breakoutp2, breakouth23, breakoutp3);
    space.append(spaceWrap);
    spaceWrap.append(spaceh21, spacep1, spaceh22, spacep2, spaceh23, spacep3);
    flappy.append(flappyWrap);
    flappyWrap.append(flappyh21, flappyp1, flappyh22, flappyp2, flappyh23, flappyp3);
    snake.append(snakeWrap);
    snakeWrap.append(snakeh21, snakep1, snakeh22, snakep2, snakeh23, snakep3);
    snow.append(snowWrap);
    snowWrap.append(snowh21, snowp1, snowh22, snowp2, snowh23, snowp3);
  }
}
