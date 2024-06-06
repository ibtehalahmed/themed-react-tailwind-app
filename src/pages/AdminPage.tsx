// src/pages/AdminPage.tsx
import React, { useContext, useState } from 'react';
import { ConfigContext } from '../utils/config';

const AdminPage: React.FC = () => {

  const { colorPalette, buttonShape, theme, setColorPalette, setButtonShape, setTheme } = useContext(ConfigContext);
  const [newTheme, setNewTheme] = useState(theme);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTheme(prevTheme => ({ ...prevTheme, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTheme(newTheme);
  };
  return (
    <div className="container mx-auto p-4 py-24 sm:py-32">
      <h1 className="text-4xl mb-4">Admin Configuration</h1>
      <div className="mt-4">
        <label className="block mb-2">Color Palette:</label>
        <select value={colorPalette} onChange={(e) => setColorPalette(e.target.value)} className="border p-2">
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block mb-2">Button Shape:</label>
        <select value={buttonShape} onChange={(e) => setButtonShape(e.target.value)} className="border p-2">
          <option value="rounded">Rounded</option>
          <option value="square">Square</option>
        </select>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Primary Color:
          <input type="color" name="primaryColor" value={newTheme.primaryColor} onChange={handleChange} />
        </label>
        <br />
        <label>
          Secondary Color:
          <input type="color" name="secondaryColor" value={newTheme.secondaryColor} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AdminPage;
