import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Send, Loader2, CheckCircle } from "lucide-react";
import planData from "../data/plans.json";

export default function SubscriptionForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plans = planData.Plans || [];
  const plan = plans.find((p) => p.id === id) || plans[0];

  const initialFormState = {
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Address: "",
    Barangay: "",
    City: "",
    Province: "",
    Zip: "",
  };



  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.FirstName.trim()) newErrors.FirstName = "First Name is required";
    if (!formData.LastName.trim()) newErrors.LastName = "Last Name is required";
    if (!formData.Email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.Email = "Invalid email format";
    if (!formData.Phone.match(/^\d{10}$/)) newErrors.Phone = "Phone number must be 10 digits";
    if (!formData.Address.trim()) newErrors.Address = "Address is required";
    if (!formData.Barangay.trim()) newErrors.Barangay = "Barangay is required";
    if (!formData.City.trim()) newErrors.City = "City is required";
    if (!formData.Province.trim()) newErrors.Province = "Province is required";
    if (!formData.Zip.match(/^\d{4}$/)) newErrors.Zip = "ZIP Code must be 4 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    // Add Plan to the data sent to Google Sheets
    const dataToSend = {
      ...formData,
      Plan: `${plan?.title} - PHP ${plan?.monthly}`,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbw0cxnS0_wpd61FAAxLwHlT_Pn3v8bnFybZw9GTtrJ85imxQpFnZJ2bn5sBqmRq3YSAWg/exec", {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires no-cors for public endpoints
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      setSubmitted(true);
      setFormData(initialFormState);
    } catch (error) {
      alert("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    setFormData(initialFormState);
    setSubmitted(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden flex">
        <div className="w-1/3 bg-blue-500 text-white p-6">
          <h2 className="text-xl font-bold mb-4">{plan?.title} - PHP {plan?.monthly}</h2>
          <ul className="space-y-2">
            {plan?.description?.split(",").map((item, index) => (
              <li key={index} className="border-b border-gray-600 pb-2">{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-8">
          {submitted ? (
            <div className="text-center h-96">
              <CheckCircle className="text-green-600 mt-20 w-20 h-24 mx-auto" />
              <h2 className="text-4xl font-bold text-green-600 mt-4">🎉 Thank You!</h2>
              <p className="text-gray-700 mt-2">Your application has been successfully submitted.</p>
              <button onClick={handleGoBack} className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Go Back
              </button>
            </div>
          ) : (<>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Application Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key}>
                    <label className="block font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1')}</label>
                    {key === "Phone" ? (
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 text-gray-600">
                          +63
                        </span>
                        <input
                          type="tel"
                          name="Phone"
                          maxLength={10}
                          pattern="\d{10}"
                          value={value}
                          onChange={e => {
                            // Only allow digits, max 10
                            const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setFormData({ ...formData, Phone: digits });
                          }}
                          className={`w-full border p-3 rounded-r-lg focus:ring-2 ${errors.Phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
                          placeholder="9123456789"
                        />
                      </div>
                    ) : key === "Zip" ? (
                      <input
                        type="tel"
                        name="Zip"
                        maxLength={4}
                        pattern="\d{4}"
                        value={value}
                        onChange={e => {
                          // Only allow digits, max 4
                          const digits = e.target.value.replace(/\D/g, '').slice(0, 4);
                          setFormData({ ...formData, Zip: digits });
                        }}
                        className={`w-full border p-3 rounded-lg focus:ring-2 ${errors.Zip ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
                        placeholder="1234"
                      />
                    ) : (
                      <input
                        type={key === "Email" ? "email" : "text"}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        className={`w-full border p-3 rounded-lg focus:ring-2 ${errors[key] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
                      />
                    )}
                    {errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
                  </div>
                ))}
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold p-3 rounded-lg flex items-center justify-center gap-2 transition">
                {loading ? <Loader2 className="animate-spin" size={20} /> : <><Send size={20} /> Apply Now</>}
              </button>
            </form>
          </>)}
        </div>
      </div>
    </div>
  );
}
