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
    // console.log(item);
  })

  // console.log('hi');
});
