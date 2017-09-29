var bio = {
    "name": "Sergio Velasco",
    "role": "NINJA",
    "contacts": {
        "mobile": "xxx-xx-xxx",
        "email": "sv1229@att.com",
        "github": "xxxxxx",
        "location": "Los Angeles, CA"
    },
    "welcomeMessage": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    "picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJTAAAAJGJkMWY2ODJjLWFkMWYtNDkwYS04MjY2LTQ0ZGMwYTAyYTMwNA.jpg",
    "skills": ["Break Software", "Go unoticed", "work in the shadows like a real ninja"]
};

var education = {
    "schools": [{
        "name": "Westwood College",
        "location": "Los Angeles, CA",
        "degree": "BS",
        "majors": ["Game Software Development"],
        "dates": "2006",
        "url": "NA"
    }],
    "onlineCourses": [{
        "title": "Intro to programming nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "http:www.udacity.com"
    }]
};

var work = {
    "jobs": [{
            "employer": "DIRECTV",
            "title": "Sr. Software Engineer",
            "location": "El Segundo",
            "dates": "In Progress",
            "description": "Use Big Data technologies like New Relic, Conviva, Omniture and apteligent to monitor system / app performance in production."
        },
        {
            "employer": "Electronic Arts",
            "title": "Global Project Manager",
            "location": "Playa Vista, CA",
            "dates": "2007-2009",
            "description": "Managing testing effort for various high profile franchises across the EA Mobile organization in LA, RO, HYD, & MTL. I was part of a small team of SME that help stay up department stay up to date with Agile QA methodologies and various iOS and Android tools. Got opportunity to coordinate QA managers across all mobile studios to bring together a multi-functional team of 100+ QA team members to test The Simpsons Tapped Out."
        },
        {
            "employer": "JAMDAT Mobile",
            "title": "QA Analyst",
            "location": "Los Angeles, CA",
            "dates": "2005-2006",
            "description": "Performed localization testing on all content to ensure that linguistic quality adheres to the company's standards and guidelines. Work closely with Production and Engineering teams to evaluate testability of new features/implementations. Tested well known J2ME & BREW games like Tetris, Bejeweled, Doom RPG and many others."
        }
    ]
};


var projects = {
    "projs": [{
            "title": "Simpsons Tapped Out",
            "dates": 2009,
            "description": "Manager",
            "image": ["https://vignette.wikia.nocookie.net/simpsons/images/8/89/The_Simpsons_Tapped_Out.jpg/revision/latest/scale-to-width-down/350?cb=20150720220902"]
        },

    ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").append(HTMLbioPic.replace("%data%", bio.picture));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

if (bio.skills !== 0) {
    $("#header").append(HTMLskillsStart);
    $("#header").append(HTMLskills.replace("%data%", bio.skills[0]));
    $("#header").append(HTMLskills.replace("%data%", bio.skills[1]));
    $("#header").append(HTMLskills.replace("%data%", bio.skills[2]));
}


//LOOP
work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
};

work.display();

// Internationalise name function -------//
function inName(nameThing) {
    var surUpName = nameThing.substr(nameThing.indexOf(' ') + 1).toUpperCase();
    var firstName = nameThing.substr(0, nameThing.indexOf(' '));
    console.log(firstName);
    var firstUpName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
    console.log(firstUpName);
    return (firstUpName + " " + surUpName);
}

// Internationalise name function -------//

projects.display = function() {
    for (proj in projects.projs) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projs[proj].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projs[proj].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projs[proj].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projs[proj].image[0]));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projs[proj].image[1]));
    }
};

projects.display();


education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDeg = formattedSchName + formattedSchDeg;
        $(".education-entry:last").append(formattedNameDeg);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]));
    }

    for (onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        var formattedCrName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedCrSch = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedCrNamsch = formattedCrName + formattedCrSch;
        $(".education-entry:last").append(formattedCrNamsch);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates));

    }
};

education.display();
