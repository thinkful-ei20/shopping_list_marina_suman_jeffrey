'use strict';

$(function() {
  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();
    const item = $('.js-shopping-list-entry').val();
    const html = `
      <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `;
    $('.js-shopping-list-entry').val('');
    $('.shopping-list').append(html);
  })

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    console.log('toggle button clicked');
  });


  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    //$(this).parent().remove();
    $(this).closest("li").remove();
  });




});
