export const fetchPositions = async () => {
  try {
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
