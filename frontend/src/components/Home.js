import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="adoptText">
      <div>
        <h1>Welcome to Animal Shelter!</h1>
        <p>
          Glad that you care for the animals so much. We make sure that you’ll
          not repent your decision of adopting your favorite pet !!
        </p>
        <Link to="/adoptForm">
          <button id="adoptButton">Adopt</button>
        </Link>
        <button>What all pets do we have ?</button>
      </div>

      <div className="giveAwayText">
        <h1>We do take in pets if you can’t take care of them !</h1>
        <p className="giveAwayTextParagraph">
          If you cannot take care of your pet in your busy schedule. We will do
          that for you. Give Away your pet to us and we will find someone who
          has can take care of their health. Glad to know that you care about
          your pet's health!
        </p>
        <Link to="/giveawayForm">
          <button>Give Away</button>
        </Link>
      </div>

      <div className="bottomParagraph">
        <p>
          Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef
          efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf
          uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe
          fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes
          efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb
        </p>
      </div>
    </div>
  );
}

export default Home;
