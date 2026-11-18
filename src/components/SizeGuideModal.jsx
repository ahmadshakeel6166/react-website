import React, { useState } from 'react';
import { X, Ruler, Check } from 'lucide-react';

export const SizeGuideModal = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState('inches'); // 'inches' | 'cm'
  const [activeTab, setActiveTab] = useState('women');

  if (!isOpen) return null;

  const sizeData = {
    women: [
      { size: 'XS', bust: unit === 'inches' ? '32 - 33"' : '81 - 84 cm', waist: unit === 'inches' ? '25 - 26"' : '63 - 66 cm', hip: unit === 'inches' ? '35 - 36"' : '89 - 91 cm' },
      { size: 'S', bust: unit === 'inches' ? '34 - 35"' : '86 - 89 cm', waist: unit === 'inches' ? '27 - 28"' : '68 - 71 cm', hip: unit === 'inches' ? '37 - 38"' : '94 - 96 cm' },
      { size: 'M', bust: unit === 'inches' ? '36 - 37"' : '91 - 94 cm', waist: unit === 'inches' ? '29 - 30"' : '74 - 76 cm', hip: unit === 'inches' ? '39 - 40"' : '99 - 102 cm' },
      { size: 'L', bust: unit === 'inches' ? '38 - 40"' : '97 - 102 cm', waist: unit === 'inches' ? '31 - 33"' : '79 - 84 cm', hip: unit === 'inches' ? '41 - 43"' : '104 - 109 cm' },
      { size: 'XL', bust: unit === 'inches' ? '41 - 43"' : '104 - 109 cm', waist: unit === 'inches' ? '34 - 36"' : '86 - 91 cm', hip: unit === 'inches' ? '44 - 46"' : '112 - 117 cm' }
    ],
    men: [
      { size: 'S / 38R', chest: unit === 'inches' ? '36 - 38"' : '91 - 96 cm', waist: unit === 'inches' ? '30 - 32"' : '76 - 81 cm', shoulder: unit === 'inches' ? '17.5"' : '44.5 cm' },
      { size: 'M / 40R', chest: unit === 'inches' ? '39 - 41"' : '99 - 104 cm', waist: unit === 'inches' ? '32 - 34"' : '81 - 86 cm', shoulder: unit === 'inches' ? '18.2"' : '46.2 cm' },
      { size: 'L / 42R', chest: unit === 'inches' ? '42 - 44"' : '107 - 112 cm', waist: unit === 'inches' ? '34 - 36"' : '86 - 91 cm', shoulder: unit === 'inches' ? '19.0"' : '48.2 cm' },
      { size: 'XL / 44R', chest: unit === 'inches' ? '45 - 47"' : '114 - 119 cm', waist: unit === 'inches' ? '38 - 40"' : '96 - 101 cm', shoulder: unit === 'inches' ? '19.8"' : '50.3 cm' }
    ],
    kids: [
      { size: '2-3 Yrs', height: unit === 'inches' ? '35 - 38"' : '89 - 96 cm', chest: unit === 'inches' ? '21"' : '53 cm', waist: unit === 'inches' ? '20.5"' : '52 cm' },
      { size: '4-5 Yrs', height: unit === 'inches' ? '40 - 43"' : '102 - 109 cm', chest: unit === 'inches' ? '23"' : '58 cm', waist: unit === 'inches' ? '21.5"' : '55 cm' },
      { size: '6-7 Yrs', height: unit === 'inches' ? '45 - 48"' : '114 - 122 cm', chest: unit === 'inches' ? '25"' : '63 cm', waist: unit === 'inches' ? '22.5"' : '57 cm' },
      { size: '8-9 Yrs', height: unit === 'inches' ? '50 - 53"' : '127 - 135 cm', chest: unit === 'inches' ? '27"' : '68 cm', waist: unit === 'inches' ? '24.0"' : '61 cm' }
    ]
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white shadow-2xl rounded-sm overflow-hidden z-10 border border-neutral-200 animate-scale-up p-6 sm:p-8">
          
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
            <div className="flex items-center gap-2">
              <Ruler size={18} className="text-elan-gold" />
              <h2 className="font-serif text-2xl text-elan-black font-medium">
                Atelier Size Chart
              </h2>
            </div>
            <button onClick={onClose} className="text-neutral-400 hover:text-black">
              <X size={20} />
            </button>
          </div>

          {/* Department Tabs & Unit Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              {['women', 'men', 'kids'].map(dept => (
                <button
                  key={dept}
                  onClick={() => setActiveTab(dept)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                    activeTab === dept
                      ? 'bg-elan-dark text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {dept === 'women' ? 'Women Pret' : dept === 'men' ? 'Men Tailored' : 'Mini Élan'}
                </button>
              ))}
            </div>

            <div className="flex items-center border border-neutral-300 rounded-sm overflow-hidden text-xs">
              <button
                onClick={() => setUnit('inches')}
                className={`px-3 py-1 font-medium transition-colors ${
                  unit === 'inches' ? 'bg-elan-gold text-white font-bold' : 'bg-white text-neutral-600'
                }`}
              >
                Inches (in)
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 font-medium transition-colors ${
                  unit === 'cm' ? 'bg-elan-gold text-white font-bold' : 'bg-white text-neutral-600'
                }`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-neutral-200 rounded-sm mb-6">
            <table className="w-full text-xs text-left text-neutral-700">
              <thead className="bg-neutral-100 text-[11px] uppercase tracking-wider font-bold text-neutral-800 border-b border-neutral-200">
                <tr>
                  <th className="py-2.5 px-4">Size</th>
                  {activeTab === 'women' && (
                    <>
                      <th className="py-2.5 px-4">Bust / Chest</th>
                      <th className="py-2.5 px-4">Natural Waist</th>
                      <th className="py-2.5 px-4">Hip</th>
                    </>
                  )}
                  {activeTab === 'men' && (
                    <>
                      <th className="py-2.5 px-4">Chest Circumference</th>
                      <th className="py-2.5 px-4">Waistline</th>
                      <th className="py-2.5 px-4">Shoulder Width</th>
                    </>
                  )}
                  {activeTab === 'kids' && (
                    <>
                      <th className="py-2.5 px-4">Child Height</th>
                      <th className="py-2.5 px-4">Chest</th>
                      <th className="py-2.5 px-4">Waist</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {sizeData[activeTab].map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-50">
                    <td className="py-2.5 px-4 font-bold text-elan-black">{row.size}</td>
                    {activeTab === 'women' && (
                      <>
                        <td className="py-2.5 px-4">{row.bust}</td>
                        <td className="py-2.5 px-4">{row.waist}</td>
                        <td className="py-2.5 px-4">{row.hip}</td>
                      </>
                    )}
                    {activeTab === 'men' && (
                      <>
                        <td className="py-2.5 px-4">{row.chest}</td>
                        <td className="py-2.5 px-4">{row.waist}</td>
                        <td className="py-2.5 px-4">{row.shoulder}</td>
                      </>
                    )}
                    {activeTab === 'kids' && (
                      <>
                        <td className="py-2.5 px-4">{row.height}</td>
                        <td className="py-2.5 px-4">{row.chest}</td>
                        <td className="py-2.5 px-4">{row.waist}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50/50 p-3 rounded-sm border border-amber-200/60 text-xs text-neutral-600">
            <p><strong>Bespoke Sizing Note:</strong> Need custom alteration? Mention your custom measurements in the Order Notes during checkout or reach our master tailor at concierge@elan.pk.</p>
          </div>

        </div>
      </div>
    </div>
  );
};
