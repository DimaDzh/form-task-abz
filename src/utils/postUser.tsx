type UserData = {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: [File];
};

export const postUser = async ({
  email,
  name,
  phone,
  photo,
  position_id,
}: UserData) => {
  try {
    const tokenResponse = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    const { token } = await tokenResponse.json();

    const formData = new FormData();
    formData.append("position_id", position_id);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("photo", photo[0]);

    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      {
        method: "POST",
        body: formData,
        headers: {
          Token: token,
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      console.log(data);
      return data;
    } else {
      console.error(data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export type { UserData };
