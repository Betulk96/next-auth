import { getAuthHeader } from "@/helpers/auth-helper";

const API_URL = process.env.AUTH0_AUDIENCE;

export const login = async (payload) => {
  try {
    console.log("payload", payload);
    const guestToken = payload.guestToken?.replace(/^"|"$/g, ""); // Başındaki ve sonundaki çift tırnakları kaldır
    //console.log("guestToken", guestToken);
    //console.log("API_URL", API_URL);
    console.log("guestToken", guestToken);

    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        /*  "X-Guest-Token": guestToken || "", */
      },
    });

    //console.log("auth service response:", response);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error of connexion.");
    }

    return response;
  } catch (error) {
    console.error("Error of login:", error.message);
    throw error;
  }
};

export const register = async (payload) => {
  console.log("payload", payload);
  try {
    const response = await fetch(`${API_URL}/auth/registerAnonymous`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //console.log("auth service response:", response);

    // Yanıtın başarılı olup olmadığını kontrol et
    if (!response.ok) {
      // Eğer başarısızsa hata mesajını döndür
      const errorData = await response.json(); // JSON yanıtını al
      console.log("Registration failed:", errorData);
      throw new Error(errorData.message || "Registration failed"); // İlgili hata mesajını döndür
    }

    // Başarılı yanıt varsa, yanıtın içeriğini al
    const data = await response.json();
    console.log("Registration successful:", data);
    return data; // Başarılı veriyi döndür
  } catch (error) {
    // Hata mesajını burada yakalayın
    console.error("Error during registration:", error.message);
    throw error; // Hata durumunda hatayı tekrar fırlatın
  }
};

export const registerAdmin = async (payload) => {
  console.log("payload admin", payload);
  try {
    const response = await fetch(`${API_URL}/auth/registerAdmin`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        ...(await getAuthHeader()),
      },
    });
    console.log("auth service response:", response);

    // Yanıtın başarılı olup olmadığını kontrol et
    if (!response.ok) {
      // Hata body’sini text olarak oku
      const errorText = await response.text();
      throw new Error(errorText || `Error ${response.status}`);
    }
    // Başarılı yanıt varsa, yanıtın içeriğini al
    const data = await response.json();
    console.log("Registration successful:", data);
    return data; // Başarılı veriyi döndür
  } catch (error) {
    // Hata mesajını burada yakalayın
    console.error("Error during registration:", error.message);
    throw error; // Hata durumunda hatayı tekrar fırlatın
  }
};
export const registerEmployee = async (payload) => {
  console.log("payload", payload);
  try {
    const response = await fetch(`${API_URL}/auth/registerAdmin`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        ...(await getAuthHeader()),
      },
    });
    //console.log("auth service response:", response);

    // Yanıtın başarılı olup olmadığını kontrol et
    if (!response.ok) {
      // Eğer başarısızsa hata mesajını döndür
      const errorData = await response.json(); // JSON yanıtını al
      console.log("Registration failed:", errorData);
      throw new Error(errorData.message || "Registration failed"); // İlgili hata mesajını döndür
    }

    // Başarılı yanıt varsa, yanıtın içeriğini al
    const data = await response.json();
    console.log("Registration successful:", data);
    return data; // Başarılı veriyi döndür
  } catch (error) {
    // Hata mesajını burada yakalayın
    console.error("Error during registration:", error.message);
    throw error; // Hata durumunda hatayı tekrar fırlatın
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await fetch(`${API_URL}/user/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Reset error.");
    }

    return true;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const resetPassword = async (payload) => {
  try {
    const response = await fetch(`${API_URL}/user/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Reset error.");
    }

    return true;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const getUserInfo = async () => {
  const url = `${API_URL}/auth/user`;
  const response = await fetch(url, {
    headers: await getAuthHeader(),
  });
  return response.json();
};

export const registerConfirm = async (code) => {
  const response = await fetch(`${API_URL}/auth/registerconfirmation/${code}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
