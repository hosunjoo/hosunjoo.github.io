$(function() {
  $(document).on('click', 'ul>li', function() {
    $(this).closest('ul').find('li.active').removeClass('active');
    $(this).addClass('active');
  });
});
