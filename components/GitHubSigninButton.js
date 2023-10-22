"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function GitHubSigninButton() {
  const supabase = createClientComponentClient();

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  }

  return (
    <button
      className="border border-gray-700 rounded px-4 py-2 text-black mb-2"
      onClick={signInWithGitHub}
    >
      Sign In with Github
    </button>
  );
}
