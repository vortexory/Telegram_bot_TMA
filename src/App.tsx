import "./styles/App.css";
import Router from "./router";
import AppLayout from "./layouts";
import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react';
import { TelegramContext, TelegramUser } from './contexts/TelegramContext';


export default function App() {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    try {
      // Initialize and get Telegram WebApp user data
      const userData = WebApp.initDataUnsafe.user;

      if (!userData) {
        throw new Error('Failed to get Telegram user data1');
      }
      setUser(userData);
    } catch (error) {
      console.error('Error initializing Telegram WebApp:', error);
    }
  }, []);

  return (
    <TelegramContext.Provider value={user}>
      <div className="App">
        <AppLayout>
          <Router />
        </AppLayout>
      </div>
    </TelegramContext.Provider>
  );
}