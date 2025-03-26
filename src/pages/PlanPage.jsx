import { useState } from "react";
import { useParams } from "react-router-dom";
import { Send } from "lucide-react";
import planData from "../data/plans.json"; // Import from local JSON

export default function SubscriptionForm() {
  const { id } = useParams(); // Get plan ID from URL
  const plans = planData.Plans || []; // Ensure it's an array
  const plan = plans.find((p) => p.id === id) || plans[0]; // Find the plan, fallback to first plan

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    plan: plan?.id || "basic",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email format";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Phone number must be 10 digits";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zip.match(/^\d{5}$/)) newErrors.zip = "ZIP Code must be 5 digits";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Subscription Applied Successfully!");
    }
  };

  const features = plan?.description ? plan.description.split(",").map(item => item.trim()) : [];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br">
      <div className="w-full max-w-4xl p-6 bg-white shadow-2xl rounded-3xl flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 p-6 bg-gray-100 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">Plan Details</h3>
          {plan ? (
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-gray-900">{plan.title} - PHP {plan.monthly}</h4>
              {features.length > 0 && (
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <p className="text-gray-600">Loading plan details...</p>
          )}
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Apply for Internet Subscription</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {Object.entries(formData).map(([key, value]) => (
              key !== "plan" && (
                <div key={key}>
                  <label htmlFor={key} className="block font-medium text-gray-700">
                    {key.charAt(0).toUpperCase() + key.slice(1).replace("zip", "ZIP Code")}
                  </label>
                  <input
                    type={key === "email" ? "email" : "text"}
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    required
                    className={`w-full border p-3 rounded-lg focus:ring-2 ${errors[key] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
                  />
                  {errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
                </div>
              )
            ))}
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold p-3 rounded-lg flex items-center justify-center gap-2 transition duration-300">
              <Send size={20} /> Apply Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
