# Intro to Computational Media (Fall 2015)

## Listserv
- [Sign up for the ICM google group](https://groups.google.com/a/itp.nyu.edu/group/icm/)

## p5.js
- [p5.js](http://www.p5js.org/).  This year we are using a new JavaScript framework for ICM.  Start by [downloading the p5.js editor](http://p5js.org/download/#editor).

## Homework Wikis
- Roopa, Tuesday, 9:00-11:30: [Homework](https://github.com/ITPNYU/ICM-2015/wiki/Homework-Roopa-Tuesday)
- Shiffman, Tuesday, 12:10-2:40pm: [Homework](https://github.com/ITPNYU/ICM-2015/wiki/Homework-Shiffman-Tuesday)
- Shiffman, Wednesday, 12:10-2:40pm: [Homework](https://github.com/ITPNYU/ICM-2015/wiki/Homework-Shiffman-Wednesday)
- Dano, Wednesday, 12:10-2:40pm: [Homework](https://github.com/ITPNYU/ICM-2015/wiki/Homework-Dano-Wednesday)
- Shawn, Wednesday, 12:10-2:40pm: [Homework](https://github.com/ITPNYU/ICM-2015/wiki/Homework-Shawn-Wednesday)
- Lauren, Thursday, 12:10-2:40pm: [Homework](https://github.com/ITPNYU/ICM-2015/wiki/Homework-Lauren-Thursday-1)
- Lauren, Thursday, 3:20-5:50pm: [Homework](https://github.com/ITPNYU/ICM-2015/wiki/Homework-Lauren-Thursday-2)

## Videos
- [There are many videos](https://vimeo.com/channels/introcompmedia) from last year's ICM you could watch.  However, these videos use [Processing](http://processing.org) rather than [p5.js](http://p5js.org) so they will be much less relevant after the 0.x and 1.x chapters.  New videos are forthcoming!

## Books 
- [Make: Getting Started with p5.js: Making Interactive Graphics in JavaScript and Processing](http://amzn.to/1PmztVt) is probably your best bet for now if you are looking for a book.
- If you are interested in some supplemental reading on HTML and CSS, The [HTML & CSS book](http://www.htmlandcssbook.com/) is a nice one.

## Extra Help 
- [Research Resident Office Hours](https://itp.nyu.edu/inwiki/)
- ICM Help Session

## Inspirational Projects
- [Help contribute to this wiki!](https://github.com/ITPNYU/ICM-2015/wiki/Projects)

## Resources
- [Official p5.js website](http://www.p5js.org/)
- [p5.js forum](http://forum.processing.org/two/categories/p5-js)
- [p5.js twitter](https://twitter.com/p5xjs)
- [Processing Foundation github](https://github.com/processing)
- [Programming Terms and Environments Summary](https://itp.nyu.edu/physicalcomputing/lessons/programming/programming-terms-and-programming-environments/)
- [A Brief Introduction to Debugging](http://vimeo.com/channels/debugging) Video Series

## Syllabus

### 1 -- Introduction and Drawing
* What is computational media?
  * What is programming?
  * How can I apply programming to _____________?
  * As a ____________, why would I want or need to write software?
  * [Example projects](https://github.com/ITPNYU/ICM-2015/wiki/Projects).
* Programming language discussion
  * General discussion of programming languages
  * History of creative coding frameworks
      * Processing and p5.js (and what's processing.js?)
      * openframeworks, cinder
      * max/msp dataflow programming
      * How does arduino fit in?
* p5.js in the context of the browser
  * Landscape of HTML, CSS, and JavaScript
  * Other JS frameworks
  * Server-side vs. client-side
* Participating in an open-source community
  * What are git and github?
  * When should you post to a forum vs. file a github issue?
  * Who makes these things?
* Getting started, your first program
  * Drawing with numbers
  * Screen coordinates
  * Shape and color functions
  * Downloading p5.js
   * This year we are using a new JavaScript framework for ICM.  Start by [downloading the p5.js editor](http://p5js.org/download/#editor).
  * [p5.js reference](http://p5js.org/reference)
* Uploading your sketch
- Homework
  - Sign up for the [ITP ICM Google Group](https://groups.google.com/a/itp.nyu.edu/group/icm) (also sign up for your section's group)
  - Sign up for a [Github Account](http://github.com).  You are not required to use github, but you will need an account to edit the wiki here.
  - Create your own screen drawing: self-portrait, alien, monster, etc. Use only 2D primitive shapes – arc(), curve(), ellipse(), line(), point(), quad(), rect(), triangle() – and basic color functions – background(), colorMode(), fill(), noFill(), noStroke(), stroke().  Remember to use createCanvas() to specify the dimensions of your window.
  - Post link to your documentation and sketch on your [section's wiki](https://github.com/ITPNYU/ICM-2015/wiki).  Follow the guidelines provided on the wiki.
  - Optional viewing
     - Casey Reas [Eyeo 2012 talk](https://vimeo.com/45851523) on Chance Operations
     - [Hello Processing](http://hello.processing.org/) This is a one hour introduction to Processing that summarizes the content from the first two weeks of ICM. You might choose this over the other videos this week or wait until the second week and watch.
 - Optional reading:
     - [As We May Think](http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/), Vannevar Bush
     - [Long Live the Web](http://jblomo.github.io/webarch253/slides/Long_Live_the_Web.pdf), Tim Berners-Lee

### 2 -- Animation
- [The flow: code blocks, setup, draw, and events](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp03_flow)
- Variation: mouseX,mouseY
- [Variables: Declare, Initialize, Use](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp04_variables)
- JavaScript objects
- Array basics
- [random()](http://p5js.org/reference/#random)
- [map()](http://p5js.org/reference/#map) 
- Related Reading
   - 
- Homework
    - Create a animated application. Start over from scratch and build something with a very simple design. Focus on the logic of variables and avoid using hard-coded values. Play with mouseX and mouseY.  Start by working in pairs (according to list below).   You can post together or break off and complete the assignment individually.  If you are stuck, here are some ideas.
        - Experiment with motion using a single simple shape. Can you create a randomly jittering "nervous" square? ([Here is a sample](https://github.com/ITPNYU/ICM-2014/tree/master/exercises-inclass/week2-variables/motion/nervous_square)). A circle that spirals around the window?  How could user interaction affect the shape's motion?
        - Use [random()](http://processing.org/reference/random_.html) to create a painting system.  [Here are some examples](https://github.com/ITPNYU/ICM-2014/tree/master/exercises-inclass/week2-variables/random%20paintings).  

### 3 -- Interaction
- [Conditionals](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp05_conditionals)
    - If, else if, else
    - Boolean variables
    - Relational Operators, Logical Operators
    - Buttons, rollovers, switches
- [Loops](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp06_loops)
    - while
    - for
    - looping through an array
- Modulo
- Related Reading
    -  
- Homework

### 4 -- Functions: the basics
- Re-usability
- Modularity
- Calling vs. defining
- Arguments and parameters
- Return types
- Recursion
- Optional Readings:
  - [Work of Art in the Age of Mechanical Reproduction](http://www.berk-edu.com/VisualStudies/readingList/06b_benjamin-work%20of%20art%20in%20the%20age%20of%20mechanical%20reproduction.pdf), Walter Benjamin

### 5 -- Functions: events and callbacks
- Make some DOM eleements
- Callbacks with DOM elements
- Get data in via serial with a callback

### 6 -- Synthesis
- Description TBA

### 7 -- More on objects and arrays
- show how to add functions to object literals
- show how to make a constructor function that "makes" objects
- Make a particle system
- String objects in the context of serial

### 8 -- Data
- JSON and APIs (and more on callbacks!)
- Word Counting
- Tabular data
- Optional Reading:
  - [Art and the API](http://blog.blprnt.com/blog/blprnt/art-and-the-api), Jer Thorp 
  - [The Anxieties of Big Data](http://thenewinquiry.com/essays/the-anxieties-of-big-data/), Kate Crawford

### 9 -- Mobile
- Workflow and process, get a previous sketch running on a device
- Touch interaction
- sensors

### 10 -- Video
- Live capture
- Movie playback
- A bit on pixels
- A bit on computer vision

### 11 -- Revelation
- moving out of the IDE
- HTML/CSS itself
- other JavaScript frameworks: jquery, d3, etc.
- webgl 
- Node and server side
- Open source
  - How do artists make and adapt tools for themselves and their communities, like Processing, p5.js, openFrameworks, etc? 
  - How do you  get involved with this?
- Homework: Prepare a final project proposal.  Create a web page or blog post with title, description, sample imagery, diagrams, Processing code, etc.  Be prepared to present your proposal to the class next week.

### 12 --  Propose Final Projects
- ** See your individual section's proposal schedule on your wiki **

### 13 -- One on one speed user testing / feedback
- This week you will "user test" your project with fellow classmates. You must have some implementation that you can test completed by this time.  User testing can mean different things for different projects. For a game, it can mean that the user tries to play it. For an art piece, it could mean showing it to a classmate and asking for them to say what they think it is about or how it made them feel. We'll show projects in a "one on one" / round robin / speed dating-style session. 5 minutes then switch. You cannot not explain your project, just show and let the user try it and give you feedback. Then you can answer questions.  User testing schedule will be provided on a wiki.

### 14 -- Final Project Presentations
- Please add your link to your final project documentation on your section's wiki.

Mantras By James
----------------
- "Practice is the best of all instructors." - computation requires practice 
- "An agreeable companion on a journey is as good as a carriage." - look to your classmates for help too 
- "While we stop to think, we often miss our opportunity." - sometimes you need to take a leap of faith 
- "When two do the same thing, it is not the same thing after all." - encourage students with similar ideas 
- "The bow too tensely strung is easily broken." - don't get too stressed out 
- All of these are from Plubius Syrus.(42 B.C.) 

Previous Years
--------------
- [Old 2014 Syllabi and links](https://github.com/ITPNYU/ICM-2014/)
- [Old 2013 Syllabi and links](https://github.com/ITPNYU/ICM-2013/)
- [Old 2012 Syllabi and links](http://itp.nyu.edu/varwiki/Syllabus/ICM-All-F12)
- [Old 2011 Syllabi and links](http://itp.nyu.edu/varwiki/Syllabus/ICM-All-F11)
- [Old 2010 Syllabi and links](http://itp.nyu.edu/varwiki/Syllabus/ICM-All-F10)
- [Old 2009 Syllabi and links](http://itp.nyu.edu/varwiki/Syllabus/ICM-All-F09)
- [Old 2008 Syllabi and links](http://itp.nyu.edu/varwiki/Syllabus/ICM-All-F08)
- [Old 2007 Syllabi and links](http://itp.nyu.edu/varwiki/Syllabus/ICM-All-F07)
