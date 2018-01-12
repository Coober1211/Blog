import { $ } from './bling';

export default function () {
  let prevX = 0;
  let prevY = 0;
  let posX = '-50%';
  let posY = '-50%';
  let movedUp = false;
  let movedLeft = false;
  // EVENT HANDLERS

  function directionMoved(event) {
    movedLeft = (prevX > event.pageX);
    movedUp = (prevY > event.pageY);
  }

  // PARALLAX BACKGROUN EFFECT
  function moveBackground(event) {
    directionMoved(event);

    posX = (movedLeft) ? '-48%' : '-52%';
    posY = (movedUp) ? '-48%' : '-52%';

    $('.background').style.transform = `translate(${posX},${posY})`;

    prevX = event.pageX;
    prevY = event.pageY;
  }

  $('.move-background').on('hover', (e) => {
    prevX = e.pageX;
    prevY = e.pageY;
  });

  $('.move-background').on('mousemove', (e) => {
    moveBackground(e);
  });
}
