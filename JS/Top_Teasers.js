
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


// BOOTSRAP TOUR STEPS 

var tour = new Tour({
  steps: [ 
  {
    element: "#MSL-initialize-tour",
 placement: "bottom",
    title: "Welcome to MSL!",
    content: "Press 'next' to see page features."
  },
  {
    element: "#ctl00_header_headerResponsive_lnkNavBar",
 placement: "bottom",
    title: "<span class='glyphicon glyphicon-phone'></span> New Menu!",
    content: "Click <span class='glyphicon glyphicon-menu-hamburger'></span> to view popular pages and <span class='glyphicon glyphicon-search'></span> to start searching. <img width='100%' src='https://media.giphy.com/media/wHeY6VAHY8pN33OVTA/giphy.gif'/>"
  },
  {
    element: "#header_headerResponsive_lnkNavBar",
 placement: "bottom",
    title: "<span class='glyphicon glyphicon-phone'></span> New Menu!",
    content: "Click <span class='glyphicon glyphicon-menu-hamburger'></span> to view popular pages and <span class='glyphicon glyphicon-search'></span> to start searching. <img width='100%' src='https://media.giphy.com/media/wHeY6VAHY8pN33OVTA/giphy.gif'/>"
  },
  {
    element: "#tour-priority-1",
 placement: "top",
    title: "<span class='glyphicon glyphicon-info-sign'></span> Daily Dose 1",
    content: "Training for all cast."
  },
  {
    element: "#tour-priority-2",
 placement: "top",
    title: "<span class='glyphicon glyphicon-info-sign'></span> Daily Dose 2",
    content: "Training for all selling cast."
  },
  {
    element: "#tour-priority-3",
 placement: "top",
    title: "<span class='glyphicon glyphicon-info-sign'></span> Daily Dose 3, Brand Training",
    content: "Training for full time selling cast. Choose the video that matches your world."
  },
  {
    element: "#tour-priority-4",
 placement: "top",
    title: "<span class='glyphicon glyphicon-info-sign'></span> Daily Dose 4",
    content: "For full time selling cast."
  },
  {
    element: "#tour-merch-weekly",
 placement: "top",
    title: "<span class='glyphicon glyphicon-info-sign'></span> Merch Weekly",
    content: "Print this to review onstage."
  },
  {
    element: "#tour-past-daily-doses",
 placement: "top",
    title: "<span class='glyphicon glyphicon-info-sign'></span> Past Daily Doses",
    content: "See previous week priorities here."
  },
  {
    element: "#tour-leave-feedback",
 placement: "top",
    title: "<span class='glyphicon glyphicon-thumbs-up'></span> Leave Feedback",
    content: "Tell us what works and what could be improved."
  }
]});


function startTour() {
    // Initialize the tour
    tour.init();
    // Restart from begining
    tour.restart();
    // Start the tour
    tour.start(true);
}



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
