import React, { FC } from 'react';

type Props = {
  selected: string;
  setSelected: (event) => void;
};

export const Checkboxes: FC<Props> = ({ selected, setSelected }) => {
  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <h3 className="title">Select Subject?</h3>
      <div className="checkboxes">
        <div className="round">
          <label htmlFor="option" className="label">
            <input
              type="checkbox"
              id="option"
              name="option"
              value="option1"
              checked={selected === 'option1'}
              onChange={handleOptionChange}
            />
            General Inquiry
          </label>
        </div>
        <div className="round">
          <label htmlFor="option2" className="label">
            <input
              type="checkbox"
              id="option2"
              name="option"
              value="option2"
              checked={selected === 'option2'}
              onChange={handleOptionChange}
            />
            General Inquiry
          </label>
        </div>
        <div className="round">
          <label htmlFor="option3" className="label">
            <input
              type="checkbox"
              id="option3"
              name="option"
              value="option3"
              checked={selected === 'option3'}
              onChange={handleOptionChange}
            />
            General Inquiry
          </label>
        </div>
        <div className="round">
          <label htmlFor="option4" className="label">
            <input
              type="checkbox"
              id="option4"
              name="option"
              value="option4"
              checked={selected === 'option4'}
              onChange={handleOptionChange}
            />
            General Inquiry
          </label>
        </div>
      </div>

    </div>
  );
};
