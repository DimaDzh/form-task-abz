 export async function getUsers() {
  try {
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
}

export const fetchUsers = async (page: number, count: number) => {
  try {
      const response = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`
  );
   if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
    const data = await response.json();
    return data;
  
    
  } catch (error) {
     console.error("Error fetching users:", error);
  }
}
  

 




