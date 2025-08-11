import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets'; // ✅ Import assets

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);

  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: assets.home_icon },
    { name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon },
    { name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon },
    { name: 'Student Enrolled', path: '/educator/student-enrolled', icon: assets.person_tick_icon }
  ];

  return (
    isEducator && (
      <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col'>
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            end={item.path === '/educator'}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 hover:bg-gray-100 transition ${
                isActive ? 'bg-gray-200 font-semibold' : ''
              }`
            }
          >
            <img src={item.icon} alt={item.name} className='w-6 h-6' />
            <p className='md:block hidden'>{item.name}</p>
          </NavLink>
        ))}
      </div>
    )
  );
};

export default Sidebar;
