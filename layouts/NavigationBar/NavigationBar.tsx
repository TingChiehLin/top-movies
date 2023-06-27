import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="w-full h-24 px-12 bg-sky-950">
      <ul className="h-full flex items-center gap-6 text-white">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about">Favorites</Link>
        </li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
