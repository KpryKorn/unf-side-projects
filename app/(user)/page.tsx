import AuthCheck from "@/components/AuthCheck";
import { SignInButton, SignOutButton } from "@/components/buttons";

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex items-center gap-2">
        <SignInButton />
        <AuthCheck>
          <SignOutButton />
        </AuthCheck>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-success">Success</button>
        <button className="btn">Test</button>
      </div>
    </div>
  );
}
