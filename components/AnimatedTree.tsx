'use client';

import React, { useEffect } from 'react';

const AnimatedCanvas = () => {
  useEffect(() => {
    // Canvas initialization and animation code
    let canvas = document.getElementById('main');
    let context = canvas.getContext('2d');

    function draw(time) {

      let h = canvas.height = canvas.offsetHeight;
      let w = canvas.width = canvas.offsetWidth;

      console.log('h: ', h);
      console.log('w: ', w);

      context.lineWidth = 3;
      context.lineCap = 'round';

      context.translate(w / 2, h);
      context.rotate(-Math.PI / 2);

      drawLine(0, time);
    }

    function drawLine(gen, t) {
      let localTime = Math.min(t, 1);
      let length = Math.easeOutQuad(localTime, 0, 200 * Math.pow(.6, gen), 1);
      let thickness = Math.easeOutQuad(localTime, 0, 12 * Math.pow(.7, gen), 1);
      thickness = Math.max(.5, thickness);
      context.beginPath();
      context.moveTo(0, 0);
      context.strokeStyle = gen < 7 ? '#502000' : '#0f0';
      context.lineWidth = thickness;
      context.lineTo(length, 0);
      context.stroke();

      let nextT = t - .10;
      if (gen < 10 && nextT >= 0) {
        context.save();
        context.translate(length, 0);
        context.rotate(Math.PI / 5);
        drawLine(gen + 1, nextT);
        context.restore();

        context.save();
        context.translate(length, 0);
        context.rotate(-Math.PI / 8);
        drawLine(gen + 1, nextT);
        context.restore();
      }
    }

    Math.easeOutQuad = function (t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
    };

    let start = Date.now();
    requestAnimationFrame(function update() {
      let time = (Date.now() - start) / 1000;
      time = time % 100;
      draw(time / 4);

      requestAnimationFrame(update);
    });

    return () => {
    };
  }, []);

  return (
    <div className="ground">
      <canvas id="main"></canvas>
    </div>
  );
};

export default AnimatedCanvas;
