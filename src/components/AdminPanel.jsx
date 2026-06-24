import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  Building2,
  Calendar,
  Image as ImageIcon,
  Trash2,
  Edit2,
  Plus,
  Save,
  X,
  LogOut,
  ArrowLeft,
  Sparkles,
  MapPin,
  HelpCircle
} from 'lucide-react';
import { dataStore } from '../utils/dataStore';

const AdminPanel = ({ onClose }) => {
  // Tabs: 'stats', 'ongoing', 'upcoming', 'gallery'
  const [activeTab, setActiveTab] = useState('stats');

  // Loaded states
  const [stats, setStats] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [gallery, setGallery] = useState([]);

  // Form states (Editing is triggered when editingId is set)
  const [editingId, setEditingId] = useState(null);

  // Form Field States
  // 1. Stats Form
  const [statValue, setStatValue] = useState('');
  const [statLabel, setStatLabel] = useState('');

  // 2. Ongoing Projects Form
  const [ongoingTitle, setOngoingTitle] = useState('');
  const [ongoingLocation, setOngoingLocation] = useState('');
  const [ongoingCategory, setOngoingCategory] = useState('Residential');
  const [ongoingProgress, setOngoingProgress] = useState(50);
  const [ongoingCompletion, setOngoingCompletion] = useState('');
  const [ongoingFlats, setOngoingFlats] = useState('');
  const [ongoingPrice, setOngoingPrice] = useState('');
  const [ongoingImage, setOngoingImage] = useState('');

  // 3. Upcoming Projects Form
  const [upcomingTitle, setUpcomingTitle] = useState('');
  const [upcomingCity, setUpcomingCity] = useState('');
  const [upcomingLaunchDate, setUpcomingLaunchDate] = useState('');
  const [upcomingImage, setUpcomingImage] = useState('');

  // 4. Gallery Form
  const [gallerySrc, setGallerySrc] = useState('');
  const [galleryAlt, setGalleryAlt] = useState('');
  const [gallerySpan, setGallerySpan] = useState('col-span-1 row-span-1');

  // Load all data on mount
  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = () => {
    setStats(dataStore.getStats());
    setOngoing(dataStore.getOngoing());
    setUpcoming(dataStore.getUpcoming());
    setGallery(dataStore.getGallery());
  };

  // Reset forms helper
  const resetForms = () => {
    setEditingId(null);
    // Stats reset
    setStatValue('');
    setStatLabel('');
    // Ongoing reset
    setOngoingTitle('');
    setOngoingLocation('');
    setOngoingCategory('Residential');
    setOngoingProgress(50);
    setOngoingCompletion('');
    setOngoingFlats('');
    setOngoingPrice('');
    setOngoingImage('');
    // Upcoming reset
    setUpcomingTitle('');
    setUpcomingCity('');
    setUpcomingLaunchDate('');
    setUpcomingImage('');
    // Gallery reset
    setGallerySrc('');
    setGalleryAlt('');
    setGallerySpan('col-span-1 row-span-1');
  };

  // CRUD Actions for Statistics
  const handleSaveStat = (e) => {
    e.preventDefault();
    if (!statValue || !statLabel) return alert('Please fill in all fields');

    let updatedStats = [...stats];
    if (editingId) {
      updatedStats = updatedStats.map(s => s.id === editingId ? { ...s, value: statValue, label: statLabel } : s);
    } else {
      const newStat = {
        id: Date.now().toString(),
        value: statValue,
        label: statLabel
      };
      updatedStats.push(newStat);
    }

    dataStore.saveStats(updatedStats);
    setStats(updatedStats);
    resetForms();
  };

  const handleEditStat = (stat) => {
    setEditingId(stat.id);
    setStatValue(stat.value);
    setStatLabel(stat.label);
  };

  const handleDeleteStat = (id) => {
    if (window.confirm('Are you sure you want to delete this statistic?')) {
      const updatedStats = stats.filter(s => s.id !== id);
      dataStore.saveStats(updatedStats);
      setStats(updatedStats);
      if (editingId === id) resetForms();
    }
  };

  // CRUD Actions for Ongoing Projects
  const handleSaveOngoing = (e) => {
    e.preventDefault();
    if (!ongoingTitle || !ongoingLocation || !ongoingPrice || !ongoingCompletion || !ongoingFlats) {
      return alert('Please fill in the required fields');
    }

    const defaultImg = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80';
    const finalImage = ongoingImage.trim() || defaultImg;

    let updatedOngoing = [...ongoing];
    const projectData = {
      title: ongoingTitle,
      location: ongoingLocation,
      status: 'Ongoing',
      progress: parseInt(ongoingProgress) || 0,
      expectedCompletion: ongoingCompletion,
      flatsAvailable: parseInt(ongoingFlats) || 0,
      startingPrice: ongoingPrice,
      category: ongoingCategory,
      image: finalImage
    };

    if (editingId) {
      updatedOngoing = updatedOngoing.map(p => p.id === editingId ? { ...p, ...projectData } : p);
    } else {
      updatedOngoing.push({
        id: Date.now().toString(),
        ...projectData
      });
    }

    dataStore.saveOngoing(updatedOngoing);
    setOngoing(updatedOngoing);
    resetForms();
  };

  const handleEditOngoing = (proj) => {
    setEditingId(proj.id);
    setOngoingTitle(proj.title);
    setOngoingLocation(proj.location);
    setOngoingCategory(proj.category || 'Residential');
    setOngoingProgress(proj.progress || 50);
    setOngoingCompletion(proj.expectedCompletion || '');
    setOngoingFlats(proj.flatsAvailable || '');
    setOngoingPrice(proj.startingPrice || '');
    setOngoingImage(proj.image || '');
  };

  const handleDeleteOngoing = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedOngoing = ongoing.filter(p => p.id !== id);
      dataStore.saveOngoing(updatedOngoing);
      setOngoing(updatedOngoing);
      if (editingId === id) resetForms();
    }
  };

  // CRUD Actions for Upcoming Projects
  const handleSaveUpcoming = (e) => {
    e.preventDefault();
    if (!upcomingTitle || !upcomingCity || !upcomingLaunchDate) {
      return alert('Please fill in the required fields');
    }

    const defaultImg = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
    const finalImage = upcomingImage.trim() || defaultImg;

    let updatedUpcoming = [...upcoming];
    const launchData = {
      title: upcomingTitle,
      city: upcomingCity,
      launchDate: upcomingLaunchDate,
      image: finalImage
    };

    if (editingId) {
      updatedUpcoming = updatedUpcoming.map(p => p.id === editingId ? { ...p, ...launchData } : p);
    } else {
      updatedUpcoming.push({
        id: Date.now().toString(),
        ...launchData
      });
    }

    dataStore.saveUpcoming(updatedUpcoming);
    setUpcoming(updatedUpcoming);
    resetForms();
  };

  const handleEditUpcoming = (proj) => {
    setEditingId(proj.id);
    setUpcomingTitle(proj.title);
    setUpcomingCity(proj.city);
    setUpcomingLaunchDate(proj.launchDate);
    setUpcomingImage(proj.image || '');
  };

  const handleDeleteUpcoming = (id) => {
    if (window.confirm('Are you sure you want to delete this upcoming launch?')) {
      const updatedUpcoming = upcoming.filter(p => p.id !== id);
      dataStore.saveUpcoming(updatedUpcoming);
      setUpcoming(updatedUpcoming);
      if (editingId === id) resetForms();
    }
  };

  // CRUD Actions for Gallery
  const handleSaveGallery = (e) => {
    e.preventDefault();
    if (!gallerySrc || !galleryAlt) {
      return alert('Please fill in the image URL and alt label');
    }

    let updatedGallery = [...gallery];
    const imageItem = {
      src: gallerySrc,
      alt: galleryAlt,
      span: gallerySpan
    };

    if (editingId) {
      updatedGallery = updatedGallery.map(img => img.id === editingId ? { ...img, ...imageItem } : img);
    } else {
      updatedGallery.push({
        id: Date.now().toString(),
        ...imageItem
      });
    }

    dataStore.saveGallery(updatedGallery);
    setGallery(updatedGallery);
    resetForms();
  };

  const handleEditGallery = (img) => {
    setEditingId(img.id);
    setGallerySrc(img.src);
    setGalleryAlt(img.alt);
    setGallerySpan(img.span || 'col-span-1 row-span-1');
  };

  const handleDeleteGallery = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedGallery = gallery.filter(img => img.id !== id);
      dataStore.saveGallery(updatedGallery);
      setGallery(updatedGallery);
      if (editingId === id) resetForms();
    }
  };

  // Helpers for labels
  const getSpanLabel = (span) => {
    if (span.includes('row-span-2') && span.includes('col-span-2')) return 'Large Square (2x2)';
    if (span.includes('row-span-2')) return 'Tall Block (1x2)';
    if (span.includes('col-span-2')) return 'Wide Block (2x1)';
    return 'Standard Square (1x1)';
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-charcoal flex flex-col">
      {/* Admin Navbar */}
      <header className="bg-charcoal text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded text-charcoal font-bold text-xl">
            UR
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">UrbanNest Realty</h1>
            <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Admin Portal</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 bg-concrete/50 hover:bg-concrete text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all border border-white/10"
        >
          <ArrowLeft size={16} />
          <span>Exit Portal</span>
        </button>
      </header>

      {/* Main Workspace Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Sidebar Nav */}
        <div className="lg:col-span-1 flex flex-col gap-3">
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Workspace sections</h2>
            <nav className="flex flex-col gap-1.5">
              <button
                onClick={() => { setActiveTab('stats'); resetForms(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${activeTab === 'stats' ? 'bg-charcoal text-primary' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <BarChart3 size={18} />
                <span>Statistics</span>
              </button>
              <button
                onClick={() => { setActiveTab('ongoing'); resetForms(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${activeTab === 'ongoing' ? 'bg-charcoal text-primary' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Building2 size={18} />
                <span>Ongoing Projects</span>
              </button>
              <button
                onClick={() => { setActiveTab('upcoming'); resetForms(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${activeTab === 'upcoming' ? 'bg-charcoal text-primary' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Sparkles size={18} />
                <span>Upcoming Launches</span>
              </button>
              <button
                onClick={() => { setActiveTab('gallery'); resetForms(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${activeTab === 'gallery' ? 'bg-charcoal text-primary' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <ImageIcon size={18} />
                <span>Project Gallery</span>
              </button>
            </nav>
          </div>


        </div>

        {/* Dynamic Content Columns */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* List Section (Left/Double-column) */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* Statistics Section */}
            {activeTab === 'stats' && (
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-charcoal">Statistics Overview</h3>
                  <p className="text-xs text-gray-500">Manage real estate achievements stats showcased in the hero section.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {stats.map((s) => (
                    <div key={s.id} className="border border-gray-100 rounded-2xl p-4 bg-gray-50 flex flex-col justify-between hover:border-primary transition-colors">
                      <div>
                        <span className="text-3xl font-extrabold text-forest">{s.value}</span>
                        <p className="text-sm text-gray-600 mt-1 font-medium">{s.label}</p>
                      </div>
                      <div className="flex gap-2 justify-end mt-4 border-t pt-3 border-gray-100">
                        <button
                          onClick={() => handleEditStat(s)}
                          className="p-1.5 text-concrete hover:text-charcoal hover:bg-gray-200 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteStat(s.id)}
                          className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                  {stats.length === 0 && (
                    <p className="col-span-2 text-sm text-gray-400 py-10 text-center">No statistics saved. Use the form to add one.</p>
                  )}
                </div>
              </div>
            )}

            {/* Ongoing Projects Section */}
            {activeTab === 'ongoing' && (
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-charcoal">Ongoing Projects List</h3>
                  <p className="text-xs text-gray-500">Modify progress, available units, or prices for active projects.</p>
                </div>

                <div className="space-y-4 max-h-[550px] overflow-y-auto pr-1">
                  {ongoing.map((proj) => (
                    <div key={proj.id} className="border border-gray-150 rounded-2xl p-4 flex gap-4 hover:border-primary transition-colors bg-gray-50">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-24 h-24 object-cover rounded-xl shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-bold text-base text-charcoal truncate">{proj.title}</h4>
                            <span className="text-[10px] bg-charcoal text-primary px-2.5 py-0.5 rounded-full font-bold uppercase shrink-0">
                              {proj.category}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <MapPin size={12} className="text-gray-400" /> {proj.location}
                          </p>
                          <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                            <div>
                              <span className="text-gray-400 block text-[9px] uppercase">Price</span>
                              <span className="font-bold text-forest">{proj.startingPrice}</span>
                            </div>
                            <div>
                              <span className="text-gray-400 block text-[9px] uppercase">Completion</span>
                              <span className="font-bold">{proj.expectedCompletion}</span>
                            </div>
                            <div>
                              <span className="text-gray-400 block text-[9px] uppercase">Progress</span>
                              <span className="font-bold text-forest">{proj.progress}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 justify-end mt-2 pt-2 border-t border-gray-200">
                          <button
                            onClick={() => handleEditOngoing(proj)}
                            className="p-1.5 text-concrete hover:text-charcoal hover:bg-gray-200 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            onClick={() => handleDeleteOngoing(proj.id)}
                            className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {ongoing.length === 0 && (
                    <p className="text-sm text-gray-400 py-10 text-center">No ongoing projects available. Fill the form to create one.</p>
                  )}
                </div>
              </div>
            )}

            {/* Upcoming Projects Section */}
            {activeTab === 'upcoming' && (
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-charcoal">Upcoming Launches List</h3>
                  <p className="text-xs text-gray-500">Track and publish new premium properties slated for booking interest.</p>
                </div>

                <div className="space-y-4 max-h-[550px] overflow-y-auto pr-1">
                  {upcoming.map((proj) => (
                    <div key={proj.id} className="border border-gray-150 rounded-2xl p-4 flex gap-4 hover:border-primary transition-colors bg-gray-50">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-24 h-24 object-cover rounded-xl shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <h4 className="font-bold text-base text-charcoal truncate">{proj.title}</h4>
                          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <MapPin size={12} className="text-gray-400" /> {proj.city}
                          </p>
                          <div className="mt-3 text-xs">
                            <span className="text-gray-400 block text-[9px] uppercase">Estimated Launch</span>
                            <span className="font-bold text-charcoal">{proj.launchDate}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 justify-end mt-2 pt-2 border-t border-gray-200">
                          <button
                            onClick={() => handleEditUpcoming(proj)}
                            className="p-1.5 text-concrete hover:text-charcoal hover:bg-gray-200 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            onClick={() => handleDeleteUpcoming(proj.id)}
                            className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {upcoming.length === 0 && (
                    <p className="text-sm text-gray-400 py-10 text-center">No upcoming launches registered. Add one using the form.</p>
                  )}
                </div>
              </div>
            )}

            {/* Gallery Images Section */}
            {activeTab === 'gallery' && (
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-charcoal">Gallery Showcase</h3>
                  <p className="text-xs text-gray-500">Configure visual layout blocks and descriptions in the gallery section.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 max-h-[550px] overflow-y-auto pr-1">
                  {gallery.map((img) => (
                    <div key={img.id} className="border border-gray-150 rounded-2xl overflow-hidden hover:border-primary transition-colors bg-gray-50 flex flex-col">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-sm text-charcoal truncate">{img.alt}</h4>
                          <span className="text-[9px] font-bold text-gray-400 uppercase mt-1 block">
                            Layout: {getSpanLabel(img.span)}
                          </span>
                        </div>
                        <div className="flex gap-2 justify-end mt-3 border-t pt-2 border-gray-200">
                          <button
                            onClick={() => handleEditGallery(img)}
                            className="p-1.5 text-concrete hover:text-charcoal hover:bg-gray-200 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            onClick={() => handleDeleteGallery(img.id)}
                            className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {gallery.length === 0 && (
                    <p className="col-span-2 text-sm text-gray-400 py-10 text-center">No images in gallery. Upload one using the form.</p>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Form Section (Right/Single-column) */}
          <div className="md:col-span-1 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm self-start">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-charcoal">
                {editingId ? 'Edit Item' : 'Add New Item'}
              </h3>
              <p className="text-xs text-gray-500">
                {editingId ? 'Updating selected record details' : 'Register a new record in the list'}
              </p>
            </div>

            {/* STATS FORM */}
            {activeTab === 'stats' && (
              <form onSubmit={handleSaveStat} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Value (e.g. 25+ or 8)</label>
                  <input
                    type="text"
                    value={statValue}
                    onChange={(e) => setStatValue(e.target.value)}
                    placeholder="25+"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Label (e.g. Years Experience)</label>
                  <input
                    type="text"
                    value={statLabel}
                    onChange={(e) => setStatLabel(e.target.value)}
                    placeholder="Years Experience"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-charcoal hover:bg-concrete text-primary font-bold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    {editingId ? <Save size={16} /> : <Plus size={16} />}
                    <span>{editingId ? 'Update Stat' : 'Add Stat'}</span>
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForms}
                      className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-sm font-semibold"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </form>
            )}

            {/* ONGOING PROJECT FORM */}
            {activeTab === 'ongoing' && (
              <form onSubmit={handleSaveOngoing} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Project Title *</label>
                  <input
                    type="text"
                    value={ongoingTitle}
                    onChange={(e) => setOngoingTitle(e.target.value)}
                    placeholder="Skyline Heights"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Location *</label>
                  <input
                    type="text"
                    value={ongoingLocation}
                    onChange={(e) => setOngoingLocation(e.target.value)}
                    placeholder="Baner, Pune"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
                    <select
                      value={ongoingCategory}
                      onChange={(e) => setOngoingCategory(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Luxury</option>
                      <option>Affordable Housing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Starting Price *</label>
                    <input
                      type="text"
                      value={ongoingPrice}
                      onChange={(e) => setOngoingPrice(e.target.value)}
                      placeholder="₹72 Lakh"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Completion *</label>
                    <input
                      type="text"
                      value={ongoingCompletion}
                      onChange={(e) => setOngoingCompletion(e.target.value)}
                      placeholder="Dec 2026"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Flats Available *</label>
                    <input
                      type="number"
                      value={ongoingFlats}
                      onChange={(e) => setOngoingFlats(e.target.value)}
                      placeholder="18"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-bold text-gray-500 uppercase">Construction Progress *</label>
                    <span className="text-xs font-bold text-forest">{ongoingProgress}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={ongoingProgress}
                    onChange={(e) => setOngoingProgress(e.target.value)}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Image URL</label>
                  <input
                    type="text"
                    value={ongoingImage}
                    onChange={(e) => setOngoingImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Leave empty to use a standard property image placeholder.</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-charcoal hover:bg-concrete text-primary font-bold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    {editingId ? <Save size={16} /> : <Plus size={16} />}
                    <span>{editingId ? 'Update Project' : 'Create Project'}</span>
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForms}
                      className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-sm font-semibold"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </form>
            )}

            {/* UPCOMING LAUNCH FORM */}
            {activeTab === 'upcoming' && (
              <form onSubmit={handleSaveUpcoming} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Launch Title *</label>
                  <input
                    type="text"
                    value={upcomingTitle}
                    onChange={(e) => setUpcomingTitle(e.target.value)}
                    placeholder="Skyline Signature"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">City / Sector Location *</label>
                  <input
                    type="text"
                    value={upcomingCity}
                    onChange={(e) => setUpcomingCity(e.target.value)}
                    placeholder="Kharadi, Pune"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Estimated Launch Period *</label>
                  <input
                    type="text"
                    value={upcomingLaunchDate}
                    onChange={(e) => setUpcomingLaunchDate(e.target.value)}
                    placeholder="Q2 2027"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Image URL</label>
                  <input
                    type="text"
                    value={upcomingImage}
                    onChange={(e) => setUpcomingImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Leave empty to use a standard landscape image placeholder.</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-charcoal hover:bg-concrete text-primary font-bold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    {editingId ? <Save size={16} /> : <Plus size={16} />}
                    <span>{editingId ? 'Update Launch' : 'Create Launch'}</span>
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForms}
                      className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-sm font-semibold"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </form>
            )}

            {/* GALLERY SHOWCASE FORM */}
            {activeTab === 'gallery' && (
              <form onSubmit={handleSaveGallery} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Image Source URL *</label>
                  <input
                    type="text"
                    value={gallerySrc}
                    onChange={(e) => setGallerySrc(e.target.value)}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Alt Label Description *</label>
                  <input
                    type="text"
                    value={galleryAlt}
                    onChange={(e) => setGalleryAlt(e.target.value)}
                    placeholder="Living Room, Exterior View"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Grid Area Size (Layout Span)</label>
                  <select
                    value={gallerySpan}
                    onChange={(e) => setGallerySpan(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-charcoal outline-none transition-colors"
                  >
                    <option value="col-span-1 row-span-1">Standard Square (col 1, row 1)</option>
                    <option value="col-span-1 md:col-span-2 row-span-2">Large Square (col 2, row 2)</option>
                    <option value="col-span-1 md:col-span-2 row-span-1">Wide Block (col 2, row 1)</option>
                    <option value="col-span-1 row-span-2">Tall Block (col 1, row 2)</option>
                  </select>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-charcoal hover:bg-concrete text-primary font-bold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    {editingId ? <Save size={16} /> : <Plus size={16} />}
                    <span>{editingId ? 'Update Image' : 'Add Image'}</span>
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForms}
                      className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-sm font-semibold"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </form>
            )}

          </div>

        </div>

      </div>

      {/* Admin Footer */}
      <footer className="bg-charcoal border-t border-gray-800 py-4 px-6 md:px-12 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} UrbanNest Realty. Minimalist Admin Control Panel POC. All changes act locally.</p>
      </footer>
    </div>
  );
};

export default AdminPanel;
