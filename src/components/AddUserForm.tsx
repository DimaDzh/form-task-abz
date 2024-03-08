import { FormProvider, useForm } from "react-hook-form";
import TextInput from "./common/FormFields/TextInput";
import { useQuery, useQueryClient } from "react-query";
import { fetchPositions } from "../utils/getPositions";
import UploadPhotoInput from "./common/FormFields/UploadPhotoInput";
import { useState } from "react";
import EmailInput from "./common/FormFields/EmailInput";
import PhoneInput from "./common/FormFields/PhoneInput";
import { UserData, postUser } from "../utils/postUser";
import SuccessAlert from "./common/SuccessAlert";
import CustomRadioGroup from "./common/FormFields/RadioGroup";

type PositionsListProps = {
  positions: {
    id: number;
    name: string;
  }[];
};

export default function AddUserForm() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const queryClient = useQueryClient();
  const refetchUsers = async () => {
    await queryClient.invalidateQueries("users");
  };
  const { data: positionList } = useQuery<PositionsListProps>({
    queryFn: () => fetchPositions(),
    queryKey: ["positions"],
  });

  const method = useForm<UserData>({
    mode: "onSubmit",
  });
  const {
    handleSubmit,
    reset,
    watch,
    formState: { isValid },
  } = method;
  const watchAll = watch();

  const onSubmit = async () => {
    await postUser({
      name: watchAll.name,
      email: watchAll.email,
      phone: watchAll.phone,
      position_id: watchAll.position_id,
      photo: watchAll.photo,
    }).then((response) => {
      if (response) {
        refetchUsers();
        setIsAlertVisible(true);
        reset();
        setTimeout(() => {
          setIsAlertVisible(false);
        }, 3000);
      }
    });
  };

  if (isAlertVisible) {
    return <SuccessAlert />;
  }
  return (
    <div className="container mb-[100px]">
      <h2 className="h1 mb-[50px] text-center">Working with POST request</h2>
      <FormProvider {...method}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto w-full gap-[50px] max-w-[380px]"
        >
          <TextInput
            isRequired
            name="name"
            labelText="Your name"
            placeholderText="Your name"
          />
          <EmailInput
            isRequired
            name="email"
            labelText="Email"
            placeholderText="Email"
          />
          <PhoneInput
            isRequired
            name="phone"
            labelText="Phone"
            placeholderText="Phone"
            helperText="+38 (XXX) XXX - XX - XX"
          />
          <CustomRadioGroup
            data={positionList?.positions}
            formTitle="Select your position"
            name={"position_id"}
          />
          <UploadPhotoInput name={"photo"} />

          <div className="w-full flex justify-center">
            <button
              className={isValid ? "btn-primary" : "btn-disabled text-white"}
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
