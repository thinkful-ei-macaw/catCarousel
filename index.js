/* eslint-disable strict */
'use strict';
const kittyCarousel = () => {
  $('.thumbnail').on('click', () => {
    const mainKitty = $(event.currentTarget)
      .find('img')
      .attr('src');
    const altKitty = $(event.currentTarget)
      .find('img')
      .attr('alt');
    $('.hero img')
      .attr('src', mainKitty)
      .attr('alt', altKitty);
  });
};

$(kittyCarousel());
