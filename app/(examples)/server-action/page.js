import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function ServerAction() {
  const addTodo = async (formData) => {
    "use server";
    const title = formData.get("title");

    if (title) {
      // Create a Supabase client configured to use cookies
      const supabase = createServerActionClient({ cookies });

      // This assumes you have a `todos` table in Supabase. Check out
      // the `Create Table and seed with data` section of the README 👇
      // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
      await supabase.from("todos").insert({ title });
      // revalidatePath('/server-action-example')
    }
  };

  return (
    <form action={addTodo}>
      <input
        name="title"
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        placeholder="you@example.com"
        required
      />
    </form>
  );
}
