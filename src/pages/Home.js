const Home = () => {
    return (
    <div id="container">
        <div id="header">
            <h1>Home</h1>
        </div>
        <div id="body">
            <p> Welcome to the Krusty Krab! We love to make pizzas, and even more importantly, we love to make money!
            </p>
            <div></div>
            <img src={require('./images/storephoto.jpg')} id="image"/>
        </div>
    </div>
    );
  };
  
  export default Home;