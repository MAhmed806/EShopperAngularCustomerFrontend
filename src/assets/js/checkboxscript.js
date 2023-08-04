$( document ).ready(function() {
    $('.exclusive-checkbox').on('change', function() {
       
        if (this.checked) {
          $('.exclusive-checkbox').not(this).prop('checked', false);
          
        }
      });
});