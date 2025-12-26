import React, { useState, useEffect } from "react";
import { HiChevronDown, HiChevronRight, HiOutlineHome, HiOutlineBriefcase, HiOutlineMail, HiOutlineViewGrid } from "react-icons/hi";

const Sidebar = ({ cmsData, activePage, activeSectionId, onPageChange, onSectionChange }) => {
  // Initialize open state from localStorage or open the current active page
  const [openMenus, setOpenMenus] = useState(() => {
    const saved = localStorage.getItem("openMenus");
    return saved ? JSON.parse(saved) : { [activePage]: true };
  });

  useEffect(() => {
    localStorage.setItem("openMenus", JSON.stringify(openMenus));
  }, [openMenus]);

  // Ensure the current active page's menu is open if it's not already
  useEffect(() => {
    if (activePage && !openMenus[activePage]) {
      setOpenMenus(prev => ({ ...prev, [activePage]: true }));
    }
  }, [activePage]);

  const toggleMenu = (page) => {
    setOpenMenus(prev => ({ ...prev, [page]: !prev[page] }));
    onPageChange(page);
  };

  const renderPageLink = (slug, label, Icon) => {
    const sections = cmsData[slug] || [];
    const isOpen = openMenus[slug];

    return (
      <div key={slug} className="mb-2">
        <button 
          onClick={() => toggleMenu(slug)}
          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${activePage === slug ? "bg-cyan-500/10 text-cyan-400" : "hover:bg-white/5 text-gray-400"}`}
        >
          <div className="flex items-center gap-3">
            <Icon className="text-xl" />
            <span className="text-sm font-bold uppercase tracking-widest">{label}</span>
          </div>
          {sections.length > 0 && (isOpen ? <HiChevronDown /> : <HiChevronRight />)}
        </button>

        {isOpen && sections.length > 0 && (
          <div className="ml-9 mt-2 flex flex-col gap-1 border-l border-gray-800">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => { onPageChange(slug); onSectionChange(section.id); }}
                className={`text-left px-4 py-2 text-xs font-medium transition-all ${activeSectionId === section.id && activePage === slug ? "text-cyan-400 border-l-2 border-cyan-400 -ml-[2px]" : "text-gray-500 hover:text-white"}`}
              >
                {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-80 flex flex-col gap-4">
      <div className="bg-[#0a0f14]/80 border border-gray-800 rounded-[30px] p-6 h-[calc(100vh-48px)] overflow-y-auto custom-scrollbar">
        <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mb-6 px-2">Main Pages</p>
        {renderPageLink("home", "Homepage", HiOutlineHome)}
        {renderPageLink("about", "About Us", HiOutlineBriefcase)}
        {renderPageLink("services", "Our Services", HiOutlineViewGrid)}
        {renderPageLink("contact", "Contact Us", HiOutlineMail)}
        
        <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] my-6 px-2 border-t border-gray-800 pt-6">TVG Services Sub-Pages</p>
        {renderPageLink("services/tvg-management", "Management", HiOutlineBriefcase)}
        {renderPageLink("services/tvg-reporting", "Reporting", HiOutlineBriefcase)}
        {renderPageLink("services/tvg-stream", "Stream", HiOutlineBriefcase)}
        {renderPageLink("services/tvg-books", "Books", HiOutlineBriefcase)}
        {renderPageLink("services/tvg-connect", "Connect", HiOutlineBriefcase)}
        {renderPageLink("services/tvg-verify", "Verify", HiOutlineBriefcase)}
      </div>
    </div>
  );
};
export default Sidebar;