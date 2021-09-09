import { Route } from "react-router-dom";

const home = () => {
  return (
    <section>
      <h1> Welcome, This is our home page</h1>
      <Route path="/home/newuser">
        <p>Welcome, New User!!</p>
      </Route>
    </section>
  );
};

export default home;
