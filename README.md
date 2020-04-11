# Stavvy Timeline by Thomas Freeman

## Description

This is a simple timeline component built for the technical screening of the Software Engineer position at Stavvy

Features:
- Differentiate between complete, current, and future timeline goals
- 100% written in ReactJS & TypeScript
- Viewable in StoryBook for easy UI testing
- Tested
- (Mostly) Responsive

## Instructions for Use

### Installation
1) Clone repo to a local folder
2) Navigate to that folder
3) `Npm Install`
4) Start the storybook server `npm run storybook`
5) Visit http://localhost:9001/

### Testing
To run tests: 
`npm test`

## Dev Notes
This was a fun project! Being able to focus on just one component for a couple of days really allowed me to focus in on the requirements. 

One thing I really liked about this project was being able to play with some new technologies I had never used before.

I have never written anything in TypeScript, but have always been very interested in that language so this was a great excuse to test it out! I think typed web applications are the future for anyone who is the least
bit concerned with type safety or general robustness.

Also, Storybook was new to me! Very cool! I had used some internal UI component library tooling before, but Storybook is certainly going to be my go-to when designing new UI components.


## Known bugs
- When at a very specific screen size, the lines can sometimes detach from their next circle in the timeline
- Text can overrun when sized very small
- Overall I think the design could probably use some refining. While I dont think that it is horrible to look at, the component would probably benefite from someone with a greater eye for UI.
