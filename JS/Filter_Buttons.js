 // Filter Buttons
    
    var $cards = $('.class-card');
    var $dayFilters = $('.dayFilter');
    var $categoryFilters = $('.categoryFilter');
    var $noResults = $('#noResults');
    
    // Show all days on page load 
    $cards.show();
    // Hide the no results message
    $noResults.hide();
    
    $categoryFilters.on('click', function(e){
      var $category = $(e.target);
      
      $categoryFilters.removeClass('selected');
      $category.addClass('selected')
      
      filterCards();
    });
    
    $dayFilters.on('click', function(e){
      var $day = $(e.target);
      
      $dayFilters.removeClass('selected');
      $day.addClass('selected')
      
      filterCards();
    });
    
    function filterCards () {
      $cards.show();
      $noResults.hide();
      
      var $day = $dayFilters.filter('.selected');
      var $category = $categoryFilters.filter('.selected');
      var filterClasses = [];
      
      if ($day.length) filterClasses.push('.'+ $day.data('target'));
      if ($category.length) filterClasses.push('.'+ $category.data('target'));
      
      if (filterClasses) {
          var filter = filterClasses.join('');
          
          $cards.not(filter).hide();
          
          if (!$cards.filter(filter).length) {
            $noResults.show();
          }
          
      }
    }
