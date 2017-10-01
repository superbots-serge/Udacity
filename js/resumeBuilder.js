
/******************************************************************************
*Bio Section of the resume
******************************************************************************/
var bio = {
    "name": "Sergio Velasco",
    "role": "NINJA",
    "contacts": {
        "mobile": "xxx-xx-xxx",
        "email": "sv1229@att.com",
        "github": "xxxxxx",
        "twitter": "TBD",
        "location": "Los Angeles, CA"
    },
    "welcomeMessage": "Lorem Ipsum is simply dummy text of the printing" +
                      "and typesetting industry",
    /*changed the picture name to bioPic per feedback*/
    "bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJTAAAAJGJkMWY2ODJjLWFkMWYtNDkwYS04MjY2LTQ0ZGMwYTAyYTMwNA.jpg",
    "skills": ["Break Software", "Go unoticed", "work in the shadows like" +
               " a real ninja","Engineer","Exec in the making"]
};
/******************************************************************************
*Work Section of the resume
******************************************************************************/
var work = {
    "jobs": [{
            "employer": "DIRECTV",
            "title": "Sr. Software Engineer",
            "location": "El Segundo",
            "dates": "In Progress",
            "description":"Use Big Data technologies like New Relic, "+
                          "Conviva, Omniture and apteligent to monitor system/"+
                          "app performance in production."
        }, {
            "employer": "Electronic Arts",
            "title": "Global Project Manager",
            "location": "Playa Vista, CA",
            "dates": "2007-2009",
            "description": "Managing testing effort for various high profile"+
                           "franchises across the EA Mobile organization in LA,"+
                           "RO, HYD, & MTL. I was part of a small team of SME"+
                           "that help stay up department stay up to date with"+
                           "Agile QA methodologies and various iOS and Android"+
                           "tools. Got opportunity to coordinate QA managers"+
                           "across all mobile studios to bring together a "+
                           "multi-functional team of 100+ QA team members to"+
                           " test The Simpsons Tapped Out."
        }, {
            "employer": "JAMDAT Mobile",
            "title": "QA Analyst",
            "location": "Culver City, CA",
            "dates": "2005-2006",
            "description": "Performed localization testing on all content to"+
                           "ensure that linguistic quality adheres to the"+
                           "company's standards and guidelines. Work closely"+
                           "with Production and Engineering teams to evaluate"+
                           "testability of new features/implementations."+
                           " Tested well known J2ME & BREW games like Tetris,"+
                           " Bejeweled, Doom RPG and many others."
        }]
};
/******************************************************************************
*Education Section of the resume
******************************************************************************/
var education = {
    "schools": [{
        "name": "Westwood College",
        "location": "Los Angeles, CA",
        "major": "Game Software Development",
        "dates": "2006-2009",
        "url": "na"
    },],
    "onlineCourses": [{
        "title": "Intro to Programming Nanodegree Program",
        "school": "Udacity",
        "dates": "2017-current",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Strategic Leadership and Managemen",
        "school": "University of Illinois at Urbana-Champaign",
        "dates": "2017-current",
        "url": "https://www.coursera.org/learn/managing-organization/home/welcome"
    }]
};
/******************************************************************************
* List of Projects to display in the resume
******************************************************************************/
var projects = {
    "project": [ {
            "title": "Simpsons Tapped Out",
            "dates": 2009,
            "description": "Manager",
            "images": ["https://vignette.wikia.nocookie.net/simpsons/images/8/89/The_Simpsons_Tapped_Out.jpg/revision/latest/scale-to-width-down/350?cb=20150720220902", "http://static.adweek.com/adweek.com-prod/wp-content/uploads/sites/2/2015/06/The-Simpsons-Tapped-Out-Tap-Ball.png"]
        }]
};

/******************************************************************************
* Display function for bio
******************************************************************************/
bio.display = function (){
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedpic);

var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedmobile);

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedemail);

var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedtwitter);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgithub);

var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedlocation);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
  }
};

bio.display();

/******************************************************************************
* Display function for work
******************************************************************************/
function displayWork() {
    for (i in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",
                                  work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",
                                  work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%",
                                  work.jobs[i].location);
        var formattedDates = HTMLworkDates.replace("%data%",
                                  work.jobs[i].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%",
                                  work.jobs[i].description);
        $(".work-entry:last").append(formattedLocation, formattedDates,
                                     formattedDescription);
    }
}

displayWork();


/******************************************************************************
* Internationalise name function
******************************************************************************/
function inName(string) {
    string = string.trim().split(" ");
    console.log(string);
    string[1] = string[1].toUpperCase();

    return string[0] + " " + string[1];
};

$("#main").append(internationalizeButton);


/******************************************************************************
* Display function for projects
******************************************************************************/
function displayProjects() {
    for (i in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",
                              projects.project[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",
                              projects.project[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",
                              projects.project[i].description);
        var formattedImage = HTMLprojectImage.replace("%data%",
                              projects.project[i].images);
        $(".project-entry:last").append(formattedDates,
                                        formattedDescription,
                                        formattedImage);
    }
};

displayProjects();
/******************************************************************************
* Display function for School
******************************************************************************/

function displaySchools() {
    for (i in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%",
                              education.schools[i].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%",
                              education.schools[i].location);
        var formattedDates = HTMLschoolDates.replace("%data%",
                              education.schools[i].dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%",
                              education.schools[i].major);
        $(".education-entry:last").append(formattedName,
                                          formattedLocation,
                                          formattedDates,
                                          formattedMajor);
    }
};

function displayOnlineSchools() {
    for (i in education.schools) {
      $("#education").append(HTMLschoolStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%",
                                    education.onlineCourses[i].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%",
                                    education.onlineCourses[i].school);
        var formattedonlineDates = HTMLschoolDates.replace("%data%",
                                    education.onlineCourses[i].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%",
                                    education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedonlineSchool,
                                          formattedonlineTitle,
                                          formattedonlineDates,
                                          formattedonlineURL);
  }
};

displaySchools();

$(".education-entry:last").append(HTMLonlineClasses);
displayOnlineSchools();

$("#mapDiv").append(googleMap);
