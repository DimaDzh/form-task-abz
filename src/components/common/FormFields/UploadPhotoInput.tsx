import { FieldError, useFormContext } from "react-hook-form";

type UploadButtonProps = {
  name: string;
};

export default function UploadPhotoInput({ name }: UploadButtonProps) {
  const method = useFormContext();

  const {
    register,
    formState: { errors },
  } = method;

  const error = errors[name] as FieldError;

  return (
    <section className="relative">
      <div className="flex flex-col group lg:flex-row space-y-2 lg:space-y-0 items-center cursor-pointer w-full">
        <label
          htmlFor={`fileInput${name}`}
          className="flex justify-between w-full"
        >
          <span className="bg-light-gray border rounded-r-none group-hover:bg-primary-hover flex items-center space-x-2 px-4 py-3 h-[54px]  font-bold rounded-md cursor-pointer transition-all">
            Upload
          </span>

          <input
            id={`fileInput${name}`}
            type="file"
            className="hidden"
            {...register(name, {
              validate: (value) => {
                const isExists = !!value.length;
                const isGoodSize = value[0] && value[0].size <= 5000000;
                const isImageType =
                  value[0] &&
                  value[0].type.includes("image/jpeg" || "image/jpg");

                if (!isExists) return "Photo is required";
                if (!isGoodSize) return "Photo size must not exceed 5MB";
                if (!isImageType) return "Photo should be jpg/jpeg image";

                return undefined;
              },
            })}
          />
          <div className="inline-flex w-full cursor-pointer h-[54px] px-4 border border-disabled text-gray items-center rounded-md rounded-l-none">
            Upload your photo
          </div>
        </label>
      </div>
      {error && (
        <span className="absolute top-10 left-0 whitespace-break-spaces text-error text-sm mt-4">
          {error?.message}
        </span>
      )}
    </section>
  );
}
