import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FieldError, useFormContext } from "react-hook-form";

type CustomRadioProps = {
  name: string;
  data:
    | {
        id: number;
        name: string;
      }[]
    | undefined;
  formTitle: string;
};

export default function CustomRadioGroup({
  name,
  data,
  formTitle,
}: CustomRadioProps) {
  const {
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();

  const value = getValues(name);
  const error = errors[name] as FieldError;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(name, event.target.value);
  };

  return (
    <div className="relative">
      <FormControl component="fieldset" error={Boolean(!value)}>
        <FormLabel component="legend">{formTitle}</FormLabel>
        <RadioGroup name={name} onChange={handleChange}>
          {data &&
            data.map(({ id, name }) => (
              <FormControlLabel
                key={"radio-position-" + id}
                value={id}
                control={
                  <Radio
                    sx={{
                      color: "#00BDD3",
                      "&.Mui-checked": {
                        color: "#00BDD3",
                      },
                    }}
                  />
                }
                label={name}
              />
            ))}
        </RadioGroup>
      </FormControl>
      {error && (
        <span className="absolute top-full left-0 text-error text-sm mt-1">
          {error.message}
        </span>
      )}
    </div>
  );
}
