import Bannerbg from '../assests/Welcomebg.png';
const CONSTANTS = {
  HOSTNAME: "http://localhost:5000",

  WelcomeStyles:{
    Banner:{
      backgroundImage: `url(${Bannerbg})`,
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat",
      wordBreak: "normal",
      borderRadius: "50px"
    },
    Txt1:{
      fontFamily: "Piedra",
      color: "#e7ffe7",
      textShadow: "3px 3px 20px  #0b0c47,3px 3px 10px  #0b0c47,3px 3px 30px  #0b0c47",
      fontWeight: "bold",
      fontSize: "80px",
    },
    Txt2:{
      fontFamily: "Piedra",
      color: "#e7ffe7",
      textShadow: "3px 3px 20px  #0b0c47,3px 3px 10px  #0b0c47,3px 3px 30px  #0b0c47",
      fontWeight: "bold",
      fontSize: "60px",
    }
  }
}

export default CONSTANTS;