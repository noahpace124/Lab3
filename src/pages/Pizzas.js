const Pizzas = () => {
    return (
        <div id="container">
            <div id="header">
                <h1>Pizzas</h1>
            </div>
            <div id="body">
                <img src={require('./images/cheese.jpg')} id="image"/>
                <p> 
                    We make our pizza with only the finest of ingredients so you can enjoy the best flavor.
                    <br />
                    $11.99
                    <br />
                    <br />
                </p>
                <img src={require('./images/tomato.jpg')} id="image"/>
                <p> 
                    For those that prefer to eat veggies on their pizza, we offer our "Authentic Italian".
                    <br />
                    $16.99
                    <br />
                    <br />
                </p>
                <img src={require('./images/mozzarella.jpg')} id="image"/>
                <p> 
                    If you just want a snack at a bargain we've got you covered with the "Krusty Krunchy" breadsticks.
                    <br />
                    $5.99
                    <br />
                    <br />
                </p>
            </div>
            https://github.com/noahpace124/Lab3
        </div>
    )
  };
  
  export default Pizzas;