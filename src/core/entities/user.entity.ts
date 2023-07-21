import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().regex(/^[a-zA-Z\u00C0-\u00FF ]+$/).min(3),
  age: z.number().positive().gt(18).lt(60),
  email: z.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  phone: z.string().regex(/^[0-9]*$/).length(11),
});

export type User = z.infer<typeof UserSchema>;
