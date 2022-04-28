# 'My Workout App'

[Live App Link](https://workout-tracker-faa13.web.app/)
Workout web application built with React.js and Firebase to easily build, save, view and user workouts

## Project Description

I designed and built this mobile friendly, responsive workout web app with React.js, including React Hooks. I used both custom style sheets (CSS modules) with CSS3 and the Material UI (v5 4.2) library to style components. Additionally, I used Atlassian's 'react-beautiful-dnd' to add drag and drop functionality.

#### Areas of Focus 
- React Router to create a single page application with navigation
- Managing and Lifting State with useState() hook to dynamically change UI
- Passing workout data with props after creating in the workout builder page to the all workouts library page and to the today's workout display
- Styling React components with Material UI (v5 4.2) as well as custom CSS style sheets
- Drap and drop functionality for the workout builder so the user can order the excercises how they wish (using react-beautiful-dnd npm package)
- Creating auth pages for logging in and signing up users with simple form validation
- Saving users and their workouts to Firebase Authentication and Realtime Database for backend functionality

#### Challenges
Passing user form data (nested arrays of objects) through multiple component layers presented some challenges at first but really helped me with building my React skillset. As I have moved on to other projects these JS methods and mental approach has been extremely helpful in seamlessly working with other nested data.

## Flow of Application / How to Navigate

1. After signing up and logging in, the first page the user sees is the workout builder where the user can create exercises by filling out input information on exercise name, setsxreps, and weight
    - The user has the ability to delete any exercises after creation
    - The user can also drag and drop workouts to edit the order of exercises within the workout
    - After completing the workout, the user can save the workout and either create more workouts or view in the all workouts page
2. The second page is where the user can view all of the workouts that they have created in the workout builder. In this page the user can also delete a workout from their workout library
3. The third page is where the user can select from a drop down to view their workout that they will do for the day for easy reference

## Background

#### Why I Built This
The idea for this app came as I have been using other apps like Apple Notes and Notion to track my workouts but wanted to build something more workout specific. After completing a To Do list web app with React.js as part of an online course, I came up with this idea as many of the basic principles overlapped. I plan to use this to track my workouts on my iPhone SE so I made sure for a responsive layout perfect for that screen size. A goal of mine was to have the workout builder have drag and drop functionality for added customization so I made sure to find an appropriate library. 

#### Previous Version
The previous version is located on a separate repository and was hosted with GitHub Pages. After completing the first version of the app I wanted to include the ability to create user profiles and save workouts so opted to learn more about Firebase to do so. Additionally, I improved the UI/UX as well as a few bugs with the hosting configuration.
[Workout Web App](https://charlescarr.github.io/react-workout-app/)

## Learnings

#### Starting Over Now I Would Change

- Use a state management library or tool like useContext or Redux to avoid prop chaining while passing state between multiple component levels
- Using TypeScript to help catch errors earlier in IDE rather than at runtime
- Material UI was intuitive and made building this easier in some cases but I prefer more control over my styles so I would opt to use CSS modules
- After building my portfolio website with Next.js I have become a huge fan and will build most apps with it moving forward for the advantages of having server side rending and dynamic client side rendering for added SEO/performance and UX

#### Potential Next Steps
- Functionality to edit each 'Today' workout live when user is working out to reflect any changes in the workout for that day

## Hosting

Hosted with Firebase [My Workout App](https://workout-tracker-faa13.web.app/)

## Screenshots
![Workout Image 1](/screenshots/WorkoutBuilder.png)
![Workout Image 2](/screenshots/AllWorkouts.png)
![Workout Image 3](/screenshots/SelectTodayWorkout.png)
![Workout Image 4](/screenshots/AllWorkoutsResponsive.png)