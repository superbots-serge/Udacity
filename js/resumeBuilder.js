
var bio = {
   'name': 'Sergio Velasco',
   'role': 'NINJA',
   'welcomeMessage': 'Knowledge is Power!',
   'biopic': 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJTAAAAJGJkMWY2ODJjLWFkMWYtNDkwYS04MjY2LTQ0ZGMwYTAyYTMwNA.jpg',
   'contacts': {
      'mobile': 'XXX-XXX-XXXX',
      'email': 'sv1229@att.com',
      'github': 'superbots-serge',
      'twitter': 'TBD',
      'location': 'Los Angeles, CA',
   },
   'skills': ['Breaking Software', 'Being a Ninja', 'Engineer', 'Gamer']
};
var education = {
   'schools': [{
      'name': 'Westwood College',
      'degree': 'BS',
      'dates': '2009',
      'location': 'Los Angeles',
      'majors': ['Game Software Development'],
      'url': 'N/A'
   },],
   'onlineCourses': [{
      'title': 'Intro to Programming Nanodegree Program',
      'school': 'Udacity',
      'dates': '2017-Current',
      'url': "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1&v=fe1"
   }]
};
var work = {
   'jobs': [{
      'employer': 'DIRECTV - AT&T',
      'title': 'Sr.Software Engineer',
      'location': 'El Segundo, CA',
      'dates': '2012 - Present',
      'description': 'Use Big Data technologies like New Relic, Conviva, Omniture and apteligent to monitor system / app performance in production.'
   }, {
      'employer': 'Electronic Arts - EA',
      'title': 'Global Project Manager',
      'location': 'Playa Vista, CA',
      'dates': '2007-2010',
      'description': 'Managing testing effort for various high profile franchises across the EA Mobile organization in LA, RO, HYD, & MTL. I was part of a small team of SME that help stay up department stay up to date with Agile QA methodologies and various iOS and Android tools. Got opportunity to coordinate QA managers across all mobile studios to bring together a multi-functional team of 100+ QA team members to test The Simpsons Tapped Out.'
   }, {
      'employer': 'JAMDAT Mobile Inc.',
      'title': 'QA Analyst',
      'location': 'Culver City, CA',
      'dates': '2005 - 2006',
      'description': 'well known J2ME & BREW games like Tetris, Bejeweled, Doom RPG and many others.'
   }]
};
var projects = {
   'projects': [{
      'title': 'The Simpsons',
      'dates': '2009-2010',
      'description': "Great Game, Great project to manage!",
      'images': ['https://vignette.wikia.nocookie.net/simpsons/images/8/89/The_Simpsons_Tapped_Out.jpg/revision/latest/scale-to-width-down/350?cb=20150720220902", "http://static.adweek.com/adweek.com-prod/wp-content/uploads/sites/2/2015/06/The-Simpsons-Tapped-Out-Tap-Ball.pngf']
   }]
};

/******************************************************************************
* Display function for the Bio
******************************************************************************/
bio.display = function () {
   var formattedName = HTMLheaderName.replace('%data%',
                                              bio.name);
   var formattedRole = HTMLheaderRole.replace('%data%',
                                              bio.role);

   var formattedNameRole = formattedName + formattedRole;

   var formattedMobile = HTMLmobile.replace('%data%',
                                            bio.contacts.mobile);
   var formattedEmail = HTMLemail.replace('%data%',
                                          bio.contacts.email);
   var formattedTwitter = HTMLtwitter.replace('%data%',
                                              bio.contacts.twitter);
   var formattedGithub = HTMLgithub.replace('%data%',
                                            bio.contacts.github);
   var formattedLocation = HTMLlocation.replace('%data%',
                                                bio.contacts.location);

   var formattedbiopic = HTMLbioPic.replace('%data%',
                                            bio.biopic);

   var formattedWelcomeMsg = HTMLwelcomeMsg.replace(
      '%data%', bio.welcomeMessage);

   $("#header").prepend(formattedNameRole);
   $("#header").append(formattedbiopic, formattedWelcomeMsg);

   $("#topContacts").append(formattedMobile,
                            formattedEmail,
                            formattedTwitter,
                            formattedGithub,
                            formattedLocation);

   if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      bio.skills.forEach(function (skill) {
         var formattedBioSkills = HTMLskills.replace('%data%', skill);
         $('#skills').append(formattedBioSkills);
      });
   }

   $('#footerContacts').append(formattedMobile,
                            formattedEmail,
                            formattedTwitter,
                            formattedGithub,
                            formattedLocation);
};

/******************************************************************************
* Display function for College education
******************************************************************************/
education.display = function () {
   // start education entries.
   $("#education").append(HTMLschoolStart);

   education.schools.forEach(function (school) {
      var formattedSchoolName = HTMLschoolName.replace('%data%',
                                                       school.name);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',
                                                           school.degree);

      var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

      var formattedSchoolUrl = formattedSchoolNameDegree.replace("#",
                                                                school.url);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%',
                                                         school.dates);

      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%',
                                                               school.location);

      $('.education-entry:last').append(formattedSchoolUrl,
                                        formattedSchoolDates,
                                        formattedSchoolLocation);

      if (school.majors.length > 0) {
         $('#education').append(HTMLschoolStart);
         school.majors.forEach(function (major) {
               var formattedSchoolMajors = HTMLschoolMajor.replace('%data%',
                                                                   major);

               $('.education-entry:last').append(formattedSchoolMajors);
            });
      }

   });

bio.display();

/******************************************************************************
* Display function for Online education
******************************************************************************/
   $("#education").append(HTMLonlineClasses, HTMLschoolStart);

   education.onlineCourses.forEach(function (onlineCourse) {

      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%',
                                                 onlineCourse.title);

      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%',
                                                   onlineCourse.school);

      var formattedOnlineTitleSchool = formattedOnlineTitle +
                                      formattedOnlineSchool;

      var formattedOnlineUrl = formattedOnlineTitleSchool.replace("#",
                                                          onlineCourse.url);

      var formattedOnlineCourseDates = HTMLonlineDates.replace('%data%',
                                                       onlineCourse.dates);

      $(".education-entry:last").append(formattedOnlineUrl,
                                        formattedOnlineCourseDates);
   });
};

education.display();

/******************************************************************************
* Display function for Work
******************************************************************************/
work.display = function () {
   if (work.jobs.length > 0) {
      $('#workExperience').append(HTMLworkStart);
      work.jobs.forEach(function(job) {

         var formattedEmployer = HTMLworkEmployer.replace('%data%',
                                                     job.employer);

         var formattedTitle = HTMLworkTitle.replace('%data%',
                                                   job.title);

         var formattedEmployerTitle = formattedEmployer + formattedTitle;

         var formattedDates = HTMLworkDates.replace('%data%',
                                                    job.dates);

         var formattedLocation = HTMLworkLocation.replace('%data%',
                                                     job.location);

         var formattedDescription = HTMLworkDescription.replace('%data%',
                                                        job.description);

         $('.work-entry:last').append(formattedEmployerTitle, formattedDates,
                                      formattedLocation, formattedDescription);
      });
   }
};

work.display();

/******************************************************************************
* Display function for projects
******************************************************************************/
projects.display = function () {
   if (projects.projects.length > 0) {
      $('#projects').append(HTMLprojectStart);
      projects.projects.forEach(function (project) {
         var formattedTitle = HTMLprojectTitle.replace('%data%',
                                                      project.title);
         var formattedDates = HTMLprojectDates.replace('%data%',
                                                      project.dates);
         var formattedDescription = HTMLprojectDescription.replace('%data%',
                                                      project.description);

         if (project.images.length >0) {
            $('#projects').append(HTMLprojectStart);
            project.images.forEach(function (image) {
                     var formattedImage = HTMLprojectImage.replace('%data%',
                                                                   image);
                     $('.project-entry:last').append(formattedImage);
                  }
               );
         }
        $(".project-entry:last").prepend(formattedTitle, formattedDates,
                                         formattedDescription);
      });
   }
};

projects.display();

/******************************************************************************
* Internationalize name
******************************************************************************/
function inName(name) {
   name = name.trim().split(" ");
   console.log(name);
   name[1] = name[1].toUpperCase();
   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

   return name[0] +" " + name[1];
 }

 $('#main').append(internationalizeButton);

 /******************************************************************************
 * Google Maps
 ******************************************************************************/
$('#mapDiv').append(googleMap);
