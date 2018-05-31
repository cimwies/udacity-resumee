
let model = {


	bio: 

		[ {
	
			name : 'John',
		    role : 'the adventurer',
		    contacts : {
		        mobile: '01234 5678',
		        email: 'john@starfleet.earth', 
		        github: 'gitJohn',
		        twitter: 'twitterJohn',
		        location: 'Antarctica'
		      },
		    welcomeMessage: 'welcome to my personal portfolio', 
		    skills: [ 'explore','discover','logic' ],
		    biopic: 'images/fry.jpg',
		
		} ], 


	education: 

		[ {

			schools: 
				{//array of objects with
			        name: 'Starfleet Academy',
			        location: 'Antarctica',
			        degree: 'Engineer',
			        majors: [ 'Dipl.', 'Dr.' ],
			        dates: '10-5-2009',
			        url: 'starfleet.com'
			     },

		    onlineCourses: 
		    	{//array of objects with
			        title: 'How to make the warp fly',
			        school: 'Starfleet Academy',
			        dates: '2012',
			        url: 'edu.starfleet.com'
		     	}

		} ], 

	
	work: 

		[ {

			jobs: 

				{ //array of objects with
			        employer: 'Starfleet', 
			        title: 'Engineer', 
			        location: 'Space', 
			        dates: '2009 to now',
			        description: 'where no one has gone before'
			     }
		          
		} ], 



	projects: 

		[ {

			projects: 
				{ //array of objects with
		          	title: 'Warp Engine', 
		          	dates: '2010 (works everywhere)',
		          	description: 'New Warp Engine Prototype',
		          	images: 
		          	[
		          		'images/197x148.gif', // model.projects[0].projects.images[0]
		          		'images/197x148.gif'
		          	],
		        },         		

		} ]

};


let controller = {

	init: function() {

		this.displayBio();
		this.displayEducation();
		this.displayWork();
		this.displayProjects();
		this.displayGoogleMap();
	
	},


	displayBio: function() {

		let formattedName = HTMLheaderName.replace('%data%', model.bio[0].name),
			formattedRole = HTMLheaderRole.replace('%data%', model.bio[0].role),
	        photo = HTMLbioPic.replace('%data%', model.bio[0].biopic),
	        github = HTMLgithub.replace('%data%', model.bio[0].contacts.github),
	        email = HTMLemail.replace('%data%', model.bio[0].contacts.email),
	        location = HTMLlocation.replace('%data%', model.bio[0].contacts.location),
	        twitter = HTMLtwitter.replace('%data%', model.bio[0].contacts.twitter),
	        mobile = HTMLmobile.replace('%data%', model.bio[0].contacts.mobile),
	        welcome = HTMLwelcomeMsg.replace('%data%', model.bio[0].welcomeMessage);
	        
        $('#header').prepend(formattedRole);
	    $('#header').prepend(formattedName);
	    $('#header').append(photo);
	    $('#header').append(welcome);
	    $('#header').append(HTMLskillsStart);
	   
	    $('#topContacts').append(location);
	    $('#topContacts').append(github);
	    $('#topContacts').append(twitter);
	    $('#topContacts').append(email);
	    $('#topContacts').append(mobile);

	    $('#footerContacts').append(mobile);
	    $('#footerContacts').append(email);
	    $('#footerContacts').append(github);
	    $('#footerContacts').append(twitter);

	    for ( let i = 0; i < model.bio[0].skills.length; i++) {
	    	$("#header").append(HTMLskills.replace('%data%', model.bio[0].skills[i]));
		}

	},


	displayEducation: function() {

		$('#education').append(HTMLschoolStart);

		let schoolname = HTMLschoolName.replace('%data%', model.education[0].schools.name);
		let location = HTMLschoolLocation.replace('%data%', model.education[0].schools.location);
		let degree = HTMLschoolDegree.replace('%data%', model.education[0].schools.degree);
		let major = HTMLschoolMajor.replace('%data%', model.education[0].schools.majors);
		let dates = HTMLschoolDates.replace('%data%', model.education[0].schools.dates);
 
       	$('.education-entry').append(schoolname);
       	$('.education-entry').append(location);
   		$('.education-entry').append(degree);
       	$('.education-entry').append(major); 
       	$('.education-entry').append(dates);
	   	$('.education-entry').append(HTMLonlineClasses);

        let title = HTMLonlineTitle.replace('%data%', model.education[0].onlineCourses.title);

        $('.education-entry:last').append(title);
        $('.education-entry:last').append(HTMLonlineSchool.replace('%data%', model.education[0].onlineCourses.school));
        $('.education-entry:last').append(HTMLonlineDates.replace('%data%', model.education[0].onlineCourses.dates));
        $('.education-entry:last').append(HTMLonlineSchool.replace('%data%', model.education[0].onlineCourses.url));
		
	},  


	displayWork: function() {
 
        let formattedEmployer = HTMLworkEmployer.replace("%data%", model.work[0].jobs.employer);
        let formattedTitle = HTMLworkTitle.replace("%data%", model.work[0].jobs.title);
        let formattedEmployerTitle = formattedEmployer + formattedTitle;
        let formattedDate = HTMLworkDates.replace("%data%", model.work[0].jobs.dates);
        let formattedDescription = HTMLworkDescription.replace("%data%", model.work[0].jobs.description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedDescription);

    },


	displayProjects: function() {

		let formattedTitle = HTMLprojectTitle.replace('%data%', model.projects[0].projects.title);
        let formattedDate = HTMLprojectDates.replace('%data%', model.projects[0].projects.dates);
        let formattedDescription = HTMLprojectDescription.replace('%data%', model.projects[0].projects.description);

		$('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDate);     
        $('.project-entry:last').append(formattedDescription);

        for ( let i = 0; i < model.projects[0].projects.images.length; i++ ) {
            $('.project-entry').append(HTMLprojectImage.replace('%data%', model.projects[0].projects.images[i]));
        }

	},

	displayGoogleMap: function() {
		$('#mapDiv').append(googleMap);
	}

};



controller.init();


