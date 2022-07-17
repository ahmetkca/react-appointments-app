import { BiTrash  } from "react-icons/bi";

const AppointmentInfo = ({ appointment }) => {
    return (
        <li key={appointment.id} className="px-3 py-3 flex items-start">
            <button type='button'
              className="p-1.5 mr-1.5 mt-1 rounded text-whhite bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <BiTrash className='inline-block align-baseline'/></button>
                <div className="flex-grow">
                  <div className='flex items-start'>
                    <span className='span-none font-medium text-2xl text-blue-500'>{appointment.petName}</span>
                    <span className="flex-grow text-right">{appointment.aptDate}</span>
                  </div>
                  <div><b className='font-bold text-blue-500'>Owner:</b> {appointment.ownerName}</div>
                  <div className='leading-tight'>{appointment.aptNotes}</div>
                </div>
          </li>
    );
}

export default AppointmentInfo;