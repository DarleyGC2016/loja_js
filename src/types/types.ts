import { userSchema } from "@/model/model";
import { z } from "zod";

export type UserSchema = z.infer<typeof userSchema>