import Link from "next/link";
import { SignInButton, SignOutButton } from "./buttons";
import AuthCheck from "./AuthCheck";

const routes = [
  { name: "Users", path: "/users" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Posts", path: "/posts" },
];

export default async function Header() {
  return (
    <header className="py-6 md:py-12 flex items-center justify-between">
      <Link href={"/"} className="text-xl font-semibold">
        UFSP
      </Link>
      <ul className="flex justify-center items-center gap-2">
        {routes.map((route, idx) => {
          return (
            <li key={idx}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-2">
        <SignInButton />
        <AuthCheck>
          <SignOutButton />
        </AuthCheck>
      </div>
    </header>
  );
}
