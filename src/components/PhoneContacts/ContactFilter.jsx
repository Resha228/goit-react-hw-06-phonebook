
import { useDispatch } from "react-redux";
import { findContacts } from '../../Redux/FilterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        onChange={(evt) => dispatch(findContacts(evt.target.value))}
      ></input>
    </div>
  );
};
