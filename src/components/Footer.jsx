import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";

const Footer = () => {
  return (
    <div className={`${styles.paddingX} bg-primary bg-opacity-50`}>
      <nav className={"w-full flex justify-center  pb-0"}>
        {/* top button */}
        <div className="w-full flex justify-center items-start pt-7 pb-0">
          <Link
            to="/"
            className="flex items-center
      "
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/gradient-purple-navigation-and-transactional-for-w/40/up-purp-512.png"
              alt="Top"
              className="w-9 h-9 object-contain opacity-30"
            />
          </Link>
        </div>
      </nav>
      <h5 className="text-gray-500 flex justify-center opacity-60 pb-0 pt-10 bg-primary">
        Design and Developed By &nbsp;{" "}
        <a href="">
          <span className="text-sky-500 flex justify-center">
            {" "}
            Dipak U Patil
          </span>
        </a>
      </h5>

      <div className="flex bg-primary h-16 justify-center items-center m-3">
        <div className="flex gap-5 h-10">
          <a href="https://github.com/dipakpatil5050" target="_blank">
            <img
              src="https://img.icons8.com/?size=80&id=LoL4bFzqmAa0&format=png"
              alt=""
              className="flex gap-5 h-10"
            />
          </a>
          <a href="https://www.linkedin.com/in/dipakpatil50/" target="_blank">
            <img
              src="https://cdn3d.iconscout.com/3d/free/thumb/free-linkedin-7096209-5753431.png?f=webp"
              alt="Linkedin Profile"
              className="flex gap-5 h-10"
            />
          </a>
          <a href="https://twitter.com/thedipakpatil" target="_blank">
            <img
              src="https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png"
              alt="twitter x logo"
              className="flex h-10"
            />
          </a>
        </div>
      </div>
      <h5
        className="flex flex-col justice-center items-center pb-2
      text-[12px]
      opacity-30
      "
      >
        All right Reserved &copy; 2024
      </h5>
    </div>
  );
};

export default Footer;
