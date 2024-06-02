import Link from "next/link";
const links = [
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Create Blogs",
    href: "/create-blogs",
  },
  {
    name: "Team",
    href: "/team",
  },
];
const Navbar = () => {
  return (
    <nav className="py-8">
      <div className="container flex flex-row justify-between">
        <Link href="/" className="text-blue-800 text-xl font-bold">
          Blogs
        </Link>
        <div className="flex flex-row gap-4">
          {links.map((item) => (
            <Link href={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
