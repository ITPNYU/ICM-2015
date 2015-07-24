# Intro to Computational Media (Fall 2015)

## Listserv
- [Sign up for the ICM google group](https://groups.google.com/a/itp.nyu.edu/group/icm/)


## p5.js
- [p5.js](http://www.p5js.org/).  This year we are using a new JavaScript framework for ICM.  Start by [downloading the p5.js editor](http://p5js.org/download/#editor).

## Homework Wikis
* TK!

## Videos
- TK!

## Books 
- TK!

## Extra Help 
- [Research Resident Office Hours](https://itp.nyu.edu/inwiki/)
- ICM Help Session

## Inspirational Projects
- TK!

## Resources
- [Official p5.js website](http://www.p5js.org/)
- [p5.js forum](http://forum.processing.org/two/categories/p5-js)
- [p5.js twitter](https://twitter.com/p5xjs)
- [Processing Foundation github](https://github.com/processing)
- [Programming Terms and Environments Summary](https://itp.nyu.edu/physicalcomputing/lessons/programming/programming-terms-and-programming-environments/)
- [A Brief Introduction to Debugging](http://vimeo.com/channels/debugging) Video Series

# Introduction to Computational Media Syllabus

## Week 1 -- Introduction and Drawing
- Why are we here? What is computational media?  What is programming? What is it good for? What kinds of programming languages are there?
- Algorithmic Thinking
- What is p5.js?  Why p5.js?
- Server-side vs. client programming
- Things made with p5.js (link TK)
- Drawing with numbers
- Screen coordinates
- Shape and color functions
- [p5.js reference](http://p5js.org/reference)
- Uploading your sketch
- Watch
    - Casey Reas [Eyeo 2012 talk](https://vimeo.com/45851523) on Chance Operations
    - _______________________
    - [Hello Processing](http://hello.processing.org/) This is a one hour introduction to Processing that summarizes the content from the first two weeks of ICM. You might choose this over the other videos this week or wait until the second week and watch.
- Related Reading
    - _____________________________ 
- Downloading p5.js
   - This year we are using a new JavaScript framework for ICM.  Start by [downloading the p5.js editor](http://p5js.org/download/#editor).
- Homework
    - Sign up for the [ITP ICM Google Group](https://groups.google.com/a/itp.nyu.edu/group/icm) (also sign up for your section's group)
    - Create your own screen drawing: self-portrait, alien, monster, etc. Use only 2D primitive shapes – arc(), curve(), ellipse(), line(), point(), quad(), rect(), triangle() – and basic color functions – background(), colorMode(), fill(), noFill(), noStroke(), stroke().  Remember to use createCanvas() to specify the dimensions of your window.
    - Sign up for a [Github Account](http://github.com).  You are not required to use github, but you will need an account to edit the wiki here.
    - Post a link to your work on your [section's wiki](https://github.com/ITPNYU/ICM-2015/wiki).  Follow the guidelines provided on the wiki.
    - Some additional examples: https://github.com/shiffman/LearningProcessing-p5.js -- take a look at Chapter 1 and 2 (3 if you are feeling ambitious).

Week 2 -- Animation
-----------------------------
- [The flow: code blocks, setup, draw, and events](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp03_flow)
- Variation: mouseX,mouseY
- [Variables: Declare, Initialize, Use](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp04_variables)
- JavaScript objects
- [random()](http://p5js.org/reference/#random)
- [map()](http://p5js.org/reference/#map) 
- Related Reading
   - 
- Watch (previews next week's content)
   - 
- Homework
    - Create a animated application. Start over from scratch and build something with a very simple design. Focus on the logic of variables and avoid using hard-coded values. Play with mouseX and mouseY.  Start by working in pairs (according to list below).   You can post together or break off and complete the assignment individually.  If you are stuck, here are some ideas.
        - Experiment with motion using a single simple shape. Can you create a randomly jittering "nervous" square? ([Here is a sample](https://github.com/ITPNYU/ICM-2014/tree/master/exercises-inclass/week2-variables/motion/nervous_square)). A circle that spirals around the window?  How could user interaction affect the shape's motion?
        - Use [random()](http://processing.org/reference/random_.html) to create a painting system.  [Here are some examples](https://github.com/ITPNYU/ICM-2014/tree/master/exercises-inclass/week2-variables/random%20paintings).  

Week 3 -- Interaction
-----------------------------
- [Conditionals](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp05_conditionals)
    - If, else if, else
    - Boolean variables
    - Relational Operators, Logical Operators
    - Buttons, rollovers, switches
- [Loops](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp06_loops)
    - while
    - for
- Modulo
- Related Reading
    -  
- Watch (preview next week's content)
    -   
- Supplemental Reading
    - ["Hackers and Painters"](http://www.paulgraham.com/hp.html) by Paul Graham
- Homework

Week 4 -- Functions: the basics
-----------------------------
- [Functions](https://github.com/shiffman/LearningProcessing/tree/master/chp07_functions)
    - Re-usability
    - Modularity
    - Calling vs. defining
    - Arguments and parameters
    - Return types
    - Recursion

Week 5 -- Functions: events and callbacks
------------------------------
- Basic DOM intro
- callbacks with DOM elements
- simple strings and loading data with a callback
- serial with a callback

Week 6 -- Repetition and Reproduction
-----------------------------
- [Review loops](https://github.com/shiffman/LearningProcessing/tree/master/chp06_loops)
- [Arrays](https://github.com/shiffman/LearningProcessing/tree/master/chp09_arrays)
- [A String is like an array of characters](http://processing.org/learning/text/) 
- reinforce serial examples by showing them in the context of strings
- [An image is like an array of pixels](http://processing.org/learning/pixels/) 

Week 7 -- Object-oriented programming
- show how to add functions to object literals
- show how to make a constructor function that "makes" objects
- reinforce anything leftover we need for serial

Week 8 -- Pixels
--------------------------------
- Images
    - Load and display images
    - Writing pixels to screen
    - Reading image pixels, image processing: brightness, threshold, etc
    - [Chapter 15 examples](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp15_images_pixels)
    - In class exercise: make an interactive image processing filter
- Video: 
    - Live video (Capture) and movie playback (Movie)
    - Drawing shapes on screen colored by pixels
    - [Chapter 16 examples](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp16_video)
    - Exercise: Make a mirror that paints your portrait
- Computer vision:

- Homework: Pixels Project
    - Develop a project that uses images and pixels.  For this project you should document your work in a blog post in addition to creating the Processing sketch.  You can present in class using your laptop or put your sketch into dropbox.  Here are some ideas:
        - Create a software mirror by designing an abstract drawing machine which you color according to pixels from live video.
        - Make a slideshow of images. Check out this [Crossfade Effect](https://github.com/shiffman/LearningProcessing/tree/master/chp15_images_pixels/exercise_15_11_crossfade).
        - Make a "VJ turntable" for video. Check out [Movie Scrub](https://github.com/shiffman/LearningProcessing/tree/master/chp16_video/example_16_05_MovieScrub).
        - Use OpenCV face tracking and create a particle system that emanates from a person's mouth or eyes or. . . .?
    - Note that only the names in bold (1/2 of the class) on the wiki will present next week. The second half will present the "data" assignment the following week. You should all complete both assignments, however, and of course you can present both weeks if you have a question or something you really want to get feedback on. Feel free to switch with each other or e-mail me if you would like to switch.

Week 9 -- Data
-----------------------------
- Pixel project presentations.  
- Word Counting
- Tabular data
- JSON and APIs (more on callbacks!)

Week 10 -- Bonus Topics (we will not do all of these in class but there will be a sampling)
-----------------------------
-  Sound
-  webgl 
-  createGraphics
-  p5.Vector
-  Node and server side
-  moving out of the IDE
- Homework: Prepare a final project proposal.  Create a web page or blog post with title, description, sample imagery, diagrams, Processing code, etc.  Be prepared to present your proposal to the class next week.

Week 11 --  Propose Final Projects
-----------------------------
- ** See your individual section's proposal schedule on your wiki **

Week 12 -- One on one speed user testing / feedback
-----------------------------
- This week you will "user test" your project with fellow classmates. You must have some implementation that you can test completed by this time.  User testing can mean different things for different projects. For a game, it can mean that the user tries to play it. For an art piece, it could mean showing it to a classmate and asking for them to say what they think it is about or how it made them feel. We'll show projects in a "one on one" / round robin / speed dating-style session. 5 minutes then switch. You cannot not explain your project, just show and let the user try it and give you feedback. Then you can answer questions.  User testing schedule will be provided on a wiki.

Week 13 -- Final Project Presentations
-----------------------------
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
