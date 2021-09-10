import { Route } from "react-router-dom";
import img from "../Assets/img.jpg";

const home = () => {
  return (
    <section>
      <img src={img} alt="Welcome" />
      <Route path="/home/newuser">
        <p>Welcome, New User!!</p>
      </Route>
    </section>
  );
};

export default home;
