
// GET HELP BUTTON

$( "#help-content" ).hide();

function myFunction() {
 $( "#help-content" ).show();
 $( "#gethelp" ).addClass("gethelpOpen");
 $( "#help-widget" ).addClass("help-widgetOpen");
}
$('.close-help-me').click(function(){
  $( "#gethelp" ).removeClass("gethelpOpen");
  $( "#help-content" ).hide();
  $( "#help-widget" ).removeClass("help-widgetOpen");
});





// IMPORTANT TOP MESSAGES 


function closeThisGreen() {
 $("#green-top-text-banner").hide();
};

function closeThis1() {
 $("#MSL-Kontiki-Message-1").hide();
};

function closeThis2() {
 $("#MSL-Kontiki-Message-2").hide();
};
