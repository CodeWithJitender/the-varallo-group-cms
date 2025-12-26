import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import DynamicEditor from "../components/DynamicEditor";

const Dashboard = () => {
  // Persistence Logic: Load from localStorage on init
  const [cmsData, setCmsData] = useState({});
  const [activePage, setActivePage] = useState(() => localStorage.getItem("activePage") || "home");
  const [activeId, setActiveId] = useState(() => localStorage.getItem("activeId") || "");
  const [loading, setLoading] = useState(true);

  const BASE_URL = "http://localhost:3000/api/pages";
  const PAGE_PATHS = [
    "home", "about", "services", "contact",
    "services/tvg-management", "services/tvg-stream",
    "services/tvg-books", "services/tvg-connect",
    "services/tvg-verify", "services/tvg-reporting"
  ];

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem("activePage", activePage);
    localStorage.setItem("activeId", activeId);
  }, [activePage, activeId]);

  const unboxData = (data) => {
    if (typeof data === "string") {
      try {
        const parsed = JSON.parse(data);
        if (parsed && typeof parsed === "object") return unboxData(parsed);
      } catch (e) { return data; }
    }
    if (Array.isArray(data)) {
      const isMedia = data.length > 0 && typeof data[0] === "string" && 
                      (data[0].includes("cloudinary") || /\.(png|jpg|jpeg|svg|webp)$/.test(data[0]));
      if (isMedia) return data; 
      if (data.length === 1 && typeof data[0] === "string") return data[0];
      return data.map(unboxData);
    }
    if (data !== null && typeof data === "object") {
      const cleaned = {};
      for (let [key, value] of Object.entries(data)) {
        if (["_id", "__v", "dbid", "content", "createdAt", "updatedAt"].includes(key)) continue;
        cleaned[key] = unboxData(value);
      }
      return cleaned;
    }
    return data;
  };

  const fetchPageData = async (pageSlug) => {
    try {
      const response = await fetch(`${BASE_URL}/${pageSlug}`);
      const json = await response.json();
      if (json.data?.sections) {
        const formatted = json.data.sections.map(s => ({
          id: s.sectionKey,
          ...unboxData(s.content)
        }));
        setCmsData(prev => ({ ...prev, [pageSlug]: formatted }));
      }
    } catch (err) { console.error("Fetch Error:", err); }
  };

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await Promise.all(PAGE_PATHS.map(path => fetchPageData(path)));
      setLoading(false);
    };
    init();
  }, []);

  const handleUpdateSection = async (updatedData) => {
    const formData = new FormData();
    const { id, imageFile, ...content } = updatedData;

    // Send the text content as a string
    formData.append("content", JSON.stringify(content));
    
    // Send the file if it exists (Key must match backend Multer config)
    if (imageFile) {
      formData.append("image", imageFile); 
    }

    try {
      const res = await fetch(`${BASE_URL}/sections/${activePage}/${id}`, {
        method: "PATCH",
        body: formData, // Browser automatically sets boundary for FormData
      });

      if (res.ok) {
        alert("Section updated successfully!");
        await fetchPageData(activePage); 
      } else {
        const err = await res.json();
        alert(`Save failed: ${err.message}`);
      }
    } catch (err) { alert("Network Error"); }
  };

  const activeSection = (cmsData[activePage] || []).find(s => s.id === activeId);

  return (
    <div className="flex min-h-screen bg-[#05080a] text-white p-6 gap-6 font-manrope">
      <Sidebar 
        cmsData={cmsData} activePage={activePage} activeSectionId={activeId}
        onPageChange={setActivePage} onSectionChange={setActiveId} 
      />
      <div className="flex-1 flex flex-col gap-6 overflow-hidden">
        <h1 className="text-2xl font-bold capitalize px-4">
          Editing: <span className="text-cyan-400">{activePage.split('/').pop().replace(/-/g, ' ')}</span>
        </h1>
        <div className="flex-1 bg-[#0a0f14]/80 border border-gray-800 rounded-[40px] p-10 overflow-y-auto custom-scrollbar">
          {loading && Object.keys(cmsData).length === 0 ? (
             <div className="flex items-center justify-center h-full text-gray-500 animate-pulse">Syncing APIs...</div>
          ) : activeSection ? (
            <DynamicEditor key={`${activePage}-${activeId}`} section={activeSection} onSave={handleUpdateSection} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 border-2 border-dashed border-gray-800 rounded-3xl">
              <p>Select a section from the sidebar.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;