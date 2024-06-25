import { useEffect } from "react";

export default function LeavingArrivingBloomers() {
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/missions");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>LeavingArrivingBloomers</div>;
}
