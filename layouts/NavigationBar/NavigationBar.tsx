import Logo from "../../public/topmovie_logo.png";

import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="w-full h-24 px-32 bg-sky-950">
      <div className="h-full flex justify-between items-center">
        <Image src={Logo} alt="logo" width={"144"} />
        <ul className="flex items-center gap-6 text-white">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">Favorites</Link>
          </li>
          <li>Profile</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
