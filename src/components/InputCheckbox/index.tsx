import classNames from "classnames";
import { useRef } from "react";
import { InputCheckboxComponent } from "./types";

export const InputCheckbox: InputCheckboxComponent = ({
  id,
  checked = false,
  disabled,
  onChange,
}) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`);

  const handleCheckboxChange = () => {
    const newValue = !checked;
    onChange(newValue);
  };

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        // the CSS label was positioned on top of the input, caused the pointer act as expected but blocked any clicks from reaching the input and triggering click events or changes
        htmlFor={inputId} // Bug #2 resolved through for attribute
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};
