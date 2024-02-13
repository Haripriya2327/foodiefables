import './aboutPage.css';

function AboutPage() {
    return (
    <section className='aboutPage'>
        <div>
            <h1>Welcome to FoodieFables</h1>
            <p>
                Hey there! Welcome to FoodieFables, where delicious dishes and tech-savvy minds collide!
                We are Haripriya and Kosta, two food enthusiasts who decided to blend our love for food 
                with our passion for technology.
            </p>
        </div>

        <div>
            <h2>About us</h2>
            <p>Meet the masterminds behind FoodieFables:</p>
            <div>
                <h3>Haripriya Mohanasundaram</h3>
                <p><strong>Lead Developer at FoodieFables</strong>
                <br />
                Originally from India, now living in the Netherlands. Haripriya was the lead developer for our second mini project,
                bringing her expertise in front end and her passion for cooking to FoodieFables. Her dedication and leadership
                have been instrumental in shaping our amazing culinary website (not biased).
                </p>
            </div>
            
            <div>
                <h3>Konstantinos Kallias</h3>
                <p><strong>Second mastermind behind FoodieFables</strong>
                <br />
                Originally from Greece, born and still based in the Netherlands, Kosta provided as an developer for our project. With his passion for technology and love for food,
                he's been a key part of bringing life to FoodiFables.
                </p>
            </div>
        </div>

        <div>
            <h3>Now lets talk about our mini project FoodieFables:</h3>
            <p>
                FoodieFables is a web application designed to showcase various food itemDetails
                along with their names, pictures, whether its a high caloric unhealthy foodchoise option or a low caloric healthy one.
                Users also have the ability to interect with the displayed food items in several ways such as:  
                </p> 
                <ul>
                    <li>
                        <strong>Viewing and Deleting:</strong> Users can browse through the list of displayed food items on the website. Additionally, they 
                        have the option to delete food items from the page, providing a sense of custamization and control over the displayed content.
                    </li>
                    <li>
                        <strong>Detailed View:</strong> Clicking on a specific food item enables users to acces more detailed information about the food, such as
                        the recipe for preparing that particular dish.
                    </li>
                  <li>  
                    <strong>Adding New Food Items:</strong> Users can contribute to the collection by creating new dish cards featuring their favorite foods. This feature spices
                    the users interaction experience up and makes things even more interesting.
                  </li>
                  <li>  
                    <strong>Modifying Existing Food Items:</strong> Users also have the ability to tweak existing recipes and serving sizes of items already on the menu, adding their own twist to familiar dishes.
                  </li>
                </ul>
         

        </div>
    </section> 
   )}

export default AboutPage