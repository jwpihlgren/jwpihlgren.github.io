const resumeData = {
  navItems: {
    home: {
      path: "/react-portfolio/",
      hash: "",
    },
    portfolio: { 
      path: "/react-portfolio/",
      hash: "#portfolio"
    },
    resume: { 
      path: "/react-portfolio/",
      hash: "#resume"
    },
    competences: {
      path: "/react-portfolio/",
      hash: "#competences"
    },
  },
  logo: "joachim pihlgren",

  cards: {
    linkname: "read more",
    projects: [
      {
        cardtitle: "Cross-device UI",
        href: "xdi",
        svg: "xdi2.svg",
        details: {
          title: "Cross-device UI",
          subtitle:
            "A socio-spatial experience where sight is substituted with ultrasonic range finders and vibration motors.",
          img: "cybox.jpg",
          carousel: ["XDI/xdi_1.jpg", "XDI/designprocess.jpg", "XDI/insight.jpg", "XDI/roomspaces.jpg", "XDI/FlödesdiagramSpaces.jpg", "XDI/sketches.jpg", "XDI/mobile_Start.jpg", "XDI/mobilescreens.jpg", "XDI/desktop_start.jpg", "XDI/scan_barcode.jpg", "XDI/experimentdesign.jpg"],
          paragraphs: [
            {
              title: "Summary",
              content:
                `For the master’s thesis, my thesis partner and I worked with Sweco to provide them with guidelines and design alternatives for a system of user interfaces which afford cross-device interaction. The aim of the thesis was to enable collaboration between different actors interacting with a building information model and provide a fun experience while doing so. We conducted a design thinking inspired design process where we went through the empathize, define, ideate, prototype and evaluation phases. This involved conducting interviews with stakeholders at the company to find pain points in current tools as well as factors that hindered collaboration. This data was then analyzed to provide insights that would be used to guide the design choices in the design and prototype phase. We also investigated interaction techniques presented in academic literature, providing us with a list of both common and not so conventional interaction techniques for cross-device interaction specifically. The design was created in an iterative manner with many small evaluations helping to work out kinks and faults in the design. Finally, the system of interfaces, made up of one interface for smartphone form factors and one interface for desktop/laptop form factors, was evaluated with stakeholders from the company to see how well the system of interfaces performed in terms of usability and user experience.`,
            },
            {
              title: "The problem",
              content:
                `Sweco is developing a tool that allow clients to manage their own building information models in a meaningful way, without the need of architects or BIM-coordinators. The tool needs to afford users which are not trained in working with BIM to manage information relating to the models without the need for advanced training. Further it is the wish of Sweco that the tool should allow users to work on one device and continue their work on another device, XDI, seamlessly. In order to provide this in the best way possible, Sweco wants guidelines for implementing XDI and suggestions of designs which follow these guidelines.` ,
              },
              {
                title: `Design process`,
                content: `We adopted and modified a standard design processes described by @Rikke F. Dam and Yu S. Teo@ https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process , with empathize, define, ideate, prototype and test. But because we entered an existing design process, the tool was already in development, we wanted to explore different possible designs of the same solution. We made this explicit in our design processes by allowing for multiple prototypes and testing and comparing these against each other`,
                img: `XDI/designprocess.jpg`
              },
              {
                title: `Empathize`,
                content: `In order to ground ourselves we needed to read up on the current literature on cross-device interaction. We conducted an extensive literature study on cross-device interaction and virtual spaces. We looked in to the latter because we saw potential in viewing digital representations of physical space as virtual spaces because we could then transfer interaction techniques and other bits of knowledge from this domain to cross-device interaction in a BIM context. However, due to limitations in time and scope, this potential was left for future work. </br></br>
                We conducted interviews with employees at Sweco in order to both get a greater insight into what tasks they are currently solving for their customers and what drawbacks exist in the current workflows and systems. These interviews also provided us with a context and the different stakeholders which interplay in that context. It could have been beneficial to address the intended end users here, but we chose not to because of two main reasons. One, the end user is not currently solving the tasks that the tool aims at affording them to solve, i.e. asking them questions that relates to solving those tasks would only yield speculation, at the risk of causing confusion. Secondly, at the time all details concerning the tool were sensitive in nature and we ran the risk of not being able to provide interviewees with enough information about the tool to answer our questions, without entering NDA Gehenna. </br></br>
                All interviews were conducted by both my colleague and me, one acting as the interviewer and the other as observer and transcriber. The interviews were also recorded on audio to aid the observer and safeguard against misinterpretations and other potential errors. </br></br>
                After the interviews we needed to analyze and extract concrete insights from the data we had collected. Firstly, all interviews were sanitized and corrected using the recorded audio, then the transcriptions were divided in to concrete datapoints based on coherence. Secondly, we analyzed the data using inductive qualitative content analysis using holistic coding. This is done by each member of a team providing one or more sentence level codes that describe the core meaning of the sentence, for a subset of the total data set. Then all members of the team gather and go through the codes, consolidating similar ones, removing bad ones etc. until finally a set of codes is produced which is then applied to the whole data set. One can then continue to do the same with word level codes for each sentence. One is then left with a set of word level codes which can easily be put into categories. This is what we did next. </br></br>
                With the data codified we continued with affinity diagramming. This allows teams to find categories in a data set by grouping data points in perceived categories in many iterations. I.e. data points that sorted under the category ‘problems’ could be divided into several other categories the next iteration. This gave us an overview of our insights by means of categories such as ‘means of cooperation’, potential pitfalls and so on.

                `,
                img: `XDI/insight.jpg`
              },
              {
                title: `Define`,
                content: `With this new insight, we had to define what should be designed in more concrete terms. We conducted a workshop with a key stakeholder at Sweco. During this workshop we created operational definitions, the scope of the design and merged our newly found insights (representing future users) with the needs of Sweco (as a future provider). Among others we created user stories based on: “As an X I need to Y because of Z”. This helped us define a minimal viable product in terms of the tool we were creating. </br></br>
                This is where we had to abandon the thought of viewing BIM models as virtual spaces. We had ideas concerning projecting room before they’re built in physical space and connected sensors to monitor real space in real time by means of virtual counter parts. But these are all peripheral activities when put against the main goal of managing BIM models in a cross-device fashion. Thus, we focused on functionality to achieve this goal, creating, editing and deleting spaces in BIM, to information to these spaces and more importantly, moving between devices while doing so.
                `,
                img: `XDI/FlödesdiagramSpaces.jpg`
              },
              {
                title: `Ideate`,
                content: `We knew from the start that we wanted to explore designs that were fundamentally different to avoid getting stuck in a local maximum of utility and user experience. The idea was that we would sketch two designs in parallel and then put them up against each other to see which one was better. However, designing only, the one system of interfaces proved time consuming enough such that we had to change our approach. Instead we designed a system of interfaces, one interface for mobile and one for desktop, that both allow users to complete a set of tasks related to creating spaces and managing their information. We then explored different interaction techniques for cross-device interaction between these interfaces. This left us with one system of interfaces with two implementations of cross-device interaction: conventional interaction methods such as click and search and select, and non-conventional interaction techniques such as scanning barcodes and shaking the device. </br></br>
                We started designing the system of interfaces by sketching our possible ways of completing a set of tasks by hand, for mobile first. This allowed us to rapidly iterate on screens until the set of tasks could be completed, meaning that we conducted usability testing on each iteration internally in the team. When we were done with the mobile screens, we conducted usability testing on the hand drawn sketches with a stakeholder at Sweco. This was done by importing images of the screens we had drawn in to Figma and creating interactive elements above which allowed the stakeholder to click through the screens as if they were interacting with the design. After this test, we moved the design in to the prototype phase, creating an interactive mockup with a higher fidelity.</br></br>
                This phase continued similarly to how we sketched the designs by hand, iterating and testing as we went on. As the design took a more mature form, new questions arose from our continuous interaction with the interface, such as what happens if x? How would y be done etc. This helped hone the design as well as introduce new functionality and improve our set of tasks that needed to be completed. Again, we tested with a stakeholder at Sweco when the interactive mockup was ready. At this point we started designing for desktop. Because we wanted to maintain consistency between the interfaces, a criteria for cross-device interface usability and experience, we based the desktop design on the mobile, basically unfolding processes that were put on separate screens on to one larger screen with more real estate. Again, we designed iteratively, testing with a stakeholder at Sweco when we were done.</br></br>
                With the system of interfaces now done, it was time to implement the cross-device interaction. As stated previously, we designed both conventional and non-conventional interaction. During our literature study we found bodies of techniques for both interaction kinds. For conventional we went with search and select, meaning that devices you want to move to are displayed and selected from in a list. This technique was shown to be the most intuitive in a study surveying different ways of connecting devices. For non-conventional we had a list of close to 100 techniques, however only a handful of techniques were feasible as they didn’t rely on special equipment such as 3D sensors or interactive tabletops. As mentioned earlier we went with scanning barcodes and shaking device. This means that users can move between devices either by a) producing a barcode on the device they’re moving from and scanning that barcode with the device they’re moving to. Or by b) shaking the device they want to move from, broadcasting a request to transfer to devices in the vicinity and then accepting that request on the device they want to move to. Again, this was designed iteratively, testing internally in between iterations and finally with a stakeholder.
                `,
                img: `XDI/sketches.jpg`
              },
              {
                title: `Evaluate`,
                content: `By now we had a system of interfaces that allow users to create and edit spaces in BIM while also moving between devices when doing so. With this, we moved into the final phase, evaluation. We wanted to test both how well users could accomplish the set of tasks we can designed for as well as how well they could move between the devices. We also had to counter training effects and fatigue to get reliable test data. To do this, we set up a large-scale usability test. We used @maze.design@ https://maze.design which lets users import interactive prototypes and create usability tests with mission descriptions, missions with expected paths in the prototype, surveys and much more. The test was divided in to two parts, going from mobile to desktop and going from desktop to mobile. Half of the evaluators the former part and the other half did the latter part. This way we could see if there were any difference in usability between mobile and desktop. Internally in each group, evaluators completed tasks with both conventional and non-conventional interaction techniques, in randomized order. This meant we could see if there were differences between the kinds of interaction techniques as well as counter any effects on the data. We tested with six employees at Sweco that solve similar tasks in their line of work. It would have been optimal at this point to test with real end users but again the sensitive nature of the project inhibited us from doing so. `,
                img: `XDI/experimentdesign.jpg` 
              },
              {
                title: `The results`,
                content: `The results from the evaluations showed that the system of interfaces was indeed usable but needed some work still. The majority of the problems were related to moving between devices and the user’s mental model of what was happening and how it was supposed to be done. This is to be expected as we hadn’t tested with external users other than select stakeholders. It is also likely that these mental models will differ in the real end-users as well. The evaluations also pointed out some interesting aspects such as potential data security issues with broadcasting requests by shaking devices. The issue here is not digital but human, how can we relate to users when it is safe to broadcast requests. Another interesting finding was the potential for voice interaction with the interfaces and how this could be coupled with smart wearables such as fit bits and smart watches.`,
                img: `XDI/desktop_start.jpg` 
              },
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
          paragraphs: [
            {
              title: "The problem",
              content:
                "Universeum is a science center created by actors in both the government as well as the private sector. They aim at teaching both children and adults about science and technology by means of play and wonder. Recently Universeum has perceived a decline in the interest of technology in teenagers compared to their younger peers. In order to turn this decline around, Universeum and Chalmers University of Technology started collaborating, letting Master’s students in Interaction Design, design for learning in specific themes using interactive means. This time the theme was showing the invisible. The main goals were to both increase interest in technology as well as providing a learning oppurtunity  as visitors to the science park engaged with the items of the exihibition.",
            },
            {
              title: "The other thing",
              content:
                `Universeum is a @jwpihlgren.io https://jwpihlgren.github.io some words between @TEST https://www.gp.se science center created by actors in both the government as well as the private sector. They aim at teaching both children and adults about science and technology by means of play and wonder. Recently Universeum has perceived a decline in the interest of technology in teenagers compared to their younger peers. In order to turn this decline around, Universeum and Chalmers University of Technology started collaborating, letting Master’s students in Interaction Design, design for learning in specific themes using interactive means. This time the theme was showing the invisible. The main goals were to both increase interest in technology as well as providing a learning oppurtunity  as visitors to the science park engaged with the items of the exihibition.`,
              img: "cybox.jpg",
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
          paragraphs: [
            {
              title: "The problem",
              content:
                "Universeum is a science center created by actors in both the government as well as the private sector. They aim at teaching both children and adults about science and technology by means of play and wonder. Recently Universeum has perceived a decline in the interest of technology in teenagers compared to their younger peers. In order to turn this decline around, Universeum and Chalmers University of Technology started collaborating, letting Master’s students in Interaction Design, design for learning in specific themes using interactive means. This time the theme was showing the invisible. The main goals were to both increase interest in technology as well as providing a learning oppurtunity  as visitors to the science park engaged with the items of the exihibition.",
            },
            {
              title: "The other thing",
              content:
                "Universeum is a science center created by actors in both the government as well as the private sector. They aim at teaching both children and adults about science and technology by means of play and wonder. Recently Universeum has perceived a decline in the interest of technology in teenagers compared to their younger peers. In order to turn this decline around, Universeum and Chalmers University of Technology started collaborating, letting Master’s students in Interaction Design, design for learning in specific themes using interactive means. This time the theme was showing the invisible. The main goals were to both increase interest in technology as well as providing a learning oppurtunity  as visitors to the science park engaged with the items of the exihibition.",
              img: "Watchface.jpg",
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
              title: "The problem",
              content:
                "Universeum is a science center created by actors in both the government as well as the private sector. They aim at teaching both children and adults about science and technology by means of play and wonder. Recently Universeum has perceived a decline in the interest of technology in teenagers compared to their younger peers. In order to turn this decline around, Universeum and Chalmers University of Technology started collaborating, letting Master’s students in Interaction Design, design for learning in specific themes using interactive means. This time the theme was showing the invisible. The main goals were to both increase interest in technology as well as providing a learning oppurtunity  as visitors to the science park engaged with the items of the exihibition.",
            },
            {
              title: "The other thing",
              content:
                "Universeum is a science center created by actors in both the government as well as the private sector. They aim at teaching both children and adults about science and technology by means of play and wonder. Recently Universeum has perceived a decline in the interest of technology in teenagers compared to their younger peers. In order to turn this decline around, Universeum and Chalmers University of Technology started collaborating, letting Master’s students in Interaction Design, design for learning in specific themes using interactive means. This time the theme was showing the invisible. The main goals were to both increase interest in technology as well as providing a learning oppurtunity  as visitors to the science park engaged with the items of the exihibition.",
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
  ],
  footer: {
    copyright: `© Copyright 2020 Joachim Pihlgren`,
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
