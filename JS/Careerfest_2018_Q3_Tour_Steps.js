// Careerfest 2018 Q3 Tour


var tour = new Tour({
  steps: [ 
  {
    element: "#tour-launch",
	placement: "bottom",
    title: "Welcome to the Careerfest!",
    content: "Press 'next' to see page features."
  },
  {
    element: "#tour-days",
	placement: "top",
    title: "Choose a Day that works best for you",
    content: "Simply click on the day that works best for your schedule, and the available class cards will sort below."
  },
  {
    element: "#tour-categories",
	placement: "top",
    title: "Then, choose a Competency that you'd like to develop",
    content: "Hopefully, this filter can help you choose the best class to improve your skillset."
  },
  {
    element: "#tour-card",
	placement: "top",
    title: "Here's a Class Card",
    content: "It contains everything you need to register."
  },
  {
    element: "#tour-category-bites",
	placement: "top",
    title: "Competencies this class develops",
    content: "These tiny logos help you identify what class supports what competency. Some classes support more than one!"
  },
  {
    element: "#tour-class-times",
	placement: "top",
    title: "Choose a Class Time",
    content: "Once you've glazed over the information, click a button to select the best class time."
  },
  {
    element: "#tour-take-class-survey",
	placement: "top",
    title: "After class is over, take survey!",
    content: "Just a few minutes of you time can help improve future Careerfest classes."
  },
  {
    element: "#survey-link",
	placement: "top",
    title: "<span class='glyphicon glyphicon-thumbs-up'></span> Leave Feedback for MSL",
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


