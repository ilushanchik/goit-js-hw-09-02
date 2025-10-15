let formData = {
   email: "",
   message: "",
};
console.log(formData);
const formContainer = document.querySelector(".feedback-form");


const savedItem = localStorage.getItem("feedback-form-state");
if (savedItem) {
   const formData = JSON.parse(savedItem);
   formContainer.elements.email.value = formData.email || "";
   formContainer.elements.message.value = formData.message || "";
   console.log(formData);
}

formContainer.addEventListener("input", () => {
   formData.email = formContainer.elements.email.value;
   formData.message = formContainer.elements.message.value;
   localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

formContainer.addEventListener("submit", e => {
   e.preventDefault();
   if (formContainer.elements.email.value === "" || formContainer.elements.message.value === "") {
      alert("Fill please all fields")
   }
   else {
      console.log(formData);
      localStorage.clear();
      formContainer.reset();
   }
})
