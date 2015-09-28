//click on inputs

lowBtn.on("click", function(event){
  event.preventDefault();
  homePlacement.html(lowHigh);
});


highBtn.on("click", function(event){
  event.preventDefault();
  homePlacement1.html(highLow);
});


$("input[type=checkbox]").on( "click", findRange);
