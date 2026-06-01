import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().toLowerCase().email("Please enter a valid email"),
  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
