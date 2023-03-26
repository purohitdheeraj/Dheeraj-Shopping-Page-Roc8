import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <p>Welcome to My E-Commerce Shopping Page</p>
      <h2>About</h2>
      <p>
        This is an e-commerce shopping site built using React, React Router DOM
        and Vanilla CSS flexbox. The site supports the following features:
      </p>
      <div></div>
      <Link to="/products">&#8634; Take me to Product Listing Page</Link>
    </div>
  );
};

export default Home;
