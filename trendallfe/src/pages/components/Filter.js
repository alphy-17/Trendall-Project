import { Fragment, useState ,useEffect} from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import Card from './Card'
import axios from 'axios';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import DummyData from './DummyData';
import { Link } from 'react-router-dom';


const filters = [
  {
    id: 'artifact_type_name',
    name: 'Artifact Type',
    options: [
        { value: 'Pelikai', label: 'Pelikai', checked: false },
        { value: 'Calyx-kraters', label: 'Calyx-kraters', checked: false },
        { value: 'Squat lekythos', label: 'Squat lekythos', checked: false },
        { value: 'Oenochoai (shape 3)', label: 'Oenochoai (shape 3)', checked: false },
        { value: 'Skyphoid pyxides', label: 'Skyphoid pyxides', checked: false },
        { value: 'Hydria', label: 'Hydria', checked: false },
        { value: 'Lekanis lids', label: 'Lekanis lids', checked: false },
        { value: 'Lepaste (with five internal sections)', label: 'Lepaste (with five internal sections)', checked: false },
        { value: 'Bell-kraters', label: 'Bell-kraters', checked: false },
        { value: 'Rhyton (griffin-head)', label: 'Rhyton (griffin-head)', checked: false },
        { value: 'Fragments (of calyx-krater)', label: 'Fragments (of calyx-krater)', checked: false },
        { value: 'Fragment (of a neck-amphora)', label: 'Fragment (of a neck-amphora)', checked: false },
        { value: 'Fragments', label: 'Fragments', checked: false },
        { value: 'Neck-amphorae', label: 'Neck-amphorae', checked: false },
        { value: 'Hydriai', label: 'Hydriai', checked: false },
        { value: 'Neck-amphorare', label: 'Neck-amphorare', checked: false },
        { value: 'Lebetes gamikoi', label: 'Lebetes gamikoi', checked: false },
        { value: 'Foot of calyx-krater', label: 'Foot of calyx-krater', checked: false },
        { value: 'Volute-krater', label: 'Volute-krater', checked: false },
        { value: 'Lekanis lid', label: 'Lekanis lid', checked: false },
        { value: 'Squat lekythoi', label: 'Squat lekythoi', checked: false },
        { value: 'Lekanides', label: 'Lekanides', checked: false },
        { value: 'Oenochoe (shape 10)', label: 'Oenochoe (shape 10)', checked: false },
        { value: 'Kylikes', label: 'Kylikes', checked: false },
        { value: 'Neck-amphora', label: 'Neck-amphora', checked: false },
        { value: 'Kylix', label: 'Kylix', checked: false },
        { value: 'Calyx-kraters (fragmentary)', label: 'Calyx-kraters (fragmentary)', checked: false },
        { value: 'Phiale', label: 'Phiale', checked: false },
        { value: 'Bell-krater', label: 'Bell-krater', checked: false },
        { value: 'Neck-amphora (with twisted handles)', label: 'Neck-amphora (with twisted handles)', checked: false },
        { value: 'Lebes gamikos', label: 'Lebes gamikos', checked: false },
        { value: 'Pelike', label: 'Pelike', checked: false },
        { value: 'Fish-plates', label: 'Fish-plates', checked: false },
        { value: 'Neck-amphora (fragment)', label: 'Neck-amphora (fragment)', checked: false },
        { value: 'Skyphoi', label: 'Skyphoi', checked: false },
        { value: 'Stemless cups', label: 'Stemless cups', checked: false },
        { value: 'Cup', label: 'Cup', checked: false },
        { value: 'Lepaste', label: 'Lepaste', checked: false },
        { value: 'Fish plates', label: 'Fish plates', checked: false },
        { value: 'Lekanis', label: 'Lekanis', checked: false },
        { value: 'Bottles', label: 'Bottles', checked: false },
        { value: 'Plate', label: 'Plate', checked: false },
        { value: 'Skyphos', label: 'Skyphos', checked: false },
        { value: 'Stamnoid lebes', label: 'Stamnoid lebes', checked: false },
        { value: 'Volute-kraters', label: 'Volute-kraters', checked: false },
        { value: 'Alabastra', label: 'Alabastra', checked: false },
        { value: 'Skyphos (fragment)', label: 'Skyphos (fragment)', checked: false }
      ]  
  },
  {
    id: 'painter_name',
    name: 'Painter',
    options: [
        { "value": "THE DIRCE GROUP", "label": "THE DIRCE GROUP", "checked": false },
        { "value": "THE PRADO/FIENGA GROUP", "label": "THE PRADO/FIENGA GROUP", "checked": false },
        { "value": "THE SIKON AND TUNNY-SELLER PAINTERS", "label": "THE SIKON AND TUNNY-SELLER PAINTERS", "checked": false },
        { "value": "THE SCOGLITTI PAINTER", "label": "THE SCOGLITTI PAINTER", "checked": false },
        { "value": "THE GROUP OF LOUVRE K 240", "label": "THE GROUP OF LOUVRE K 240", "checked": false },
        { "value": "THE PAINTER OF THE GENEVA ORESTES", "label": "THE PAINTER OF THE GENEVA ORESTES", "checked": false },
        { "value": "EARLY VASES BY ASTEAS", "label": "EARLY VASES BY ASTEAS", "checked": false },
        { "value": "MINOR VASES BY ASTEAS", "label": "MINOR VASES BY ASTEAS", "checked": false },
        { "value": "VASES SIGNED BY ASTEAS", "label": "VASES SIGNED BY ASTEAS", "checked": false },
        { "value": "VASES BY ASTEAS WITH MORE ELABORATE COMPOSITIONS", "label": "VASES BY ASTEAS WITH MORE ELABORATE COMPOSITIONS", "checked": false },
        { "value": "STANDARD VASES BY ASTEAS", "label": "STANDARD VASES BY ASTEAS", "checked": false },
        { "value": "EARLY WORK: THE 'ALTAVILLA GROUP'", "label": "EARLY WORK: THE 'ALTAVILLA GROUP'", "checked": false },
        { "value": "VASES SIGNED BY PYTHON", "label": "VASES SIGNED BY PYTHON", "checked": false },
        { "value": "VASES BY PYTHON WITH MORE ELABORATE COMPOSITIONS", "label": "VASES BY PYTHON WITH MORE ELABORATE COMPOSITIONS", "checked": false },
        { "value": "STANDARD VASES BY PYTHON", "label": "STANDARD VASES BY PYTHON", "checked": false },
        { "value": "THE PAINTER OF WURZBURGH 5739", "label": "THE PAINTER OF WURZBURGH 5739", "checked": false },
        { "value": "TH E PAINTER OF PAESTUM 21602", "label": "TH E PAINTER OF PAESTUM 21602", "checked": false },
        { "value": "THE PAINTER OF PAESTUM 5397", "label": "THE PAINTER OF PAESTUM 5397", "checked": false },
        { "value": "THE KURASHIKI PAINTER", "label": "THE KURASHIKI PAINTER", "checked": false },
        { "value": "MINOR VASES FROM THE ASTEAS-PYTHON WORKSHOP", "label": "MINOR VASES FROM THE ASTEAS-PYTHON WORKSHOP", "checked": false },
        { "value": "THE APHRODITE PAINTER", "label": "THE APHRODITE PAINTER", "checked": false },
        { "value": "THE BOSTON ORESTES PAINTER", "label": "THE BOSTON ORESTES PAINTER", "checked": false },
        { "value": "THE PAINTER OF NAPLES 1778", "label": "THE PAINTER OF NAPLES 1778", "checked": false },
        { "value": "THE PAINTER OF NAPLES 2585", "label": "THE PAINTER OF NAPLES 2585", "checked": false },
        { "value": "THE FLORAL PAINTER OF PAINTER OF NAPLES", "label": "THE FLORAL PAINTER OF PAINTER OF NAPLES", "checked": false },
        { "value": "LATE AND BARBARISED FOLLOWERS OF PAINTER OF NAPLES", "label": "LATE AND BARBARISED FOLLOWERS OF PAINTER OF NAPLES", "checked": false },
        { "value": "LATE MINOR VASES OF PAINTER OF NAPLES", "label": "LATE MINOR VASES OF PAINTER OF NAPLES", "checked": false },
        { "value": "THE APULIANISING GROUP", "label": "THE APULIANISING GROUP", "checked": false },
        { "value": "THE GROUP OF PAESTUM 5188", "label": "THE GROUP OF PAESTUM 5188", "checked": false },
        { "value": "THE SPINAZZO GROUP", "label": "THE SPINAZZO GROUP", "checked": false },
        { "value": "MINOR VASES ASSOCIATED WITH THE SPINAZZO GROUP", "label": "MINOR VASES ASSOCIATED WITH THE SPINAZZO GROUP", "checked": false }
      ],
  },
  {
    id: 'chapter_name',
    name: 'Chapter',
    options: [
        { value: 'CHAPTER 2. THE SICILIAN FORERUNNERS', label: 'CHAPTER 2. THE SICILIAN FORERUNNERS', checked: false },
        { value: 'CHAPTER 3. THE TRANSITION FROM SICILIAN TO PAESTAN', label: 'CHAPTER 3. THE TRANSITION FROM SICILIAN TO PAESTAN', checked: false },
        { value: 'CHAPTER 4. EARLY VASES', label: 'CHAPTER 4. EARLY VASES', checked: false },
        { value: 'CHAPTER 5. VASES SIGNED BY ASTEAS', label: 'CHAPTER 5. VASES SIGNED BY ASTEAS', checked: false },
        { value: 'CHAPTER 6. OTHER VASES ATTRIBUTED TO ASTEAS OR CLOSELY RELATED TO HIS WORK', label: 'CHAPTER 6. OTHER VASES ATTRIBUTED TO ASTEAS OR CLOSELY RELATED TO HIS WORK', checked: false },
        { value: 'CHAPTER 7. PYTHON', label: 'CHAPTER 7. PYTHON', checked: false },
        { value: 'CHAPTER 8. OTHER PAINTERS IN THE ASTEAS-PYTHON WORKSHOP', label: 'CHAPTER 8. OTHER PAINTERS IN THE ASTEAS-PYTHON WORKSHOP', checked: false },
        { value: 'CHAPTER 9. MINOR VASES FROM THE ASTEAS-PYTHON WORKSHOP', label: 'CHAPTER 9. MINOR VASES FROM THE ASTEAS-PYTHON WORKSHOP', checked: false },
        { value: 'CHAPTER 10. TWO LATER ARTISTS IN THE ASTEAS-PYTHON WORKSHOP', label: 'CHAPTER 10. TWO LATER ARTISTS IN THE ASTEAS-PYTHON WORKSHOP', checked: false },
        { value: 'CHAPTER 11. THE PAINTER OF NAPLES 1778 AND VASES ASSOCIATED WITH HIM', label: 'CHAPTER 11. THE PAINTER OF NAPLES 1778 AND VASES ASSOCIATED WITH HIM', checked: false },
        { value: 'CHAPTER 12. THE PAINTER OF NAPLES 2585 AND HIS CIRCLE', label: 'CHAPTER 12. THE PAINTER OF NAPLES 2585 AND HIS CIRCLE', checked: false },
        { value: 'CHAPTER 13. THE APULIANISING GROUP', label: 'CHAPTER 13. THE APULIANISING GROUP', checked: false }
      ]
      ,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Filter() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    artifact_type_name: [],
    painter_name: [],
    chapter_name: [],
  });

  const handleFilterChange = (sectionId, optionValue, isChecked) => {
    setSelectedFilters(prevState => {
      const updatedSection = isChecked
        ? [...prevState[sectionId], optionValue]
        : prevState[sectionId].filter(value => value !== optionValue);
      return { ...prevState, [sectionId]: updatedSection };
    });
  };

  const [filteredArtifacts, setFilteredArtifacts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const  Nextpage = async (pageno, reset) => {
    const requestBody = {
        pageno: pageno,
        reset: reset
    };

    try {
        const response = await axios.post('http://54.206.104.11:4000/getpage', requestBody);
        console.log(response.data);
        if(response.data === "Invalid page number" || response.data === "reset"){
          return
        }
        setFilteredArtifacts(response.data.data);
    } catch (error) {
        console.error('Error occurred:', error.response.data);
        
    }

}

let imageFiles = [
  'P-1-4.jpg',
  'P-11-1.jpg',
  'P-11-2.jpg',
  'P-11-3.jpg',
  'P-11-4.jpg',
  'P-11-5.jpg',
  'P-11-6.jpg',
  'P-12-2.jpg',
  'P-12-3.jpg',
  'P-12-4.jpg',
  'P-12-6.jpg',
  'P-13-1.jpg',
  'P-13-2.jpg',
  'P-13-3.jpg',
  'P-13-4.jpg',
  'P-14-2.jpg',
  'P-15-1.jpg',
  'P-15-2.jpg',
  'P-15-3.jpg',
  'P-15-4.jpg',
  'P-16-1.jpg',
  'P-16-2.jpg',
  'P-16-3.jpg',
  'P-16-4.jpg',
  'P-16-5.jpg',
  'P-16-6.jpg',
  'P-17-1.jpg',
  'P-17-2.jpg',
  'P-18-1.jpg',
  'P-18-2.jpg',
  'P-18-3.jpg',
  'P-19-1.jpg',
  'P-19-2.jpg',
  'P-2.jpg',
  'P-20-1.jpg',
  'P-20-2.jpg',
  'P-22A.jpg',
  'P-22B.jpg',
  'P-23-1.jpg',
  'P-23-2.jpg',
  'P-23-3.jpg',
  'P-23-4.jpg',
  'P-23-5.jpg',
  'P-24-1.jpg',
  'P-24-2.jpg',
  'P-24-3.jpg',
  'P-25-1.jpg',
  'P-25-2.jpg',
  'P-25-3.jpg',
  'P-26-1.jpg',
  'P-26-2.jpg',
  'P-27-1.jpg',
  'P-27-2.jpg',
  'P-27-3.jpg',
  'P-27-4.jpg',
  'P-28-1.jpg',
  'P-28-2.jpg',
  'P-28-3.jpg',
  'P-29-1.jpg',
  'P-29-2.jpg',
  'P-29-3.jpg',
  'P-29-4.jpg',
  'P-29-5.jpg',
  'P-3-1.jpg',
  'P-30-1.jpg',
  'P-30-2.jpg',
  'P-31-1.jpg',
  'P-31-2.jpg',
  'P-31-3.jpg',
  'P-31-4.jpg',
  'P-31-5.jpg',
  'P-32-1.jpg',
  'P-32-2.jpg',
  'P-32-4.jpg',
  'P-33-1.jpg',
  'P-33-2.jpg',
  'P-34-1.jpg',
  'P-34-2.jpg',
  'P-35-1.jpg',
  'P-35-2.jpg',
  'P-35-3.jpg',
  'P-36-1.jpg',
  'P-36-2.jpg',
  'P-36-3.jpg',
  'P-37-1.jpg',
  'P-38-1.jpg',
  'P-38-2.jpg',
  'P-39.jpg',
  'P-41-1.jpg',
  'P-41-2.jpg',
  'P-42-1.jpg',
  'P-42-2.jpg',
  'P-43-1.jpg',
  'P-43-2.jpg',
  'P-44-1.jpg',
  'P-44-2.jpg',
  'P-45-1.jpg',
  'P-45-2.jpg',
  'P-46-1.jpg',
  'P-46-2.jpg',
  'P-47.jpg',
  'P-50-1.jpg',
  'P-51-1.jpg',
  'P-51-2.jpg',
  'P-52-1.jpg',
  'P-52-2.jpg',
  'P-53-1.jpg',
  'P-53-2.jpg',
  'P-54-1.jpg',
  'P-54-2.jpg',
  'P-55-1.jpg',
  'P-56-1.jpg',
  'P-56-2.jpg',
  'P-57-1.jpg',
  'P-57-3.jpg',
  'P-58.jpg',
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  const handleSubmit = async () => {
    setLoading(true);
    try {
        const response = await axios.post('http://54.206.104.11:4000/search-artifacts', {
            ...selectedFilters
        });
        console.log('Recieved Response');
        // console.log('Filtered Artifacts:', response.data);
        imageFiles = shuffleArray(imageFiles);
        setFilteredArtifacts(response.data.artifacts);
        console.log(response.data.artifacts)
        // console.log("usestate variable : ",filteredArtifacts);
        // console.log(filteredArtifacts && filteredArtifacts.length > 0);
        setTotalPages(Math.ceil(response.data.length / 10)); 
        // Adjust based on your total data count

  
    } catch (error) {
        console.error('Error filtering artifacts:', error.response ? error.response.data : error.message);
    }
    setLoading(false);
};
useEffect(()=>{
  Nextpage(page,false)
},[page])

useEffect(() => {
  Nextpage(1,true)
  console.log("useEffect variable : ", filteredArtifacts);
}, []); 

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                    
                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      value={option.value}
                                      type="checkbox"
                                      checked={selectedFilters[section.id].includes(option.value)}
                                      onChange={(e) => handleFilterChange(section.id, option.value, e.target.checked)}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                            
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                  <div className="flex justify-center">
                  <button
        type="button"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.5rem 1rem',
          border: '1px solid transparent',
          fontSize: '0.875rem',
          fontWeight: 500,
          borderRadius: '0.375rem',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          color: '#fff',
          backgroundColor: '#666666',
          transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out',
          cursor: 'pointer',
          outline: 'none',
          textDecoration: 'none'
      }}
        onClick={handleSubmit}
        >
            Apply Filters
        </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Artifacts</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  </Menu.Items>
                </Transition>
              </Menu>
              <Link
              to="/pdfview"
              >
              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              </Link>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
  <h2 id="products-heading" className="sr-only">Artifacts</h2>
  
  <div className="grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-5"> {/* Adjusted grid layout */}
    {/* Filters */}
    <form className="hidden lg:block lg:col-span-1"> {/* Filter column takes up one-fifth of the width */}
      <h3 className="sr-only">Categories</h3>
      {filters.map((section) => (
        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">{section.name}</span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        value={option.value}
                        type="checkbox"
                        checked={selectedFilters[section.id].includes(option.value)}
                        onChange={(e) => handleFilterChange(section.id, option.value, e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
      <button
        type="button"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.5rem 1rem',
          border: '1px solid transparent',
          fontSize: '0.875rem',
          fontWeight: 500,
          borderRadius: '0.375rem',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          color: '#fff',
          backgroundColor: '#666666',
          transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out',
          cursor: 'pointer',
          outline: 'none',
          textDecoration: 'none'
      }}
        onClick={handleSubmit}
        >
            Apply Filters
        </button>
    </form>
    <div className='lg:col-span-4'>
  {filteredArtifacts.length > 0 ? (
    filteredArtifacts.map((artifact, index) => (
      <ul key={index}>
        <Card image = {imageFiles[index]} 
        data={artifact} artifact_types = {artifact.artifact_type_names[0]} painter_name = {artifact.painter_names[0]} chapter_name ={artifact.chapter_names[0]}/>
      </ul>
      
    ))
  ) : (
      DummyData.map((artifact, index) => (
        <ul key={index}>
          <Card image = {imageFiles[index]} 
          data={artifact} artifact_types = {artifact.artifact_type_names[0]} painter_name = {artifact.painter_names[0]} chapter_name ={artifact.chapter_names[0]}/>
        </ul>
        
      ))
  )}
</div>
<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 lg:col-span-5">
    <div className="flex flex-1 justify-between sm:hidden">
        <button
            onClick={() => setPage(page > 1 ? page - 1 : 1)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
            Previous
        </button>
        <button
            onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
            Next
        </button>
    </div>
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
            <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{(page - 1) * 10 + 1}</span> to <span className="font-medium">{page * 10}</span> of{' '}
                <span className="font-medium">{totalPages * 10}</span> results
            </p>
        </div>
        <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                    onClick={() => setPage(page > 1 ? page - 1 : 1)}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                {[...Array(totalPages > 5 ? 5 : totalPages).keys()].map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber + 1)}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                            page === pageNumber + 1 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                        }`}
                    >
                        {pageNumber + 1}
                    </button>
                ))}
                {totalPages > 5 && (
                    <>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900">...</span>
                        <button
                            onClick={() => setPage(totalPages)}
                            className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                                page === totalPages ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                            }`}
                        >
                            {totalPages}
                        </button>
                    </>
                )}
                <button
                    onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
            </nav>
        </div>
    </div>
</div>


</div>

</section>
        </main>
      </div>
    </div>
  );
}
