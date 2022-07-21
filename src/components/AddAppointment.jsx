import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";


const FormItem = ({
  handleChange,
  inputType,
  labelName,
  formItemId,
  inputFallback = <input type={inputType} name={labelName} id={formItemId} onChange={handleChange}
    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />,
}) => {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:text-start sm:gap-4 sm:items-start sm:pt-5 ">
      <label htmlFor={formItemId} className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
        {labelName}
      </label>
      <div className="w-full">
        {inputFallback}
      </div>
    </div>
  );
};

const AddAppointment = ({ addNewAppointment }) => {

  const [toggle, setToggle] = useState(true);

  let [formData, setFormData] = useState({
    ownerName: '',
    petName: '',
    aptDate: '',
    aptTime: '',
    aptNotes: '',
  });

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div>
      <button onClick={() => handleToggle()}
        className={`w-full px-2 py-3 text-left text-white bg-blue-400 focus:ring-2 focus:ring-offset-2 ${toggle ? 'rounded-t-md' : 'rounded-md'}`}>
        <div><BiCalendarPlus className="inline-block align-text-top" /> Add Appointment</div>
      </button>
      {toggle &&
        <div className="border-b-2 border-r-2 border-l-2 border-blue-200 rounded-b-md pl-4 pr-4 pb-4">
          <FormItem inputType="text" labelName="Owner Name" formItemId="ownerName" handleChange={(event) => { setFormData({ ...formData, ownerName: event.target.value }) }} />
          <FormItem inputType="text" labelName="Pet Name" formItemId="petName" handleChange={(event) => { setFormData({ ...formData, petName: event.target.value }) }} />
          <FormItem inputType="date" labelName="Apt Date" formItemId="aptDate" handleChange={(event) => { setFormData({ ...formData, aptDate: event.target.value }) }} />
          <FormItem inputType="time" labelName="Apt Time" formItemId="aptTime" handleChange={(event) => { setFormData({ ...formData, aptTime: event.target.value }) }} />
          <FormItem inputType={null} labelName="Appointment Notes" formItemId="aptNotes"
            inputFallback={<textarea id={"aptNotes"} name={"aptNotes"} rows="3"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Detailed comments about the condition"
              onChange={(event) => { setFormData({ ...formData, aptNotes: event.target.value }) }}></textarea>}/>
          <button type="submit" onClick={() => {
            console.log(formData);
            addNewAppointment(formData); 
            setFormData({
              ownerName: '',
              petName: '',
              aptDate: '',
              aptTime: '',
              aptNotes: '',
            })
          }}>Submit</button>
        </div>
      }
    </div>
  );
}

export default AddAppointment;
