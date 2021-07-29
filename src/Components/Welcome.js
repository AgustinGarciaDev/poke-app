const Welcome = () => {
  return (
    <div className="container">
      <h2 className="titleContainer">Welcome</h2>
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_mrg9xhbm.json"
        background="transparent"
        speed="1"
        loop
        style={{ width: "30vw" }}
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Welcome;
