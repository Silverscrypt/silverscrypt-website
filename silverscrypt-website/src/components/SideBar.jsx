import React from "react";
import { GitHub, Twitter, Linkedin, Instagram, Mail } from "react-feather";
import Logo from "./Logo.jsx"; // Import your new dynamic logo component

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Silverscrypt",
    icon: <GitHub className="w-7 h-7" />,
  },
  {
    name: "Twitter",
    url: "https://x.com/silverscrypt",
    icon: <Twitter className="w-7 h-7" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yashvasin-sana/",
    icon: <Linkedin className="w-7 h-7" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/yashvsana/",
    icon: <Instagram className="w-7 h-7" />,
  },
];

const email = "yashvsana1406@gmail.com";

function SideBar() {
  return (
    <>
      {/* Sidebar: Logo + Social Icons + Mail */}
      <div className="fixed left-5 top-1/2 -translate-y-1/2 flex flex-col items-center z-50">
        <div className="bg-slate-800/80 rounded-4xl shadow-lg flex flex-col items-center h-100 w-25 py-4">
          {/* Logo section at top */}
          <div className="flex-shrink-0">
            <Logo className="h-20 w-20 text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-purple-400" />
          </div>

          {/* Social icons section - grows to fill space and centers content */}
          <div className="flex-grow flex flex-col justify-center items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded text-slate-400 transition duration-300 flex justify-center items-center hover:-translate-y-1 hover:text-purple-400"
                title={social.name}
                style={{ background: "transparent" }}
              >
                {React.cloneElement(social.icon, { className: "w-7 h-7" })}
              </a>
            ))}
            <a
              href={`mailto:${email}`}
              className="p-2 rounded text-slate-400 transition duration-300 flex justify-center items-center hover:-translate-y-1 hover:text-purple-400 mt-2"
              title="Email"
              style={{ background: "transparent" }}
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
