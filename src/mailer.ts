import { emailJSKey } from "./vars/constantValues";

const mailer = async (e: any) => {
  // @ts-ignore
  const from_name =
    (document.getElementById("name-content") as HTMLInputElement).value ||
    "No Name";
  // @ts-ignore
  const message = (document.getElementById("mail-content") as HTMLInputElement)
    .value;
  try {
    e.preventDefault();

    if (message.length) {
      await window.emailjs.send(
        "service_7sd5x5o",
        "template_nibjan9",
        { from_name, message },
        emailJSKey
      );
      alert("Message sent successfully!");
      /*
      TODO
       from_name.length &&
       document.getElementById("name-content")?.value
       = "";
       message.length &&
       document.getElementById("mail-content")?.value
       = "";
      */
    } else {
      alert("Please Enter a message!");
    }
  } catch (e) {
    alert(e);
    console.log(e);
  }
};

export default mailer;
