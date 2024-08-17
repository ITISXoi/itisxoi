import React from "react";
import { Control, Controller } from "react-hook-form";
import Select, { Props, GroupBase } from "react-select";
import { cn } from "../../utils/helper";

interface FormSelectProps {
  title?: string;
  name: string;
  control: Control;
  required?: boolean;
  containerClassName?: string;
}

function FormSelect<
  OptionType,
  IsMulti extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>
>({
  title,
  name,
  required,
  control,
  containerClassName,
  ...props
}: Props<OptionType, IsMulti, GroupType> & FormSelectProps) {
  return (
    <div className={cn(containerClassName, "flex flex-col mb-4")}>
      <div className="flex flex-row items-center">
        {title && <p className="font-medium leading-normal mb-2">{title}</p>}
      </div>
      <Controller
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Select
              {...props}
              onChange={onChange}
              value={value}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  border: state.isFocused ? "4px solid #aedabc" : "",
                  boxShadow: "none",
                  "&:hover": {
                    border: "",
                  },
                  padding: state.isFocused ? "0 0" : "2px 2px",
                  height: 48,
                  borderRadius: 12,
                }),
                option: (baseStyles) => ({
                  ...baseStyles,
                  zIndex: 1000,
                }),
              }}
            />
            {error?.message && <p className="text-red-500">{error?.message}</p>}
          </>
        )}
        name={name}
        control={control}
      />
    </div>
  );
}

export default FormSelect;
