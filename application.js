
function move_cell(id){
  var active = $(id).find('.active');
  $(active).next().addClass('active');
  $(active).removeClass('active');
  find_winner(active);
}

function find_winner(active){
  if ($(active).siblings(':last').hasClass('active')){
    alert($(active).parent().attr('id'));
  }
}

$(document).ready(function() {
  $('body').on('keyup', function(event){
    if (event.keyCode === 82){
      move_cell('#player1_strip');
    }
    if (event.keyCode === 85){
      move_cell('#player2_strip');
    }
    $('form').on('submit'), function(event){
      location.reload();
    };
  });
});

  // X - listen for user keystroke
  // X - find class active for each player keystroke
  // X - move class active to next cell
  // X - remove previous cell
  // end game last cell is active
  // display winner name
