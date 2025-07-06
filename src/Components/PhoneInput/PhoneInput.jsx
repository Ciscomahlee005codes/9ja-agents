import React, { useEffect, useState } from "react";
import "./PhoneInput.css";

const PhoneInput = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Nigeria",
    code: "+234",
    flagUrl: "https://flagcdn.com/w320/ng.png",
  });
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd,flags")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((c) => c.idd?.root && c.flags?.png)
          .map((c) => ({
            name: c.name.common,
            code: c.idd.root + (c.idd.suffixes?.[0] || ""),
            flagUrl: c.flags.png,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(filtered);
      })
      .catch((err) => {
        console.error("Country Fetch Error", err);
        alert("Could not load country list");
      });
  }, []);

  const handleSelectChange = (e) => {
    const selected = countries.find((c) => c.code === e.target.value);
    if (selected) {
      setSelectedCountry(selected);
    }
  };

  return (
    <div className="phone-input-wrapper">
      <div className="phone-input-container">
        {/* <-- 1. FLAG + CODE */}
        <div className="select-wrapper">
  {/* Just show flag and code on the form */}
  <img src={selectedCountry.flagUrl} alt="flag" className="flag-icon" />
  <select
    className="country-code-select"
    value={selectedCountry.code}
    onChange={handleSelectChange}
  >
    {/* Show full name + code in dropdown */}
    {countries.map((country, i) => (
      <option key={i} value={country.code}>
        {country.name} ({country.code})
      </option>
    ))}
  </select>

  {/* Fake the display value outside the select */}
  <div className="selected-code-display">
    {selectedCountry.code}
  </div>
</div>


        {/* <-- 2. INPUT FIELD */}
        <input
          type="tel"
          id="phone"
          className="number-input"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
