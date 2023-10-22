"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import LogoutButton from "../../components/LogoutButton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const supabase = createClientComponentClient();

  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
  }, []);

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-4">
          Hello this is about page, {user.email}!
          <LogoutButton />
        </div>
      ) : (
        <Link
          href="/login"
          className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Login
        </Link>
      )}
    </div>
  );
}
