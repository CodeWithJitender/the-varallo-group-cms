import React, { useState, useEffect, useRef } from "react";
import { HiOutlineUpload, HiOutlineCheck, HiOutlineX } from "react-icons/hi";

const DynamicEditor = ({ section, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...section });
  const fileInputRef = useRef(null);
  const activePathRef = useRef(null);

  useEffect(() => {
    setFormData({ ...section });
    setIsEditing(false);
  }, [section]);

  const updateField = (path, value) => {
    const keys = path.split('.');
    let newFormData = JSON.parse(JSON.stringify(formData));
    let current = newFormData;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setFormData(newFormData);
  };

  const handleImageClick = (path) => {
    if (!isEditing) return;
    activePathRef.current = path;
    fileInputRef.current.click();
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    
    if (!allowedExtensions.includes(fileExtension)) {
      alert("Invalid format. JPG, JPEG, PNG, WEBP, or GIF only.");
      return;
    }

    if (file.size > 1048576) {
      alert("File is too large. Max size is 1MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      updateField(activePathRef.current, reader.result);
    };
    reader.readAsDataURL(file);
  };

  const renderFields = (data, path = "") => {
    return Object.entries(data).map(([key, value]) => {
      const fieldPath = path ? `${path}.${key}` : key;
      if (key === "id") return null;

      // --- LOGIC FOR MULTI-PARAGRAPH ARRAYS (e.g., descriptions) ---
      if (Array.isArray(value) && typeof value[0] === 'string') {
        return (
          <div key={fieldPath} className="space-y-4 mb-6">
            <label className="text-[10px] text-gray-500 font-bold uppercase">{key.replace('_', ' ')} (Multiple Paragraphs)</label>
            {value.map((para, idx) => (
              <textarea
                key={`${fieldPath}.${idx}`}
                disabled={!isEditing}
                value={para}
                onChange={(e) => updateField(`${fieldPath}.${idx}`, e.target.value)}
                placeholder={`Paragraph ${idx + 1}`}
                className="w-full bg-transparent border border-gray-800 rounded-xl p-3 text-sm text-gray-300 focus:border-cyan-400 outline-none resize-none h-24 disabled:opacity-50 transition-all"
              />
            ))}
          </div>
        );
      }

      // --- LOGIC FOR OBJECT ARRAYS (Cards, Blocks, Items) ---
      if (Array.isArray(value) && typeof value[0] === 'object') {
        return (
          <div key={fieldPath} className="mt-8 border-t border-gray-800 pt-6">
            <h4 className="text-cyan-400 text-xs font-bold uppercase mb-4">{key} Section Items</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {value.map((item, idx) => (
                <div key={idx} className="p-4 bg-gray-900/40 border border-gray-800 rounded-2xl">
                  {renderFields(item, `${fieldPath}.${idx}`)}
                </div>
              ))}
            </div>
          </div>
        );
      }

      // Handle Nested Objects
      if (typeof value === 'object' && value !== null) {
        return (
          <div key={fieldPath} className="p-4 border border-gray-800 rounded-2xl my-4 bg-gray-800/10">
            <p className="text-[10px] text-gray-500 font-bold uppercase mb-3">{key}</p>
            {renderFields(value, fieldPath)}
          </div>
        );
      }

      // Handle Image Fields
      if (key === "image" || key === "icon") {
        return (
          <div key={fieldPath} className="mb-6">
            <label className="text-[10px] text-gray-500 uppercase font-bold">{key}</label>
            <div 
              onClick={() => handleImageClick(fieldPath)}
              className={`relative h-48 w-full bg-black rounded-2xl border-2 border-dashed transition-all mt-1 overflow-hidden group 
                ${isEditing ? 'border-cyan-900/50 cursor-pointer hover:border-cyan-400' : 'border-gray-800'}`}
            >
              <img src={value} alt="prev" className="w-full h-full object-cover opacity-60 group-hover:opacity-40" />
              {isEditing && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <HiOutlineUpload className="text-cyan-400 text-2xl" />
                  <span className="text-[10px] text-gray-400">Click to Change (Max 1MB)</span>
                </div>
              )}
            </div>
          </div>
        );
      }

      // Handle Simple Text/CTA fields
      const isCta = key.includes('cta_');
      return (
        <div key={fieldPath} className={`flex flex-col gap-1 mb-4 ${isCta ? 'border-l-2 border-cyan-500/30 pl-3' : ''}`}>
          <label className="text-[10px] text-gray-500 font-bold uppercase">{key.replace('_', ' ')}</label>
          {typeof value === "string" && value.length > 70 ? (
            <textarea
              disabled={!isEditing}
              value={value}
              onChange={(e) => updateField(fieldPath, e.target.value)}
              className="bg-transparent border border-gray-800 rounded-xl p-3 text-sm text-gray-300 focus:border-cyan-400 outline-none resize-none h-28 disabled:opacity-50"
            />
          ) : (
            <input
              disabled={!isEditing}
              type="text"
              value={value || ""}
              onChange={(e) => updateField(fieldPath, e.target.value)}
              className="bg-transparent border border-gray-800 rounded-xl p-3 text-sm text-gray-300 focus:border-cyan-400 outline-none disabled:opacity-50"
            />
          )}
        </div>
      );
    });
  };

  return (
    <div className="h-full flex flex-col">
      <input type="file" ref={fileInputRef} onChange={onFileChange} className="hidden" accept=".jpg,.jpeg,.png,.webp,.gif" />

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold uppercase tracking-tight">{formData.id} Content Management</h2>
        <div className="flex gap-4">
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)} className="bg-cyan-400 text-black px-10 py-2 rounded-full font-bold hover:bg-cyan-300">Edit</button>
          ) : (
            <>
              <button onClick={() => { setIsEditing(false); setFormData({...section}); }} className="text-gray-400 hover:text-white flex items-center gap-1">
                <HiOutlineX /> Cancel
              </button>
              <button onClick={() => { onSave(formData); setIsEditing(false); }} className="bg-cyan-400 text-black px-10 py-2 rounded-full font-bold flex items-center gap-2">
                <HiOutlineCheck /> Save Changes
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-4 scrollbar-hide">
        <div className="max-w-4xl">{renderFields(formData)}</div>
      </div>
    </div>
  );
};

export default DynamicEditor;