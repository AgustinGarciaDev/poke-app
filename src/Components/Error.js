const Error = () => {
  return (
    <div className="container">
      <h3 className="titleContainer">No se encontro el pokemon que buscaba</h3>
      <h4 className="subTitle">Intente nuevamente</h4>
      <lottie-player
        src="https://assets3.lottiefiles.com/packages/lf20_VoST0V.json"
        background="transparent"
        speed="1"
        style={{ width: "30vw" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Error;
