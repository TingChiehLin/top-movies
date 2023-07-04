import Logo from "../../public/topmovie_logo.png";

import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="w-full h-auto px-12 md:px-16 xl:px-32 bg-sky-950">
      <div className="h-24 flex justify-between items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={"144"}
            className="cursor-pointer"
          />
        </Link>
        <ul className="flex items-center gap-6 text-white">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
