import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { TelegramContext } from '../contexts/TelegramContext';
import axios from "axios";
// import { calculateDateDifference } from "@/lib/utils";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [shouldRedirect, setShouldRedirect] = useState<string | null>(null);
  const currentUser = useContext(TelegramContext);
  const location = useLocation();
  const displayName = currentUser?.username || currentUser?.first_name || 'Guest';

  useEffect(() => {
    const checkUserAccess = async () => {
        try {
          const response = await axios.post(
            "https://simon.billtears76.workers.dev/score/difference_in_days",
            { username: displayName }
          );
          // const response = await axios.post(
          //   "https://simon.billtears76.workers.dev/score/get_last_check_date",
          //   { username: displayName }
          // );
          // const currentServerDate = await axios.get(
          //   "https://simon.billtears76.workers.dev/score/get_current_date_time"
          // );

          const differenceDays = response.data.difference;
          // const fetchedCurrentDate = currentServerDate.data.currentDateTime;
          // const differenceDays = calculateDateDifference(fetchedClaimDate, fetchedCurrentDate );

          if (differenceDays !== 0) {
            // If user hasn't claimed today, redirect to claim page unless already there
            if (location.pathname !== "/claim") {
              setShouldRedirect("/claim");
            }
          } else {
            // If user has claimed today, prevent access to claim page
            if (location.pathname === "/claim") {
              setShouldRedirect("/");
            }
          }
        } catch (error) {
          console.error("Error checking user access:", error);
        }
    };
    checkUserAccess();
  }, [displayName, location.pathname]);

  if (shouldRedirect) {
    return <Navigate to={shouldRedirect} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 