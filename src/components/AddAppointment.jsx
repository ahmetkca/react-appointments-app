import { BiCalendarPlus } from "react-icons/bi";


const FormItem = ({
  inputType,
  labelName,
  formItemId,
  inputFallback = <input type={inputType} name={labelName} id={formItemId}
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

const AddAppointment = () => {

  return (
    <div>
      <button className="w-full px-2 py-3 text-left text-white bg-blue-400 rounded-t-md">
        <div><BiCalendarPlus className="inline-block align-text-top" /> Add Appointment</div>
      </button>
      <div className="border-b-2 border-r-2 border-l-2 border-blue-200 rounded-b-md pl-4 pr-4 pb-4">
        <FormItem inputType="text" labelName="Owner Name" formItemId="ownerName" />
        <FormItem inputType="text" labelName="Pet Name" formItemId="petName" />
        <FormItem inputType="date" labelName="Apt Date" formItemId="aptDate" />
        <FormItem inputType="time" labelName="Apt Time" formItemId="aptTime" />
        <FormItem inputType={null} labelName="Appointment Notes" formItemId="aptNotes"
          inputFallback={<textarea id={"aptNotes"} name={"aptNotes"} rows="3"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Detailed comments about the condition"></textarea>} />
      </div>
    </div>
  );
}

export default AddAppointment;
