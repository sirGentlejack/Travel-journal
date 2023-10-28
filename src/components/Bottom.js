import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import Group from "../images/Group.png";

export default function Bottom() {
  return (
    <div className="footer" id="contact">
      <div className="footer_section_one">
        <img src={Group} className="group_img" alt="Country view" />
      </div>
      <div className="footer_section_two">
        <p> &copy; 2023 GentlejackB All Right Reserved</p>
        <div>
          <div>
            <a
              href="https://twitter.com/gentlejack_b?s=21"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareXTwitter className="social-icon" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/sirGentlejack"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
          </div>
          <div>
            <a
              href="http://linkedin.com/in/ilemobayo1"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
          <div>
            <a
              href="mailto:fagbemiilemobayo4@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
