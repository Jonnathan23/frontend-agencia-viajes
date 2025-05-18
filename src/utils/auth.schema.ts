import { object, string } from "zod"

export const userSchema = object({
    usr_id: string(),
    usr_first_name: string(),
    usr_last_name: string(),
    usr_email: string(),
})

