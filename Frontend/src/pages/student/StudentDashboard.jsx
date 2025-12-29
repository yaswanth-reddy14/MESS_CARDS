import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import "../../App.css";

export default function StudentDashboard() {
  const [messes, setMesses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("messes/")
      .then(res => setMesses(res.data))
      .catch(() => alert("Failed to load messes"));
  }, []);

  return (
    <div className="student-dashboard">
      <h2 className="page-title">Nearby Messes</h2>

      <div className="mess-grid">
        {messes.map(mess => (
          <div key={mess.id} className="mess-card">
            <img
              className="mess-image"
              src={
                mess.image ||
                "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
              }
              alt={mess.name}
            />

            <div className="mess-info">
              <h3>{mess.name}</h3>
              <p>{mess.location || mess.address}</p>

              <div className="mess-meta">
                <span>{mess.food_type}</span>
                <span>₹{mess.monthly_price}/month</span>
              </div>

              <button
                className="btn-primary"
                onClick={() => navigate(`/student/mess/${mess.id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
