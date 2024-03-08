type PostUserData = {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: File;
};

// export  const postUser = async (userData: PostUserData) => {
//   console.log("🚀 ~ postUser ~ userData:", userData)

//   const bearerToken = import.meta.env.VITE_API_TOKEN;
//   try {
//     const formData = new FormData();
//     formData.append("name", userData.name);
//     formData.append("email", userData.email);
//     formData.append("phone", userData.phone);
//     formData.append("position_id", userData.position_id);
//     if (Array.isArray(userData.photo)) {
//       userData.photo.forEach((file, index) => {
//         formData.append(`photo[${index}]`, file);
//       });
//     } else {
//       formData.append("photo", userData.photo);
//     }
//     const response = await fetch(
//       "https://frontend-test-assignment-api.abz.agencyd/api/v1/users",
//       {
//         method: "POST",
//         body: formData,
//         headers: {
//           Authorization: `Token ${bearerToken}`,
//         },
//       }
//     );
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     } else {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to post user data");
//     }
//   } catch (error) {
//     console.error("Error posting user data:", error);
//     throw error;
//   }
// };

type UserData = {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: File;
};

export const postUser = async (userData: UserData) => {
  try {
    const tokenResponse = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    const { token } = await tokenResponse.json();

    const formData = new FormData();
    formData.append("position_id", userData.position_id);
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("phone", userData.phone);
    formData.append("photo", userData.photo[0]);

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

export type { PostUserData };
