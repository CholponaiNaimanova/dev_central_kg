import React from "react";
import { FaTelegramPlane, FaFacebookSquare, FaYoutube, FaGithubAlt } from "react-icons/fa";

const SoobshestvoList = ({
    devkg,
    telegram_chats,
    websites,
    facebook,
    youtube,
    github
}: {
    devkg: string,
    telegram_chats: string,     
    websites: string,
    facebook: string,
    youtube: string,
    github: string
}) => {

    return (
        <div className="soo">
          <div className="soo-telegram">
            <h1>Наши ресурсы в Telegram</h1>
            <div className="soo-telegram__blocks">
              <a href={devkg}><FaTelegramPlane /> {devkg}</a>
            </div>
          </div>

          <div className="chatu">
            <h1>Телеграм чаты</h1>
            <div className="chatu-a">
              <a href={telegram_chats}><FaTelegramPlane /> {telegram_chats}</a>
            </div>

            <div className="web">
              <h1>Веб-сайты</h1>
              <div className="web-e">
                <a href={websites}><FaTelegramPlane /> {websites}</a>
              </div>
            </div>

            <div className="face">
              <h1>Facebook</h1>
              <div className="face-c">
                <a href={facebook}><FaFacebookSquare /> {facebook}</a>
              </div>
            </div>

            <div className="you">
              <h1>YouTube</h1>
              <div className="you-u">
                <a href={youtube}><FaYoutube /> {youtube}</a>
              </div>
            </div>

            <div className="git">
              <h1>GitHub</h1>
              <div className="git-t">
                <a href={github}><FaGithubAlt /> {github}</a>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SoobshestvoList;
