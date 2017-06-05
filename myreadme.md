## Project

For the project I chose to use Angular1.x framework with the Bootstrap library. I haven't changed the setup, so all that is needed to run the project is to run 'npm install' and then 'npm start'. However, since I am still new to Webpack I have included Angular and other dependencies from CDNs, so internet connection is needed for the project to work.

I would also like to explain some of decisions I made:

I used a simple table layout for the main page and a 'card' layout for the profile page. Since the main page has a lot of entries it made sense to display the data in a more compact form. Data on profile pages has pictures and a lot fewer entries, so I felt a nicer card layout was more appropriate. The shading on hover effect helps to support the 'ID card' metaphor.

I decided to implement 'live search' (Data is immediately filtered when a user starts typing) to minimize the amount of interactions the user has to do. By doing so a user doesn't need to press a search button. For the same reason I opted for using the same search bar for searching by email or name. Having to manually choose the criteria for the search is not very useful for majority of cases, and requires extra clicks. 


## If I was to take it forward I would..

The project can be improved in several ways in order to scale better. 
First, I would utilize Webpack using it to include all dependencies.  
Using SASS would help managing the project as it grows. 
Although there is little need for this with smaller datasets, as data size grows it could be helpful to include an option to search by name/surname/e-mail separately. 
Angular directives can be used for things like search-bars.
