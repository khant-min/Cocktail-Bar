import Link from "next/link";

export default function Header() {
  return (
    <div className="header-container">
      <div>
        <h1 className="text-4xl font-bold font-serif">Fresh</h1>
      </div>
      <div>
        <ul className="links-container">
          <li>
            <Link href="/">Cocktails</Link>
          </li>
          <li>
            <Link href="/">Products</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Happy Hours</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
