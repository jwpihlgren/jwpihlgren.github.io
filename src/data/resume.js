const resumeData = {
  navItems: {
    home: {
      path: "/",
      hash: "",
    },
    portfolio: { 
      path: "/",
      hash: "#portfolio"
    },
    resume: { 
      path: "/",
      hash: "#resume"
    },
    competences: {
      path: "/",
      hash: "#competences"
    },
  },
  logo: "joachim pihlgren",

  cards: {
    linkname: "read more",
    projects: [
      {
        cardtitle: "VD Pro",
        href: "vdpro",
        svg: "vdpro.svg",
        details: {
          title: "Redesigning VD Pro",
          subtitle:
            "A Real estate analysis and management information system",
          img: "noname.jpg",
          carousel: [],
          paragraphs: [
            {
              title: "Project description",
              content:
                `In this ongoing project, my colleague, and UX-Designer in crime, and I redesign the real estate analysis and management information system "VD Pro". 
                Aimed at preserving the sound foundation while working to increase the User Experience to meet modern standards,
                 we work closely with the product owner and the developers in a user centric design processes, iteratively making the product better.
                 We routinely engage our users to gain insight in to their world in order to create valuable solutions. We also conduct democratic
                acticivies to spread our insight to the whole company and harness the potential of the collective experience of a company
                with over 30 years in the trade.
                `,
            }
          ],
        },
      },
      {
        cardtitle: "cyborg box",
        href: "cyborg",
        svg: "cyborg-3.svg",
        details: {
          title: "Cyborg Box",
          subtitle:
            "A socio-spatial experience where sight is substituted with ultra sonic range finders and vibration motors.",
          img: "cybox.jpg",
          carousel: ["cybox/finishedmaze.jpg","cybox/finalhelmet.jpg","cybox/ideation.jpg","cybox/designprocess.jpg","cybox/breadboard.jpg","cybox/tapemaze.jpg","cybox/woodmaze.jpg","cybox/largemaze.jpg","cybox/firsthelmet.jpg"],
          paragraphs: [
            {
              title: "Summary",
              content:
                `@IDXPO@ http://www.idxpo.se/2019/ is an exhibition in collaboration between Universeum @Universeum@ https://www.universeum.se/en/ and Chalmers University of Technology. Every year students from the Interaction Design and Technologies program display different projects under a theme. 2019 me and a team of fellow students designed and built our contribution for the theme ‘Showing the invisible’. Our contribution was a full-sized maze which visitors had to navigate. The catch? They had to do it blindfolded and were not allowed to touch the walls. Instead we provided them with a helmet fitted with ultra-sonic range finders hooked up to vibration motors. As the distance to a wall decreased, the vibration increased.`,
            },
            {
              title: "Introduction",
              content:
                `Each year @Universeum@ https://www.universeum.se/en/ and Chalmers University of Technology put together an exhibition that is on display for one weekend every year. This exhibition is made up out installments put together by students in Interaction Design and Technologies. 2019, the theme was ‘Showing the invisible’. This is me and my fellow student designer’s contribution. </br></br>
                For the theme, we could explain any phenomena that was not visible to the naked eye. This could be on a macro scale such as things in the universe too far to see; a micro scale, such as things with in the body which are too small to see; or a human scale, things that are human but are not visible or abstract. The lot of us coming from a background in Cognitive Sciences, we immediately looked to the senses. </br></br>
                Beside the theme, we had one other major requirement.  @Universeum@ https://www.universeum.se/en/ has seen a steady decline in interest in technology and natural sciences, in mature youth, compared to their younger peers. They want to maintain and increase this interest and the installations in the exhibition should aid in this endeavor. Universeum being a scientific organization, there was also the requirement that visitors should learn something.
                `,
              img: "cybox/ideation.jpg",
              },
            {
              title: "Empathize",
              content:
                `Based on the requirements for the project, we defined our target group as teens 15-17-year-old. We were also provided with information that show a discrepancy in interest between gender, males reported a higher overall interest compared to females. In order to achieve the goal of overall increased interest, we decided that our installment should be equally engaging for all visitors and that care should be taken during the design process to make sure this was the case.</br></br>
                In order to understand our target demographic, we conducted interviews with students in a high school in Gothenburg. We also studied their curriculum in order to understand their current knowledge and what remains to be covered.
                `,
              img: "cybox/designprocess.jpg",
              },
            {
              title: "Ideate",
              content:
                `We were all very eager to start the project and we all had different vague ideas of what the installation should be. In order to come up with a set of ideas, we all wrote down and refined our ideas separately, each bringing three ideas to a workshop. During this workshop, each member pitched their ideas and wrote it down on a post it. When all ideas had been pitched, we used @dot voting@ https://www.nngroup.com/articles/dot-voting/ to select the three best ideas. When the ideas were tangible enough that we could decide how feasible they were and how well they aligned with the requirements, we decided on one of them.`,
              img: "cybox/breadboard.jpg",
              },
            {
              title: "The idea",
              content:
                `We wanted to teach visitors about senses. While eyes are visible, sight is not. We also wanted to show that the human senses are arbitrary, sight is not necessary to perceive range or objects. Bats do it by echolocation, producing subsonic sounds and perceiving their echo. There is a whole philosophical debate about whether humans can know what it is like being a bat, google ‘Thomas Nagel what is it like to be a bat’ for more on this.
                At the same time, the human brain is remarkedly plastic in how it interprets incoming signals such as sound or light. Studies have shown that the part of the brain that is thought to process visual signals can also interpret vibrations. This is embodied in a man, @Neil Harbisson@ https://www.cyborgarts.com/ , who can experience color despite being colorblind, by vibrations emitted to his skull.
                So, we thought, why not let people experience by themselves. By reading distance to objects using ultra-sonic range finders and using that value as intensity for a vibration motor, visitors can experience something akin to what bats do.
                `,
              img: "cybox/tapemaze.jpg",
              },
            {
              title: "Prototype",
              content:
                `The first step was to make sure that we had sufficient know how of coding and electrical wiring as well as could get a hold of the right components. We created a working prototype, replacing the ultra-sonic range finder with a piezo-electric speaker for sake of speed. To test the concept, we faked a maze by taping a maze-like structure on the floor, letting a blindfolded design member traverse the maze while holding wooden boards in front of the ultra-sonic range finder to simulate walls. The results: However slowly, it is possible to navigate a maze using only on ultra-sonic range finder and one piezo. <br><br/>
                The second step had two major parts. 1) Design and build the maze, full size. 2) Make the range-finder wearable and hook it up to a vibration motor. We sketched the maze on paper as well as built the maze in small scale to see how the pieces would fit together. After this we built the maze life-size. This allowed us to test the next iteration of the range-finder setup.<br><br/>
                We needed to make the range-finder setup wearable. To do this we modified an old bicycle helmet to which we attached the equipment. Because we now had a full-sized maze, we could test the prototype live. These tests showed that it was difficult handling 90-degree corners and that it was hard to blindfold wearers in a manner that could remove the whole setup in a quick and easy manner. The solution was to add two more rangefinders, each with their own vibration motor. These were placed with on in the middle and one on each side of the head, close to 90 degrees from the middle one. For wearability, we went with a welder’s mask which covered the face, was put on the head with only an adjustable head band and with which we could easily block the wearers vision.
                `,
              img: "cybox/largemaze.jpg", // @IMAGE@ Breadboard @IMAGE@ Tape Maze  @IMAGE@ THE MAZE UNPAINTED
              },
            {
              title: "The final design",
              content:
                `We went with a vapor wave color scheme, using pink and blue with white text. This aimed at moving away from connotations of cyborg which are traditionally very male inclined such as Robocop. At the time vapor wave was also a trending color scheme, increasing the possibility of sitting well with our target demographic. </br></br>
                During our iterations and evaluations of the concept (both helmet and maze), we got feedback that indicated that it would be fun to be able to see visitors as they were inside the maze. To accomplish this, we set up a webcam inside the maze which produced a live feed on a screen on the outside. This feed was overlaid with vaporwave cyborg visuals and mirrored to avoid letting users understand the layout of the maze from the outside. This made traversing the maze a social experience as groups of friends could watch as one of them went in to the unknown. 
                `,
              img: "cybox/firsthelmet.jpg", //@IMAGE@ PAINTED MAZE @IMAGE@ THE TV
              },
          ],
        },
      },
      {
        cardtitle: "noisemeter",
        href: "noisemeter",
        svg: "watch.svg",
        details: {
          title: "Noisemeter",
          subtitle:
            "Concept design and prototype of a smart watch app that record decibel exposure and informs the user when a decibel threshold has been met.",
          img: "noisemeter.jpg",
          carousel: ["noise/design_vs_impl.jpg", "noise/designs.jpg", "noise/sketch.jpg", "noise/uml.jpg"],
          paragraphs: [
            {
              title: "Summary",
              content:
                "The Noisemeter is a designed and prototyped concept for an ap for wearables which record ambient decibel over time. The concept is based on the fact that exposure to sound becomes hazardous even at lower decibels, if the exposure is prolonged. Where 115 dB is hazardous after 30 seconds of exposure, 85 dB for eight hours could also damage your hearing. While 115db is likely to be immediately perceived as hazardous, 85dB might ‘go under the radar’. Specially if one’s attention is focused elsewhere, such as conversation in a crowded bar. The app aims at solving this by recording the dB over time with the option to get a notification if the average dB exceeds the threshold for a certain time limit. However, this is not the only benefit from using the app. Studies have shown that noisy environments can increase fatigue. By being conscious of the exposure to sound over time, users can make decisions that in the long run reduces fatigue due to noise exposure.",
              img: "noise/designs.jpg"
              },
            {
              title: "What is it",
              content:
                `This is the answer to a group project in mobile computing. We ideated, designed and prototyped, in code, a wearable app for smartwatches. The app records dB by taking samples every thirty seconds, each thirty second measurement representing one data point. These datapoints are then drawn as lines emitting from the center of the screen, going outwards. The length of the line is relative to the dB value. Longer is higher. Depending on the settings, the user can either see values for the current hour, making the lines an approximation of how late in the hour it is; or the user can see values for a 12 hour period, providing insight into the average dB during the day or night. This also serves as an approximation of the current hour.`,
              img: "noise/sketch.jpg"
              },
            {
              title: "How did we do it",
              content:
                `We follow a common design thinking design process with empathize, define, ideate and prototype phases. Emphasis was put on ideate and prototype as we had already decided on an idea before the project started. Because a working prototype in code was a requirement for the course, we divided the team into two parts, design and implementation. Design produced deliverables and requirements for implementation which then implemented them in code. During this, design iterated on the design, adding features and making design changes to improve the overall design. These changes were then handed over to implementation and so on until deadline.`,
              img: "noise/design_vs_impl.jpg"
              },
  
          ],
        },
      },
      {
        cardtitle: "ai quiz game",
        href: "ai",
        svg: "ai.svg",
        details: {
          title: "AI Quiz Game",
          subtitle:
            "Wizard of OZ prototype of an AI driven Quiz game for drivers in level 3 Autonomous Vehicles.",
          img: "car.jpg",
          paragraphs: [
            {
              title: "To be written",
              content:
                "Aliquam pulvinar, diam ut condimentum feugiat, ante velit tincidunt sapien, quis hendrerit augue lacus rhoncus erat. Nullam fringilla sagittis lectus sit amet tempor. Phasellus quis urna scelerisque, faucibus ante nec, ullamcorper diam. Curabitur laoreet orci felis, vitae tempor sem accumsan sed. Donec eget tristique nibh. Maecenas sollicitudin justo nec risus cursus pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla metus ex, scelerisque sed ultricies nec, condimentum vitae tortor. Cras tempus mollis ex quis accumsan. Mauris ut auctor enim, sed lobortis tortor. Phasellus tempor quam vel elit convallis venenatis. Sed suscipit nunc vel nulla porta, a placerat mi ornare.",
            },
  
          ],
        },
      },
      {
        cardtitle: "toy renter app",
        href: "app",
        svg: "renter.svg",
        details: {
          title: "Toy Renter App",
          subtitle:
            "An App where parents can rent and lend toys which their kids doesn't use any more.",
          img: "renter_backdrop2.jpg",
          carousel: ["renter/start_and_profile.jpg", "renter/renter_find.jpg", "renter/renter_details_and_rent.jpg", "renter/renter_request_and_view.jpg", "renter/renter_loan_details_and_return.jpg", "renter/lender_create_and_view.jpg", "renter/lender_incoming_and_accept.jpg"],
          paragraphs: [
            {
              title: "Summary",
              content:
                `Prologue: To avoid confusion, people wanting to rent things out are called lenders. People who want to rent things are called renters. </br></br>
                This is my answer to an individual home exam / project in Mobile Computing. The task was to design an app that families with children can use to rent things from each other. The design should display how users navigate the app to fulfill the goal of either renting and object or putting an object out for rent. We also had to select a platform for our app, for this project I went with android and thus choose googles material design system to guide my design. 
                `,
                img: "renter/start_and_profile.jpg"
            },
            {
              title: "The task",
              content:
                `The design should afford users to navigate available items, search for objects to rent, view the price of an item, see when and for how long the item is available. See a picture and a short description of the item. Furthermore, when a user decides to rent an item, they should be able to input all necessary information to rent the item. These details should only be entered once, and the app should then remember them. Thus, the design should allow for users to see what information is stored and manipulate this information (a profile in short).`,
              img: "renter/renter_find.jpg",
              },
            {
              title: "The solution",
              content:
                `We were left with some creative liberties in how the actual renting would work. On one end, the app can act as a medium of contact where people who want to rent out items can list their items out for rent and those who want to rent can find these listings, letting the two parties solve the details after the first contact has been made. On the other end, the app (and the company behind) it can offer full service with payment options and deliveries/pickups. For this project I lean towards the former end, putting the physical transaction of items on the renting parties. Payments are made directly using Swish, a cooperation between banks that let users transfer money between themselves using only mobile phone numbers. It should be noted that there is a potential business model here, where the company manages the transaction of money.`,
                img: "renter/renter_details_and_rent.jpg",
              },
            {
              title: "The design",
              content:
                `Because of this decision, I designed screens for both the lender and the renter, showing the interplay between the parties from each perspective. In short it goes like this: The lender puts up a listing of an object they want to rent out. A renter makes a rent request for a given period, with start and end dates and time. The lender either accepts or declines the request. If the request is accepted, both parties are notified that they have a pending rent/lend session. The parties meet up at the provided start date and payment is completed using swish. During the period, the rent/lend session changes status to ongoing. When the period comes to an end, both parties are notified that a rent/lend session is about to expire. Finally, at the end time, parties meet up and the item is returned to the lender`,
                img: "renter/lender_create_and_view.jpg",
              },
          ],
        },
      },
      {
        cardtitle: "trending Movies",
        href: "trending",
        svg: "trending.svg",
        details: {
          title: "Trending movies",
          subtitle:
            "A web app that fetches trending movies from an API",
          img: "trending-movies2.jpg",
          paragraphs: [
            {
              title: "Description",
              content:
                "This is a simple react project which requests trending movies from the OMDB API. The project is built entirely using functional components and react hooks, and semantic UI for designing UI elements. The response contains information about 20 movies, the root page provides summary information such as: a 80 character description, poster and low-resolution average rating; about each movie in a card. The user can then choose to read more to get the full synopsis, exact rating as well as the relevant genres. The response from OMDB is stored in local storage for one day to avoid making unnecessary requests. I built this because I wanted an easy way to see new and popular movies.",
                link: {
                  url: "https://jwpihlgren.github.io/trending-movies",
                  name: "Link to trending movies"
                }

            },
          ],
        },
      },
    ],
  },

  resume: [
    {
      title: "UX Designer",
      company: "Värderingsdata",
      city: "Gothenburg",
      country: "Sweden",
      startYear: "2021",
      endYear: "Present",
    },    {
      title: "IT Consultant",
      company: "Värderingsdata via Nexer Group",
      city: "Gothenburg",
      country: "Sweden",
      startYear: "2021",
      endYear: "2021",
    },    {
      title: "IT Consultant",
      company: "Värderingsdata via Sigma Young Talent",
      city: "Gothenburg",
      country: "Sweden",
      startYear: "2020",
      endYear: "2021",
    },
    {
      title: "Interaction Design M. Sc",
      company: "Chalmers University of Technology",
      city: "Gothenburg",
      country: "Sweden",
      startYear: "2018",
      endYear: "2020",
    },
    {
      title: "Warehouse Operator",
      company: "TNT",
      city: "Gothenburg",
      country: "Sweden",
      startYear: "2016",
      endYear: "Present",
    },
    {
      title: "Teaching Assistant",
      company: "Chalmers University of Technology",
      city: "Gothenburg",
      country: "Sweden",
      startYear: "2019",
      endYear: "2019",
    },

    {
      title: "Cognitive Science B. Sc",
      company: "University of Gothenburg",
      city: "Gothenburg",
      country: "Sweden",
      startYear: "2015",
      endYear: "2018",
    },

    {
      title: "Light Infantry Rapid Reaction Group Comander",
      company: "Swedish Armed Forces",
      city: "Gothenburg",
      country: "Sweden",
      startYear: "2011",
      endYear: "2015",
    },
  ],

  competences: [
    {
      skill: "Self taught",
      svg: "figma.svg",
      title: "Figma",
    },
    {
      skill: "15 HEC",
      svg: "java.svg",
      title: "Java",
    },
    {
      skill: "Self taught",
      svg: "react.svg",
      title: "React.js",
    },
    {
      skill: "7.5 HEC",
      svg: "js.svg",
      title: "JavaScript",
    },
    {
      skill: "Web Dev Bootcamp",
      svg: "html5.svg",
      title: "HTML 5",
    },
    {
      skill: "Web Dev Bootcamp",
      svg: "css.svg",
      title: "CSS 3",
    },
    {
      skill: "7.5 HEC",
      svg: "android.svg",
      title: "Android",
    },
    {
      skill: "Self taught",
      svg: "git.svg",
      title: "Git",
    },
    {
      skill: "Self taught",
      svg: "python.svg",
      title: "Python",
    },
    {
      skill: "Self taught",
      svg: "bootstrap.svg",
      title: "Boostrap",
    },
    {
      skill: "Self taught",
      svg: "semantic.svg",
      title: "Semantic UI",
    },
    {
      skill: "Self taught",
      svg: "angular.svg",
      title: "Angular",
    },
    {
      skill: "Self taught",
      svg: "typescript.svg",
      title: "Typescript",
    },
  ],
  footer: {
    copyright: `© Copyright 2021 Joachim Pihlgren`,
    email: {
      text: `j.w.pihlgren[at]gmail.com`,
      href: `mailto:j.w.pihlgren@gmail.com`,
    },
    github: { text: `Github`, href: `https://github.com/jwpihlgren` },
    linkedin: {
      text: `LinkedIn`,
      href: `https://www.linkedin.com/in/joachim-pihlgren/`,
    },
  },
};

export default resumeData;
