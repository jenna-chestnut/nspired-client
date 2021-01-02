# nSpired 
## Create goals. Meet them. Share your wins.

---

[View the live nSpired app here](https://nspired-app.vercel.app/)

[View the nSpired server repo here](https://github.com/jenna-chestnut/nspired-server)

**nSpired** was created to offer a platform specifically to meeting goals independently, while connecting and sharing with others who want to achieve the same.  

Science has proven time and time again that by surrounding yourself with others who have the same goals as you, you:  
- are held accountable to a new standard  
- can motivate others with your progress  
- can gain insight from others who are further along in their progress  
- may discover new goals that you would like to meet along the way

 --- 
 
### User flows:  
New / any user goes to landing page  
-> views simple description  
-> views top 4 wins   
 
New User demos creating goal   
-> is able to sign up and save that goal  
  
User creates a goal (or clone an existing goal from the Win Wall)   
-> chooses a time frame  
-> adds a 'why' to their goal (to remind them later on of why they took on the goal.)  
  
User clicks on Dashboard link to view dashboard  
-> views list of goals in progress and wins  
-> is able to click on any goal for expanded view.  
  
User clicks on an individual goal   
-> views an expanded version of their goal   
-> reads the motivating personal blurb attached  
-> is able to delete or mark goal complete.  
  
User completes a goal   
-> presented with the option to share to the Win Wall for cloning (if a new goal)   
-> is able to add a 'blurb' of advice as an experienced goal-getter either way.  
  
Users clicks on a link to the Win Wall  
-> views the list of public wins  
  
User clicks on an individual public win   
-> views an expanded version of each win on the Win Wall  
-> views how many users were nSpired by the goal (clones)   
-> views how many times the goal was completed  
-> views advice column with helpful tips from users who have already completed the goal  
-> is able to click a button to clone the goal   

<br/>

---  

### Screenshots  
  
  
<img width="400px" alt="nspired-screenshot-1" src="https://gdurl.com/sdDJX">
<img width="400px" alt="nspired-screenshot-1" src="https://gdurl.com/IBX6N">
<img width="400px" alt="nspired-screenshot-1" src="https://gdurl.com/nX1y">
<img width="400px" alt="nspired-screenshot-1" src="https://gdurl.com/x9Ev">
<img width="400px" alt="nspired-screenshot-1" src="https://gdurl.com/J1Rk">

<br/>

---

### Tech stack  
This client-side app was created with:    
<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
<img align="left" alt="HTML5" src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" />
<img align="left" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img align="left" alt="CSS3" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
<img align="left" alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
<img align="left" alt="GitHub" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />  

<br/>

---

### Components Tree
**App🔻**     

➖**Header🔻**   
➖➖*Inspo*  

➖**Main🔻**    
➖➖**Error Banner**  

➖➖**Landing Page**   
➖➖➖*Intro*  
➖➖➖*Win List*  
➖➖➖➖Public Win Item    
➖➖➖➖➖UpVotes  
  
➖➖**Registration Page**    
➖➖➖*Sign Up Form*  
➖➖**Log In Page**      
➖➖➖*Log In Form*    
  
➖➖**Win Wall Page**    
➖➖➖*Win List*  
➖➖➖➖Public Win Item    
➖➖➖➖➖UpVotes   
  
➖➖**Single Win Page**    
➖➖➖*UpVotes*  
➖➖➖*Advice Column*    
➖➖➖*Goal Status*  
  
➖➖**Dashboard**   
➖➖➖*To Do List*  
➖➖➖➖Private To Do Item    
➖➖➖➖➖Delete Win Button  
➖➖➖➖➖Complete Win Button  
➖➖➖*Win List*  
➖➖➖➖Public Win Item    
➖➖➖➖➖UpVotes  
  
➖➖**Share Goal Page**    
➖➖➖*Share Goal Form*  
  
➖➖**Create Goal Page**    
➖➖➖*Create Goal Form*  
  
➖➖**Clone Goal Page**     
➖➖➖*Create Goal Form*  
  
➖➖**Personal Goal Page**    
➖➖➖*Goal Progress*  
➖➖➖*Advice Column*    
➖➖➖*Delete Win Button*  
➖➖➖*Complete Win Button*   
  
➖➖**Not Found 404 Page**    
  
➖**Footer🔻**     
  
---  
  
  
## Available Scripts  
  
In the project directory, you can run:  
  
`npm start`  
  
The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.

`npm run build`

Builds the app for production to the `build` folder.
