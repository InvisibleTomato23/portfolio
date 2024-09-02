import React from "react";
import "../scss/GalleryCard.scss";
import GamingImg from "../images/gaming-img.png";
import Card2 from "../images/card-img2.jpg";
import SyowaImg from "../images/syowa.jpg";

// カードで使用するデータの配列
const cardData = [
  {
    imgSrc: GamingImg,
    imgUrl: "https://tomatoend23.github.io/GamingAirways/",
    title: "GamingAirways",
    text1: "Branding / Personal",
    text2: "Coding / Design",
  },
  {
    imgSrc: SyowaImg,
    imgUrl: "https://tomatoend23.github.io/syowa/",
    title: "Syowaチョコレート",
    text1: "Branding / Personal",
    text2: "Coding",
  },
  {
    imgSrc: Card2,
    imgUrl: "hogehoge2.jp",
    title: "AdventureQuest",
    text1: "Marketing",
    text2: "strategy / design",
  },
  {
    imgSrc: Card2,
    imgUrl: "hogehoge3.jp",
    title: "AdventureQuest",
    text1: "Marketing",
    text2: "strategy / design",
  },
  {
    imgSrc: Card2,
    imgUrl: "hogehoge4.jp",
    title: "AdventureQuest",
    text1: "Marketing",
    text2: "strategy / design",
  },
  {
    imgSrc: Card2,
    imgUrl: "hogehoge5.jp",
    title: "AdventureQuest",
    text1: "Marketing",
    text2: "strategy / design",
  },
  // 追加のカードデータ
];

const GalleryCard = () => {
  return (
    <>
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <a href={card.imgUrl}>
            <img src={card.imgSrc} alt={card.title} className="card-img" />
          </a>
          <div className="card-text-wrapper">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text1">{card.text1}</p>
            <p className="card-text2">{card.text2}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default GalleryCard;
