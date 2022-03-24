# 'My Workout App'

V2 of workout web application built with React.js and Firebase to build, save, and view user workouts

## Project Description

I designed and built this mobile friendly, responsive workout web app with React.js, including React Hooks. I used both custom style sheets (CSS modules) with CSS3 and the Material UI (v5 4.2) library to style components. Additionally, I used Atlassian's 'react-beautiful-dnd' to add drag and drop functionality.

Areas of focus for this project include: 
- React Router to create a single page application with navigation
- Managing and Lifting State with useState() hook to dynamically change UI
- Passing workout data with props after creating in the workout builder page to the all workouts library page and to the today's workout display
- Styling React components with Material UI (v5 4.2) as well as custom CSS style sheets
- Drap and drop functionality for the workout builder so the user can order the excercises how they wish (using react-beautiful-dnd npm package)
- Creating auth pages for logging in and signing up users with simple form validation
- Saving users and their workouts to Firebase for backend functionality

## Flow of Application

1. After logging in, the first page the user sees is the workout builder where the user can create exercises by filling out input information on exercise name, setsxreps, and weight
    - The user has the ability to delete any exercises after creation
    - The user can also drag and drop workouts to edit the order of exercises within the workout
    - After completing the workout, the user can save the workout and either create more workouts or view in the all workouts page
2. The second page is where the user can view all of the workouts that they have created in the workout builder 
3. The third page is where the user can select from a drop down to view their workout that they will do for the day for easy reference

### About

This is version two of this project with many improvements from the previous version. The idea for this app came as I have been using other apps like Apple Notes and Notion to track my workouts but wanted to build something more workout specific. After completing a To Do list web app with React.js as part of an online course, I came up with this idea as many of the basic principles overlapped. I plan to use this to track my workouts on my iPhone SE so I made sure for a responsive layout perfect for that screen size.

The previous version is located on another repository and was hosted with GitHub Pages. [Workout Web App](https://charlescarr.github.io/react-workout-app/)

### Next Steps 

For the next version of this, I plan to add more functionality to have input to log the today's workout live for the actual setsxreps, weight, and order for each exercise and have a way to save past completed workouts.

### Hosting

Hosting with Firebase (will be adding live link later)