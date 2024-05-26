// import emailjs from "emailjs-com";
// import swal from "sweetalert2";

const Advertisement = {
  render: () => {
    return `
    <div class="ad-container">
          <div class="ad d-flex" id="ad-home">
            <a href="/">
              <img src="/images/horizontal-ad.svg" />
            </a>
          </div>
        </div>
        `;
  },
  after_render: async () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };

      try {
        const response = await emailjs.send(
          "Your Service Id",
          "Your Template Id",
          data,
          "Your User Id"
        );

        if (response.status === 200) {
          swal.fire("Great Job!", "Thanks for Contacting Us!", "success");
        }
      } catch (error) {
        console.log(error);
        if (error) {
          swal.fire(
            "Oops!",
            "Sorry, Something bad really happended, Please try again",
            "error"
          );
        }
      }
    };

    document
      .getElementById("contactform")
      .addEventListener("submit", handleSubmit);
  },
};

export default Advertisement;
