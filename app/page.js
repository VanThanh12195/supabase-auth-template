import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import { log } from "console";
import { redirect } from "next/navigation";
import IncrementButton from "../components/IncrementButton";

export const dynamic = "force-dynamic";
export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="w-full items-center m-7">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm ">
          <div className="flex flex-col items-center gap-4">
            Hey, {user?.email}!
            <LogoutButton />
            <IncrementButton user={user}/>
          </div>
        </div>
    </div>
  );
}
