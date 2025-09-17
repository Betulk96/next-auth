import { auth } from "@/auth";


export const getAuthHeader = async () => {
  try {
    const session = await auth();
    const token = session?.accessToken;

    const authHeader = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    return authHeader;
  } catch (error) {
    console.error("Error while fetching auth header:", error);
    return {
      "Content-Type": "application/json",
    };
  }
};

const parseJWT = (token) => {
  // token.split(".") : token dan 3 elemanli bir dizi olusturur.
  // 2.eleman icinde token daki sifrelenmis data bulunur
  // atob bu sifrelenmis datayi cozer ve string hale getirir
  // JSON.parse string haldeki datayi JS object haline cevirir

  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch (error) {
    console.error("Failed to parse JWT:", error);
    return null;
  }
};
export const getIsTokenValid = (token) => {
  if (!token) return false;

  const parsedToken = parseJWT(token);
  if (!parsedToken || !parsedToken.exp) return false;

  const jwtExpireTimeStamp = parsedToken.exp;
  const jwtExpireDateTime = new Date(jwtExpireTimeStamp * 1000);

  return jwtExpireDateTime > new Date();
};

