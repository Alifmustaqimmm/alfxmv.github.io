import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Alifmustaqimmm",
  },
  {
    icon: FaLinkedin,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: MdEmail,
    href: "mailto:example@email.com",
  },
];

export default function HeroSocials() {
  return (
    <div className="mt-12 flex justify-center gap-5">
      {socials.map((social, index) => {
        const Icon = social.icon;

        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-3
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500
              hover:shadow-[0_0_30px_rgba(59,130,246,.25)]
            "
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}