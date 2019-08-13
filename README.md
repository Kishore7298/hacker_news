# hacker_news
A Comment system of hacker news

It has been assumed that the comment system doesn't work in realtime.
so all the interations with the backend works with the rest api.
-The comment can be nested to any level.
-All the comments are open i,e anyone can see it but only the author of the comment can edit it.
-Authentication works with JWT and passport(for protected routes).

To run the application:    
open the frontend and backend in two different terminals and run
```
yarn install
yarn start
```
in both the terminals.

the app will start to run in port 3000.    
open ```http://localhost:3000``` in your browser, to run the app.
