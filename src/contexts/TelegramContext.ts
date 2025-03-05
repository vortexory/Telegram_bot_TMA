import { createContext } from 'react';
declare global {
    interface Window {
        Telegram?: {
            WebApp?: any;
        };
    }
}

export interface TelegramUser {
    id: number;
    first_name?: string;  // Changed from firstName to match Telegram's format
    last_name?: string;   // Changed from lastName to match Telegram's format
    username?: string;
    photo_url?: string;
}

export const TelegramContext = createContext<TelegramUser | null>(null); 
