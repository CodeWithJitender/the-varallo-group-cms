import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DynamicEditor from "../components/DynamicEditor";

// Import your page data files
import {homePageData} from "../data/homePageData";
import {aboutPageData} from "../data/aboutPageData"; 
import {servicePageData} from "../data/servicePageData";
import {contactPageData} from "../data/contactPageData";
import {tvgManagementPageData} from "../data/tvgManagementPageData";
import { tvgReportingPageData } from "../data/tvgReportingPageData";
import { tvgStreamPageData } from "../data/tvgStreamPageData";
import { tvgBooksPageData } from "../data/tvgBooksPageData";
import { tvgCreativePageData } from "../data/tvgCreativePageData";
import { tvgConnectPageData } from "../data/tvgConnectPageData";

const Dashboard = () => {
  // 1. Centralized state for all CMS pages
  const [cmsData, setCmsData] = useState({
    home: homePageData,
    about: aboutPageData,    // Replace with aboutPageData when ready
    services: servicePageData, // Replace with servicesPageData when ready
    contact: contactPageData,
    management: tvgManagementPageData,
    reporting: tvgReportingPageData,
    stream: tvgStreamPageData,
    books: tvgBooksPageData,
    creative: tvgCreativePageData,
    connect: tvgConnectPageData,
    verify: tvgManagementPageData,
  });

  const [activePage, setActivePage] = useState("home");
  const [activeId, setActiveId] = useState("hero");

  // 2. Derive the specific section data based on selected page and section ID
  const currentPageSections = cmsData[activePage] || [];
  const activeSection = currentPageSections.find((s) => s.id === activeId) || currentPageSections[0];

  // 3. Update state when "Save Changes" is clicked in DynamicEditor
  const handleUpdateSection = (updatedData) => {
    setCmsData((prev) => ({
      ...prev,
      [activePage]: prev[activePage].map((s) =>
        s.id === updatedData.id ? updatedData : s
      ),
    }));
    
    // This is where you would call your backend API
    console.log(`Database Updated for ${activePage}:`, updatedData);
  };

  // 4. Handle Page Change from Sidebar
  const handlePageChange = (pageKey) => {
    setActivePage(pageKey);
    // Automatically select the first section of the new page
    const firstSection = cmsData[pageKey]?.[0]?.id;
    if (firstSection) {
      setActiveId(firstSection);
    }
  };

  return (
    <div className="flex hero h-screen  text-white p-6 gap-6 overflow-hidden font-manrope">
      {/* SIDEBAR: 
         - Pass full cmsData so it knows which pages have sections
         - onPageChange: Switches the main page (Home, About, etc.)
         - onSectionChange: Switches the specific section (Hero, Section 2, etc.)
      */}
      <Sidebar 
        cmsData={cmsData}
        activePage={activePage}
        activeSectionId={activeId}
        onPageChange={handlePageChange}
        onSectionChange={setActiveId}
      />

      <div className="flex-1 flex flex-col gap-6 overflow-hidden">
        {/* Header Section */}
        <div className="flex justify-between items-center px-4">
          <div>
            <p className="text-gray-400 text-sm">Welcome back,</p>
            <h1 className="text-2xl font-bold">John Doe</h1>
          </div>
          <button className="px-6 py-2 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all">
            Logout
          </button>
        </div>

        {/* EDITOR: Rendered dynamically based on current selection */}
        <div className="flex-1 bg-[#0a0f14]/80 backdrop-blur-xl border border-gray-800 rounded-[40px] p-10 overflow-hidden">
          {activeSection ? (
            <DynamicEditor 
              section={activeSection} 
              onSave={handleUpdateSection} 
            />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500 italic">
              Please select a section to begin editing.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;