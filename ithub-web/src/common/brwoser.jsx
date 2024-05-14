import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import img_1 from "../../public/assets/img/hero/browser-icon-1.png";
import img_2 from "../../public/assets/img/hero/browser-icon-2.png";
import img_3 from "../../public/assets/img/hero/browser-icon-3.png";
import img_4 from "../../public/assets/img/hero/browser-icon-4.png";
import img_5 from "../../public/assets/img/hero/browser-icon-5.png";

const brwoser_data = [
    {img:  img_1, title: "Windows", link: "https://www.microsoft.com"},
    {img:  img_2, title: "Firefox", link: "https://www.mozilla.org"},
    {img:  img_3, title: "Chrome", link: "https://www.chrome.com"},
    {img:  img_4, title: "macOS", link: "https://www.apple.com"},
    {img:  img_5, title: "Linux", link: "https://www.linux.org"},
]
const Brwoser = () => {
    return (
      <>
        {brwoser_data.map((item, i) => (
          <div key={i} className="tp-hero-browser-item">
            <Link href={item.link} target="_blank">
              <Image src={item.img} alt="them-pure" />
            </Link>
            <p className="d-none d-sm-block">{item.title}</p>
          </div>
        ))}
      </>
    );
};

export default Brwoser;