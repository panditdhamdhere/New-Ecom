import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        {/* Store infi  */}
        <h1 className="text-[25px]">Pandit Dhamdhere</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum ab
          molestias modi voluptas facilis repellat in, ratione recusandae
          veritatis asperiores facere eligendi. Consequatur ex eius iusto
          aliquam dolore saepe?
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + " bg-orange-500"}>
            <InstagramIcon />
          </div>
          <div className={socialStyle + " bg-sky-400"}>
            <TwitterIcon />
          </div>
          <div className={socialStyle + " bg-gray-600"}>
            <GitHubIcon />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2 ">
        <div className="flex  m-3">
          <LocationOnIcon />
          <p className="pl-3">State of Maharashtra </p>
        </div>
        <div className="flex  m-3">
          <LocalPhoneIcon />
          <p className="pl-3">+919975118698</p>
        </div>
        <div className="flex  m-3">
          <EmailIcon />
          <p className="pl-3">dhamdherepandit@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
