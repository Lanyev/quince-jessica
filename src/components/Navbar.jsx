import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MoreModal from './MoreModal';

const Navbar = () => {  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);  return (
    <div className={`fixed bottom-0 left-0 right-0 w-full mx-auto max-w-[calc(100%-30px)] bg-primary text-white py-1 px-1 rounded-xl ${isModalOpen ? 'filter opacity-75' : ''}`} style={{ maxWidth: 'calc(100% - 30px)', marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px' }}>
    <ul className="menu menu-horizontal w-full flex justify-evenly">
      <li>        <Link
          to="/"
          className="flex flex-col items-center p-1 hover:bg-primary-light rounded-lg"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-house-icon lucide-house"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <p className="text-[10px] font-nav text-center mt-0.5">Inicio</p>
        </Link>      </li>
      <li>        <Link
          to="/ceremonia"
          className="flex flex-col items-center p-1 hover:bg-primary-light rounded-lg"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-church-icon lucide-church"
          >
            <path d="M10 9h4" />
            <path d="M12 7v5" />
            <path d="M14 22v-4a2 2 0 0 0-4 0v4" />
            <path d="M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22" />
            <path d="m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7" />
          </svg>
          <p className="text-[10px] font-nav text-center mt-0.5">Ceremonia</p>
        </Link>      </li>
      <li>        <Link
          to="/fiesta"
          className="flex flex-col items-center p-1 hover:bg-primary-light rounded-lg"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-party-popper-icon lucide-party-popper"
          >
            <path d="M5.8 11.3 2 22l10.7-3.79" />
            <path d="M4 3h.01" />
            <path d="M22 8h.01" />
            <path d="M15 2h.01" />
            <path d="M22 20h.01" />
            <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
            <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
            <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
            <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
          </svg>
          <p className="text-[10px] font-nav text-center mt-0.5">Fiesta</p>
        </Link>
      </li>
      <li>        <Link
          to="/asistencia"
          className="flex flex-col items-center p-1 hover:bg-primary-light rounded-lg"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar-check-icon lucide-calendar-check"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="m9 16 2 2 4-4" />
          </svg>
          <p className="text-[10px] font-nav text-center mt-0.5">Asistencia</p>
        </Link>      </li>
      <li>
        <button
          onClick={openModal}
          className="flex flex-col items-center p-1 hover:bg-primary-light rounded-lg w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-more-horizontal"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
          <p className="text-[10px] font-nav text-center mt-0.5">Más</p>
        </button>
      </li>
    </ul>
    <MoreModal isOpen={isModalOpen} onClose={closeModal} />
  </div>
);
};

export default Navbar;
