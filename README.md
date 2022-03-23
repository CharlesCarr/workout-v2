# Workout Web App

V2 of workout web application built with React.js and Firebase to build, save, and view user workouts

## Project Description

I designed and built this mobile friendly, responsive workout web app with React.js, including React Hooks. I used both custom style sheets with CSS3 and the Material UI (v5 4.2) library to style components. Additionally, I used Atlassian's 'react-beautiful-dnd' to add drag and drop functionality.

Areas of focus for this project include: 
- React Router to create a single page application with navigation
- Managing and Lifting State with useState() hook to dynamically change UI
- Passing workout data with props after creating in the workout builder page to the all workouts library page and finally to the today's workout display
- Styling React components with Material UI (v5 4.2) as well as custom CSS style sheets
- Drap and drop functionality for the workout builder so the user can order the excercises how they wish (using react-beautiful-dnd npm package)

## Flow of Application

1. The first page the user sees is the workout builder where the user can create exercises by filling out input information on exercise name, setsxreps, and weight
    - The user has the ability to delete any exercises after creation
    - The user can also drag and drop workouts to edit the order of exercises within the workout
    - After completing the workout, the user can save the workout and either create more workouts or view in the all workouts page
2. The second page is where the user can view all of the workouts that they have created in the workout builder 
3. The third page is where the user can select from a drop down to view their workout that they will do for the day for easy reference

### About

This is my first independent React.js web application that I have built that was not a part of a course / tutorial. The idea for this app came as I have been using other apps like Apple Notes and Notion to track my workouts but wanted to build something more workout specific. After completing a To Do list web app with React.js as part of an online course, I came up with this idea as many of the basic principles overlapped.

### Next Steps 

My plan is for this to be the initial version one of the this project with style improvements and features to be added soon. 

A few additions I have in mind: 
- I plan to build additional functionality for this app with creating a workout plan for the entire week from the library of workouts in the 'all workouts' page. 
- I also plan to add more functionality to have input to log the today's workout live for the actual setsxreps, weight, and order for each exercise. 
- Additionally, I will create a backend for this with a user profiles and create an iOS verison after learning more about React Native. 

### Hosting

Will be hosting with Firebase