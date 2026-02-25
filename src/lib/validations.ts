import { z } from "zod";

// Waitlist formu için validasyon şeması
export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email adresi zorunludur." })
    .email({ message: "Lütfen geçerli bir email adresi giriniz." }),
    
  // Honeypot alanı: Kullanıcı arayüzünde gizlidir.
  // Eğer botlar buraya değer girerse, sunucuda bunu yakalayacağız.
  honey: z.string().optional(),
});

// Şemadan otomatik tip türetme (TypeScript için)
export type WaitlistSchema = z.infer<typeof waitlistSchema>;