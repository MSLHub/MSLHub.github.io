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
