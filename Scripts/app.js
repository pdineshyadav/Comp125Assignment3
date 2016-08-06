/* Main Javascript file */

/**
Filename = app.js
@author Dinesh Palle
@date : 8th August 2016
StudentID : 300705307
Website : http://comp125assignment3-300705307.azurewebsites.net
@description : This is the main javascript file of this website
*/

// IIFE = Immediately Invoked Function Expression
(function(){
    
    // Code goes here
        "use strict";

      
    // Defines an array for HTML elements
    var elementsOfParagraph = [];
    
    elementsOfParagraph[0] = document.getElementById("aboutMeParagraph");
    elementsOfParagraph[1] = document.getElementById("projectsParagraphOne");
    elementsOfParagraph[2] = document.getElementById("projectsParagraphTwo");
    elementsOfParagraph[3] = document.getElementById("projectsParagraphThree");
    



    // Create reference to the firstName field
    var firstName = document.getElementById("firstName");
    // Create reference to the lastName field
    var lastName = document.getElementById("lastName");
    // Create reference to the phoneNumber field
    var phoneNumber = document.getElementById("phoneNumber");
    // Create reference to the email field
    var email = document.getElementById("email");
    // Create reference to the message field
    var message = document.getElementById("message");

    // Create a reference to the form
    var contactForm = document.getElementById("contactForm");

    // If statement - If contactForm exists then it runs the code inside.
    if (contactForm)
    {

        // Event listner with inline anonymous event handler function
        contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("=============================================================");
        console.log("Comp 125 Assignment 2 - Mini Portfolio – Contact Page Update");
        console.log("=============================================================");
        formInputOnConsole();
        console.log("=============================================================");
        contactForm.reset();
        })

    }


    // formInputOnConsole function 
    function formInputOnConsole() {

        console.log("First Name :- " + firstName.value);
        console.log("Last Name :- " + lastName.value);
        console.log("Phone Number :- " + phoneNumber.value);
        console.log("Email ID :- " + email.value);
        console.log("Detailed Description :- " + message.value);
    }

    /*
    Assignment 3 Paragraph.json 
    */
    var xhrMyData;
    /**
     * This function reads data from the paragraphs.json file and aligns them with their 
     * respective ID's with the innerHTML using the if statement 
     * 
     * @method readData
     * @return void
     */
    function readData() {
        if ((xhrMyData.readyState === 4) && (xhrMyData.status === 200)) {

            var MyData = JSON.parse(xhrMyData.responseText);
            var paragraphs = MyData.paragraphs;
            paragraphs.forEach(function (paragraph) {
                var paragraphElement = document.getElementById(paragraph.id);
                //looks for the element id and aligns it with the paragraphs in the html
                if(paragraphElement) {
                     paragraphElement.innerHTML = paragraph.content;
                }
               
            }, this);
        }
    }
    /*
    This functions loads data from the paragraph.json file to the html file
    @method loadData
    @return void
    */
    function loadData(){
        xhrMyData = new XMLHttpRequest();
        xhrMyData.open("GET","Scripts/paragraphs.json",true);
        xhrMyData.send(null);
        xhrMyData.addEventListener("readystatechange",readData);
    }
    function init() { 
     //calls the loadData function 
        loadData();
     };




/**

    // Defines Paragraph array
    var paragraph = [];

    // Data for the pages About me and Projects
    paragraph[0] = "I am a student of <strong>Software Engineering</strong> Program at Centennial College. Previously I studied at <strong>York University</strong>, <b>Winston Churchill CI</b> and <strong> Johnson Grammar School</strong>. I like to play sports. My favourite sport is <strong>Cricket</strong>. I even enjoy running, high jump and shot put. I have received a couple of momentos in the <b> Scarborough Cricket League</b> and few medals in athletics. My mission is to get a job in IT department. I have learnt programming languages like Java, C#, BASICS, etc. I am very much interested in becoming a web developer. I will try my level best to achieve my mission.";
    paragraph[1] = "Playing 8 ball pool is one of my favourite hobbies. I like playing pool because it is very interesting when we play the game. Eight-ball is played with cue sticks and 16 balls: a cue ball, and 15 object balls consisting of seven striped balls, seven solid-colored balls and the black 8 ball. After the balls are scattered with a break shot, the players are assigned either the group of solid balls or the stripes once a ball from a particular group is legally pocketed. The ultimate object of the game is to legally pocket the eight ball in a called pocket, which can only be done after all of the balls from a player's assigned group have been cleared from the table.";
    paragraph[2] = "I have been playing cricket since my childhood. Cricket has been part of my life since many years. When I was in India, I played for my school team. After comming to Canada, I continued playing for my school team and became the caption of the team. I even played in the scarborough cricket league. Cricket is a bat-and-ball game played between two teams of eleven players on a cricket field, at the centre of which is a rectangular 22-yard-long pitch with a wicket, a set of three wooden stumps sited at each end. One team, designated the batting team, attempts to score as many runs as possible, whilst their opponents field. Each phase of play is called an innings. After either ten batsmen have been dismissed or a set number of overs have been completed, the innings ends and the two teams then swap roles. The winning team is the one that scores the most runs, including any extras gained, during their period batting.";
    paragraph[3] = "I am very much interested in body building. I have been workingout since a year. I don't go regularly but, I go whenever I am free. The best way to enjoy what you do is to vary the way you workout. When you work out, you do a certain number of exercises, right? For example, if you are working your biceps, you don't do every curl movement there is. You do a few of them, like barbell curls, incline dumbbell curls, and alternate dumbbell curls.";
    
    // If paragraph exists then populate each paragraph on this page
    for (var i = 0; i < elementsOfParagraph.length; i++) 
    {
        if(elementsOfParagraph[i]) 
        {
         elementsOfParagraph[i].innerHTML = paragraph[i];
        }
    }
      

        
       */ 
        

    window.addEventListener("load", init);
    
})();