import { TextField } from "@mui/material";
import { FieldError, useFormContext } from "react-hook-form";

type TextInputProps = {
  name: string;
  labelText: string;
  placeholderText: string;
  helperText?: string;
  isRequired: boolean;
};

export default function EmailInput({
  labelText,
  placeholderText,
  helperText,
  name,
  isRequired,
}: TextInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name] as FieldError;

  return (
    <div className="w-full relative">
      <TextField
        id={name}
        label={labelText}
        variant="outlined"
        placeholder={placeholderText}
        className="w-full"
        color={error ? "error" : "primary"}
        {...register(name, {
          ...(isRequired && { required: "This field is required" }),
          pattern: {
            value: /^\S+@\S+\.\S+$/, 
            message: "Invalid email address",
          },
        })}
        helperText={!error && helperText}
      />
      {error && (
        <span className="absolute top-10 left-0 whitespace-break-spaces text-error text-sm mt-4">
          {error.message}
        </span>
      )}
    </div>
  );
}
