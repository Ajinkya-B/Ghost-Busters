# We are the Ghost Busters!
Companies use chatbots to redirect traffic from live customer service. But sometimes, a customer quits a chat for some specific reason and would instead call a live customer service representative.

Often times, businesses who use chatbots don't know when and why this happens. They end up spending a ton of time and resources on chatbots that their customers are "ghosting".

We're going to help businesses that use the services of [Voiceflow](https://www.voiceflow.com/) identify why and how many of their customers are leaving their chatbots. How? By creating an analytics dashboard that displays various reasons why users quit a conversation with a chatbot. 

## You can visit the live demo here :smiley:
https://637309da5309e06258796f5f--spiffy-gingersnap-18a267.netlify.app

## To install the app:
1. Fetch the project
2. Open 3 terminals: 
  - For one of them, run ```cd back-end``` to navigate to the back-end folder
  - For the other, run ```cd front-end``` to navigate to the front-end folder
  - Don't do anything for the last terminal. You're already in the main folder!
3. Run ```npm install``` in all front-end, back-end, and main terminals to download all the dependencies
3. Run ```npm install -g nodemon``` in any terminal

## To run the app:
Please request one of the authors for a ```.env``` file to add to the ```back-end```folder.

Run ```nodemon server``` in the back-end terminal to start the server.
Then, run ```npm start``` in the front-end terminal to start the react app.

### Alternative run method:
Run ```npm run dev``` to start both the backend and the front end

## A tour of the app:

**(TO DO: INSERT IMAGE)**
After landing on the welcome page, you may select a project and view its analytics dashboard. A project corresponds to a project on the Voiceflow Workspace. If you add a project, please make sure its Version ID and API Key are precisely from an existing Voiceflow project!

**(TO DO: INSERT IMAGE)**
After selecting a project, you'll be taken to its dashboard. Please be patient as it loads. :blush:
The data is aggregated from Voiceflow Transcripts. Specifically, we use the instances of users leaving a conversation with a chatbot.

**(TO DO: INSERT IMAGE)**
Boo! You'll see a 404 page if you navigate to an unsupported URL. 

## License:
Distributed under the Apache-2.0 License. **(TO DO: LINK THE LICENSE FROM MASTER)**

## Attribution:
This app was created by Khushi Agrawal, Ajinkya Bhosale, Marco Marchesano, and Chelsea Wang.

Thank you to University of Toronto's Technology Leadership Initiative professors and teaching assistants for your guidance and help!

Built with MongoDB, Express, React, Node, Material UI, and more!

We use icons from [Ant Design](https://ant.design/) and [Eva Icons](https://akveo.github.io/eva-icons/#/). Credits to [Apparate](https://www.deviantart.com/apparate) on DeviantArt for the welcome page's ghost animation, and to [Freepik](https://www.freepik.com/) for our 404 page's ghost image. Aspects of the app's styling are derived from [Primitive UI](https://github.com/taniarascia/primitive) and [Minimal UI Kit](https://github.com/minimal-ui-kit/material-kit-react). 
