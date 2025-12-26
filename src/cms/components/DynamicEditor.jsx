import React, { useState, useEffect, useRef } from "react";
import { HiOutlineUpload } from "react-icons/hi";

const DynamicEditor = ({ section, onSave }) => {
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);
  const activePathRef = useRef(""); 

  useEffect(() => { if (section) { setFormData(section); setIsEditing(false); } }, [section]);

  const updateField = (path, value) => {
    setFormData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const keys = path.split(".");
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) current = current[keys[i]];
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      updateField(activePathRef.current, previewUrl);
      setFormData(prev => ({ ...prev, imageFile: file }));
    }
  };

const renderFields = (data, path = "") => {
  return Object.entries(data).map(([key, value]) => {
    const fieldPath = path ? `${path}.${key}` : key;
    if (["id", "imagefile", "dbid", "_id", "__v"].includes(key.toLowerCase())) return null;

    const lowerKey = key.toLowerCase();
    
    // DETECT MEDIA: Detect Cloudinary URLs, local icon paths, and Blob previews
    const isMediaUrl = typeof value === "string" && (
      value.includes("cloudinary") || 
      value.startsWith("blob:") || 
      /\.(png|jpg|jpeg|svg|webp)$/.test(value)
    );

    // 1. TEXT HANDLER: Do not render [object Object] as text
    if (typeof value === "string" && !isMediaUrl) {
      const isLong = value.length > 60;
      return (
        <div key={fieldPath} className="mb-4 flex flex-col">
          <label className="text-[10px] text-gray-400 font-bold uppercase mb-1 ml-1">{key}</label>
          {isLong ? (
            <textarea disabled={!isEditing} value={value || ""} onChange={(e) => updateField(fieldPath, e.target.value)}
              className={`bg-transparent border rounded-xl p-3 text-sm min-h-[100px] outline-none transition-all ${isEditing ? "border-cyan-400 text-white" : "border-gray-800 text-gray-500"}`} />
          ) : (
            <input disabled={!isEditing} type="text" value={value || ""} onChange={(e) => updateField(fieldPath, e.target.value)}
              className={`bg-transparent border rounded-full px-4 py-2 text-sm outline-none transition-all ${isEditing ? "border-cyan-400 text-white" : "border-gray-800 text-gray-500"}`} />
          )}
        </div>
      );
    }

    // 2. MEDIA HANDLER: Render blobs as previews, not text
    if ((value && value.url) || isMediaUrl) {
      const mediaUrl = value.url ? (typeof value.url === "string" ? value.url : value.url.url) : value;
      return (
        <div key={fieldPath} className="mb-6 p-4 bg-black/40 rounded-2xl border border-gray-800">
          <label className="text-[10px] text-gray-500 font-bold uppercase mb-2 block">{key}</label>
          <div onClick={() => { if(isEditing) { activePathRef.current = value.url ? `${fieldPath}.url` : fieldPath; fileInputRef.current.click(); } }}
            className={`relative rounded-xl overflow-hidden border-2 border-dashed flex items-center justify-center bg-black ${lowerKey.includes('icon') ? 'h-24 w-24' : 'h-48 w-full'} ${isEditing ? "border-cyan-500 cursor-pointer" : "border-gray-800"}`}>
            <img src={mediaUrl} alt="Preview" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      );
    }

    // 3. OBJECT RECURSION: Deeply drills into "button" or "image" objects
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return (
        <div key={fieldPath} className="mb-4 border-l border-gray-800/30 pl-4">
          <label className="text-[10px] text-cyan-400 font-black uppercase mb-2 block">{key}</label>
          {renderFields(value, fieldPath)}
        </div>
      );
    }

    if (Array.isArray(value)) return <div key={fieldPath} className="mb-6 border-l border-gray-800 pl-4">{value.map((item, i) => renderFields(item, `${fieldPath}.${i}`))}</div>;

    return null;
  });
};

  return (
    <div className="flex flex-col h-full font-manrope">
      <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
      <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-6">
        <h2 className="text-xl font-bold uppercase">Section: <span className="text-cyan-400">{section.id}</span></h2>
        <div className="flex gap-4">
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)} className="bg-gray-800 px-6 py-2 rounded-full font-bold uppercase text-xs">Edit Section</button>
          ) : (
            <button onClick={() => onSave(formData)} className="bg-cyan-500 text-black px-8 py-2 rounded-full font-bold shadow-lg shadow-cyan-500/20 uppercase text-xs">Save Changes</button>
          )}
        </div>
      </div>
      <div className="overflow-y-auto pr-2 custom-scrollbar">{renderFields(formData)}</div>
    </div>
  );
};

export default DynamicEditor;