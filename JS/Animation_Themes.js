
// GET HELP BUTTON - BLACK THEME

$( "#help-content_BLACK" ).hide();

function myFunction() {
 $( "#help-content_BLACK" ).show();
 $( "#gethelp_BLACK" ).addClass("gethelpOpen_BLACK");
 $( "#help-widget_BLACK" ).addClass("help-widgetOpen_BLACK");
}
$('.close-help-me_BLACK').click(function(){
  $( "#gethelp_BLACK" ).removeClass("gethelpOpen_BLACK");
  $( "#help-content_BLACK" ).hide();
  $( "#help-widget_BLACK" ).removeClass("help-widgetOpen_BLACK");
});



// GET HELP BUTTON - RED THEME

$( "#help-content_RED" ).hide();

function myFunction() {
 $( "#help-content_RED" ).show();
 $( "#gethelp_RED" ).addClass("gethelpOpen_RED");
 $( "#help-widget_RED" ).addClass("help-widgetOpen_RED");
}
$('.close-help-me_RED').click(function(){
  $( "#gethelp_RED" ).removeClass("gethelpOpen_RED");
  $( "#help-content_RED" ).hide();
  $( "#help-widget_RED" ).removeClass("help-widgetOpen_RED");
});
