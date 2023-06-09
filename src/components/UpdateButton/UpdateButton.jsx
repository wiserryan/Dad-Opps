import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const formComponent = () => {
const [updateForm, setForm] = useState(false);

const togglesetForm = () => {
        setForm(!updateForm);
    };
    return (
        <div>
            <button onClick={togglesetForm}>Update Form</button>
            {updateForm && (
                <form>
                    test data
                </form>
            )}
        </div>
    );
};

function UpdateButton(props) {
  const dispatch = useDispatch();
  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'Update' })}
    >
      Update
    </button>
  );
}

export default UpdateButton;