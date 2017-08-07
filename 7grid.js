

$.fn.toggleCheckbox = function() {
  this.attr('checked', !this.attr('checked'));
}



$(document).ready(function(){
    
  $(".option_item").click(function (e) {    
    if (e.target.tagName != 'INPUT') {
      $(this).find("input").toggleCheckbox();
      return false;
    }

  });

);