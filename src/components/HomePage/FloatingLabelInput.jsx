// components/FloatingLabelInput.jsx
import { maxLengthCheck } from '@/_helper/Regex';
import { useState } from 'react';

const FloatingLabelInput = ({ label, type, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      {(type === 'textarea' && (
        <div className={'floating-label-input floating-textarea'}>
          <textarea
            type={type}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => setIsFocused(e.target.value !== '')}
            className={`${value || isFocused ? 'filled' : ''}`}
          ></textarea>
          <label className={value || isFocused ? 'active' : ''}>{label}</label>
        </div>
      )) || (
        <div className={'floating-label-input'}>
          {(type === 'number' && (
            <input
              type={type}
              value={value}
              maxLength="10"
              onInput={maxLengthCheck}
              onChange={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => setIsFocused(e.target.value !== '')}
              className={`${value || isFocused ? 'filled' : ''}`}
            />
          )) || (
            <input
              type={type}
              value={value}
              onChange={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => setIsFocused(e.target.value !== '')}
              className={`${value || isFocused ? 'filled' : ''}`}
            />
          )}

          <label className={value || isFocused ? 'active' : ''}>{label}</label>
        </div>
      )}
    </>
  );
};

export default FloatingLabelInput;
