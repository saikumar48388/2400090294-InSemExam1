import React from "react";

function Home() {
  return (
    <div style={styles.page}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of our React Router example.</p>
    </div>
  );
}

const styles = {
  page: { textAlign: "center", marginTop: "50px" }
};

export default Home;
