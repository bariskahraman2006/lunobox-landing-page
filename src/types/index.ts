// Navigasyon menüsü elemanları için
export interface NavItem {
  label: string;
  href: string;
}

// Ürün kartları için (Section 4: Mock Data yapısına uygun)
export interface Product {
  id: string;
  title: string;
  description: string;
  price: string; // Gösterim amaçlı string (örn: "₺15.00")
  features: string[];
  imagePath: string; // /images/product/ altındaki yol
  isPopular?: boolean; // "Çok Satan" etiketi için
}

// Waitlist formu için (Section 6: Waitlist)
export interface WaitlistFormData {
  email: string;
  honey?: string; // Spam koruması için gizli alan (Honeypot)
}

// API Yanıtları için standart yapı
export interface ApiResponse {
  success: boolean;
  message: string;
  error?: any;
}