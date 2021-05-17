import React, { useState } from "react";
import Select from "react-select";
import "./Dropdown.css";

function Details() {
  const languages = [
    {
      value: 1,
      label: "india",
      data: "India (Hindi: Bhārat), officially the Republic of India (Hindi: Bhārat Gaṇarājya),[23] is a country in South Asia. It is the second-most populous country, the seventh-largest country by land area, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar and Indonesia.",
    },
    {
      value: 2,
      label: "Usa",
      data: "The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, 326 Indian reservations, and some minor possessions.[g] At 3.8 million square miles (9.8 million square kilometers), it is the world's third- or fourth-largest country by total area.[c] With a population of more than 331 million people, it is the third most populous country in the world. The national capital is Washington, D.C., and the most populous city is New York City.",
    },
    {
      value: 3,
      label: "china",
      data: "China, officially the People's Republic of China (PRC), is a country in East Asia. It is the world's most populous country, with a population of around 1.4 billion.[13] China covers an area of approximately 9.6 million square kilometers (3.7 million mi2), it is the world's third or fourth-largest country.[k] The country is officially divided into 23 provinces,[l][19] five autonomous regions, four direct-controlled municipalities (Beijing, Tianjin, Shanghai, and Chongqing), and two special administrative regions of Hong Kong and Macau.",
    },
    {
      value: 4,
      label: "japan",
      data: "Japan (Japanese: 日本, Nippon [ɲippoꜜɴ] (About this soundlisten) or Nihon [ɲihoꜜɴ] (About this soundlisten)) is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south. Part of the Ring of Fire, Japan spans an archipelago of 6852 islands covering 377,975 square kilometers (145,937 sq mi); the five main islands are Hokkaido, Honshu, Shikoku, Kyushu, and Okinawa. Tokyo is Japan's capital and largest city; other major cities include Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kobe, and Kyoto.",
    },
  ];
  const [result, ddlvalue] = useState(languages.data);
  const ddHandler = (e) => {
    ddlvalue(e.data);
  };
  return (
    <div className="dropdown__option">
      <Select options={languages} onChange={ddHandler} />
      <h4>{result}</h4>
    </div>
  );
}

export default Details;
