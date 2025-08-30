import { useState } from "react";
import { z } from "zod";

const SomethingSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

type Something = z.infer<typeof SomethingSchema>;

export function useContent() {
  const [result, setResult] = useState<Something | null>(null);

  async function onClickGetSomething() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    const validatedData = SomethingSchema.parse(data);
    setResult(validatedData);
  }

  return {
    result,
    onClickGetSomething,
  };
}
