$(document).ready(function () {
  // Click on a box
  $('.box').click(function() {
    console.log("box-clicked");
    for (i = 0; i <= 8; i++) {
    var player1 = 0;
    var player2 = player1 + 1;
    if (player1 = 0) {
      $(this).text("X");
    } 
    else {
      $(this).text("O");
    }
    i++;
   }
  })
})