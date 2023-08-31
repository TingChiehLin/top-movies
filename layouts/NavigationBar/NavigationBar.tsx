import Logo from "../../public/topmovie_logo.png";

import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="w-full h-auto bg-sky-950">
      <div className="w-full max-w-7xl h-24 mx-auto flex justify-between items-center">
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
            <Link href="/favorite">Favorite</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
