import { z } from "zod";

export const HotelSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  lat: z.number(),
  lng: z.number(),
  rating: z.number().optional().nullable().default(null),
  imageUrl: z.string().optional().nullable().default(null),
  contact: z.object({
    email: z.string().optional().nullable().default(null),
    phone: z.string().optional().nullable().default(null),
  }).default({ email: null, phone: null }),
});

export type Hotel = z.infer<typeof HotelSchema>;
export type Hotels = Hotel[]