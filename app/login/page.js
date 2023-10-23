import Link from "next/link";
import Messages from "./messages";
import GitHubSigninButton from "../../components/GitHubSigninButton";

export default function Login() {
  return (
    <div className=" flex flex-col w-full  sm:max-w-md justify-center gap-2 absolute left-8 top-8 py-2 px-4 ">
      <Link
        href="/"
        className="rounded-md no-underline bg-gray-300 hover:bg-gray-500 flex items-center group text-sm w-16 p-1 mb-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </Link>

      <div className="flex flex-col w-full justify-center gap-2">
        <form
          className="flex-1 flex flex-col w-full justify-center gap-2 "
          action="/auth/sign-in"
          method="post"
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
            Sign In
          </button>
          <button
            formAction="/auth/sign-up"
            className="border border-gray-700 rounded px-4 py-2 text-black mb-2"
          >
            Sign Up
          </button>
          <Messages />
        </form>
        <GitHubSigninButton />
      </div>
    </div>
  );
}
