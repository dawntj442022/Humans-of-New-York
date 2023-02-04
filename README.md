# Humans-of-New-York

☐ Humans of New York:
A blog that cares about people. New Yorkers presents some interesting people; all living extraordinary lives. Each person having a unique, insightful and inspiring story to relay. This platform was created to showcase those stories and show us all how connected we really are in our experiences. Humans of New York: Stories is the culmination of five years of innovative storytelling on the streets of New York City. During this time, photographer Brandon Stanton stopped, photographed, and interviewed more than ten thousand strangers, eventually sharing their stories on his blog, Humans of New York. In Humans of New York: Stories, the interviews accompanying the photographs go deeper, exhibiting the intimate storytelling that the blog has become famous for today. Ranging from whimsical to heartbreaking, these stories have attracted a global following of more than 30 million people across several social media platforms.

☐ Screenshot(s): Images of your actual app.

☐ Technologies Used:
Tailwind, Heroku, Github, Packages: bcryptjs, body-parser, dotenv, express, express-session, jsonwebtoken, jsx, jsx-view-engine, method-override, moment, mongodb, mongoose, morgan, nodemon, parseurl, react, react-dom and sessions.

☐ Getting Started: In this section include the link to your deployed app and any instructions you deem important.

https://git.heroku.com/humansofnewyork.git: deployed to heroku

https://humansofnewyork.herokuapp.com/: website

☐ Next Steps: Planned future enhancements (icebox items).

1. Users blog page have options for them to customize the theme of their page. Provide basic templates but they also have the option to upload themes. Provide different layout options.
2. Add an individual blog page for the user.
3. Users to publically post or not
4. Emog icons
5. User can add video and/or pictures

☐ Frequent commits dating back to the very beginning of the project. Commit messages should be in the present tense, e.g., "Style landing page" instead of "Styled landing page".

☐ Restful route table (example)
URL HTTP Verb Action Notes
/products/ GET index INDEX when a user types localhost:3000/productsin browser this route shows a listor indexof all products
/products/new GET new NEW when a user types localhost:3000/products/newin browser this route shows the user a form to create a NEWfruit
/products/:id DELETE destroy DELETE initiates a delete request through a form submission with action = http://localhost:3000/products/:idOfProductand allows
the application the ability to deletea product
/products/:id PUT update UPDATE initiates a put request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the
application the ability to Updatedata about a product
/products POST create CREATE initiates a post request through a form submission with action = http://localhost:3000/products/and allows
the application the ability to Createa product
/products/:id/edit GET edit EDIT when a user types localhost:3000/products/:idOfProduct/editin browser shows the user a form to edita product
/products/:id GET show SHOW when a user types localhost:3000/products/:idOfProductshows the user an Individualfruit in the browser
