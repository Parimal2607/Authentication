import CryptoJS from "crypto-js";

//Encypt Data

export const encyptData = (data) => {
    let b64 = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      "my-secret-key@123"
    ).toString();
    let e64 = CryptoJS.enc.Base64.parse(b64);
    let eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
  };
  
  //Decrypt Data
  export const decryptData = (ciphertext) => {
    let reb64 = CryptoJS.enc.Hex.parse(ciphertext);
    let bytes = reb64.toString(CryptoJS.enc.Base64);
    let decrypt = CryptoJS.AES.decrypt(bytes, "my-secret-key@123");
    let plain = decrypt?.toString(CryptoJS.enc.Utf8);
    plain = JSON?.parse(plain);
    return plain;
  };