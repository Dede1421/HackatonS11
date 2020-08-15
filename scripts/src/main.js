function Calculadora() {
  const screen = document.getElementById("screen");
  const buttons = document.getElementById("buttons");

  const initialize = () => {
    screen.textContent = "0";
  };

  const calculator = () => {
    initialize();
    buttons.addEventListener("click", listenerClick);
  };

  const listenerClick = (event) => {
    if (event.target === buttons) return; // check if click div

    const command = event.target.textContent;

    if (command === "=") {
      if (isMathOperation(previousCommand())) {
        alert("Error!!");
      } else {
        screen.textContent = eval(screen.textContent);
      }
      return;
    }

    if (command === "DEL") {
      initialize();
      return;
    }

    if (isMathOperation(command) && isMathOperation(previousCommand())) {
      return;
    }

    if (command == "." && lastNumber().includes(".")) {
      alert("Ya es un numero decimal, no puedes agregar punto a un decimal !!");
      return;
    }

    if (screen.textContent === "0") {
      if (isNumeric(command) && command !== "0") {
        screen.textContent = command;
      }
      return;
    }

    screen.textContent += command;
  };

  const isMathOperation = (command) => ["*", "-", "+", "/"].includes(command);

  const previousCommand = () =>
    screen.textContent.charAt(screen.textContent.length - 1);

  const lastNumber = () => {
    return lastN(screen.textContent);
  };

  const lastN = (n) => {
    // "120*25-9.1+7" => "120A25A9.1A7" => resultado: 7
    const numbers = n
      .replace("*", "A")
      .replace("+", "A")
      .replace("-", "A")
      .replace("/", "A")
      .split("A");
    return numbers[numbers.length - 1];
  };

  const isNumeric = (num) => !isNaN(num);

  calculator();
}

Calculadora();
