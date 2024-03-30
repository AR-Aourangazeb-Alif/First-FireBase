/**
 * 
 * 1. visit: console.firebase.google.com
 * 2. Create a project (skip google analytics)
 * 3. Register app (create firebase config)
 * 4. install firebase
 * 5. add firebase config file to your project
 * 6. DANGER: Do not make the firebase config file publicly available in anyway!!!
 * 7. Export app from firebase.init.js and import it in Login.jsx
 * 8. Visit: Go to Docs > Build > Authentication > Web > Get Started
 * 9. Login.jsx: import getAuth from "firebase/auth"
 * 10. Create const auth = getAuth(app)
 * 11. import googleAuthProvider and create a provider
 * 12. Call signInWithPopup(auth, provider) in the onclick function of the signIn button and .then to excecute the code and .cath the error
 * 13. Activate signIN method (googe, facebook, github, etc.) from the Authentication section in firebase project settings
 * 
 * **/   