// square.js
const SQUARE_API_URL = "https://connect.squareupsandbox.com/v2/inventory"; // Adjust the URL as needed

export const getSquareProducts = async () => {
  try {
    const response = await fetch(SQUARE_API_URL, {
      headers: {
        Authorization: `EAAAEC5JiNwD6f1IAaZWo1NIEVO08Iq3TSCw_lQyy8qeZ_Z8HHUxTS3iytYdlP29`, // Replace with your Square access token
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching Square products");
    }

    const data = await response.json();
    return data.objects;
  } catch (error) {
    throw error;
  }
};
