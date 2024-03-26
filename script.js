//your JS code here. If required.
const inputs = document.querySelectorAll('.code');
    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.keyCode === 8 && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });