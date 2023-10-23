"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { use, useEffect, useState } from "react";

export default function IncrementButton({ user }) {
  const [value, setValue] = useState(0);

  const supabase = createClientComponentClient();

  useEffect(() => {
    const getClickAmount = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("click")
        .eq("id", user.id);

      if (data) {
        setValue(data[0].click);
      }
    };
    getClickAmount();
  }, []);

  async function handleClick() {
    setValue(value + 1);

    await supabase.rpc("increase_all");

    const { data, error } = await supabase
      .from("profiles")
      .select("click")
      .eq("id", user.id);
  }
  return (
    <button
      className="rounded-md no-underline bg-gray-300 hover:bg-gray-500  items-center group text-sm w-16 p-1 mb-5"
      onClick={handleClick}
    >
      {value ? value : "Loading..."}
    </button>
  );
}
