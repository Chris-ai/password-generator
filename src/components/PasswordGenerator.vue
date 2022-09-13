<template>
  <div class="container">
    <h1>Password Generator</h1>
    <div class="input-field">
      <textarea class="psswd" v-model="password" placeholder="P4$5W0rD!" />

      <button @click="copyPsswd" class="copy-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
      </button>
    </div>

    <div class="generator">
      <div class="field">
        <p>Character Length</p>
        <p class="number">{{ length }}</p>
      </div>

      <div class="slider-container">
        <input
          id="sliderInput"
          class="slider"
          type="range"
          min="0"
          max="50"
          v-model="length"
        />
      </div>

      <div class="checkbox-area">
        <label class="checkbox-field">
          <input id="upper" type="checkbox" name="checkbox" />
          Include Uppercase Letters
        </label>

        <label class="checkbox-field">
          <input id="lower" type="checkbox" name="checkbox" />
          Include Lowercase Letters
        </label>

        <label class="checkbox-field">
          <input id="numbers" type="checkbox" name="checkbox" />
          Include Numbers
        </label>

        <label class="checkbox-field">
          <input id="symbols" type="checkbox" name="checkbox" />
          Include Symbols
        </label>
      </div>

      <div class="field strength-state">
        <p>strength</p>

        <div class="chart">
          <p class="password-power">{{ power }}</p>
          <div class="pines">
            <div class="pine neutral"></div>
            <div class="pine neutral"></div>
            <div class="pine neutral"></div>
            <div class="pine neutral"></div>
          </div>
        </div>
      </div>

      <button @click="generatePassword" class="generate-password-btn">
        GENERATE
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
      <p v-show="error" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { passwordStrength } from "check-password-strength";

export default {
  data() {
    return {
      password: "",
      length: 0,
      power: "",
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    copyPsswd() {
      try {
        navigator.clipboard.writeText(this.password);
        alert("Copied succesfully");
      } catch (e) {
        console.error(e);
      }
    },
    sliderRangeColor() {
      const slider = document.getElementById("sliderInput");
      const min = slider.min;
      const max = slider.max;
      const value = slider.value;

      slider.style.background = `linear-gradient(to right, rgba(164, 255, 175, 1) 0%, rgba(164, 255, 175, 1) ${
        ((value - min) / (max - min)) * 100
      }%, rgba(19, 18, 24, 1) ${
        ((value - min) / (max - min)) * 100
      }%, rgba(19, 18, 24, 1) 100%)`;

      slider.oninput = function () {
        this.style.background = `linear-gradient(to right, rgba(164, 255, 175, 1) 0%, rgba(164, 255, 175, 1) ${
          ((this.value - this.min) / (this.max - this.min)) * 100
        }%, rgba(19, 18, 24, 1) ${
          ((this.value - this.min) / (this.max - this.min)) * 100
        }%, rgba(19, 18, 24, 1) 100%)`;
      };
    },
    createCharacters() {
      const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercase = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "~!@#$%^&*(){}[],./?";

      let characters = [];

      let upperCheckbox = document.getElementById("upper");
      let lowerCheckbox = document.getElementById("lower");
      let numbersCheckbox = document.getElementById("numbers");
      let symbolsCheckbox = document.getElementById("symbols");

      upperCheckbox.checked ? (characters += uppercase) : characters;
      lowerCheckbox.checked ? (characters += lowercase) : characters;
      numbersCheckbox.checked ? (characters += numbers) : characters;
      symbolsCheckbox.checked ? (characters += symbols) : characters;

      return characters;
    },
    shuffle(characters) {
      return characters
        .split("")
        .sort(function () {
          return 0.5 - Math.random();
        })
        .join("");
    },
    Password(shuffled) {
      var charactersLength = shuffled.length;
      let result = "";
      for (var i = 0; i < this.length; i++) {
        result += shuffled.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    },
    showPasswordStrength(result) {
      let passwordOptions = [
        {
          id: 0,
          value: "Too weak",
          minDiversity: 0,
          minLength: 0,
        },
        {
          id: 1,
          value: "Weak",
          minDiversity: 2,
          minLength: 6,
        },
        {
          id: 2,
          value: "Medium",
          minDiversity: 3,
          minLength: 10,
        },
        {
          id: 3,
          value: "Strong",
          minDiversity: 4,
          minLength: 16,
        },
      ];

      let value = passwordStrength(result, passwordOptions).value;
      //   let pinsLen = passwordStrength(result).id + 1;
      let pins = document.querySelectorAll(".pine");

      pins.forEach((element) => {
        element.style.background = "transparent";
        element.style.border = "2px solid rgb(229, 228, 233)";
      });

      switch (value) {
        case "Too weak":
          this.power = value;
          for (let i = 0; i < 1; i++) {
            pins[i].style.background = "rgb(74, 8, 8)";
            pins[i].style.border = "none";
          }
          break;
        case "Weak":
          this.power = value;
          for (let i = 0; i < 2; i++) {
            pins[i].style.background = "rgb(207, 74, 26)";
            pins[i].style.border = "none";
          }
          break;
        case "Medium":
          this.power = value;
          for (let i = 0; i < 3; i++) {
            pins[i].style.background = "rgb(248, 204, 101)";
            pins[i].style.border = "none";
          }
          break;
        case "Strong":
          this.power = value;
          for (let i = 0; i < 4; i++) {
            pins[i].style.background = "rgb(74, 140, 56)";
            pins[i].style.border = "none";
          }
          break;
      }
    },
    generatePassword() {
      let characters = this.createCharacters();
      if (characters.length === 0) {
        // alert("One chec")
        this.error = true;
        this.errorMessage = "At least one checkbox is required!";
        setTimeout(() => {
          this.error = false;
          this.errorMessage = "";
        }, 4000);
      } else {
        if (this.length === 0) {
          this.error = true;
          this.errorMessage = "Select length of a password";
          setTimeout(() => {
            this.error = false;
            this.errorMessage = "";
          }, 4000);
        } else {
          console.log("unshuffled", characters);

          let shuffled = this.shuffle(characters);

          console.log("shuffled", shuffled);

          let result = this.Password(shuffled);

          console.log("final password to show", result);

          this.showPasswordStrength(result);

          //   console.log("strength", passwordStrength(result).value);
          this.password = result;
        }
      }
    },
  },
  mounted() {
    this.sliderRangeColor();
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--whitish);

  h1 {
    color: var(--dark-grayish);
    font-weight: var(--fw-bold);
    margin: 1rem 0;
    font-size: 1.3rem;
    transition: 0.5s ease all;
  }

  .input-field {
    background: var(--light-gray);
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s ease all;
    max-width: 600px;
    .psswd {
      font-size: 1.2rem;
      color: var(--whitish);
      background: transparent;
      border: none;
      width: 80%;
      max-width: 80%;
      outline: none;
      resize: none;
      //   text-align: center;
      &::placeholder {
        color: var(--light-grayish);
      }
    }
    .copy-btn {
      height: 25px;
      width: 25px;
      background: transparent;
      border: none;
      outline: none;
      position: relative;
      cursor: pointer;
      transition: 0.5s ease all;
      svg {
        stroke: var(--lime-green);
      }

      &::before {
        min-width: 200%;
        height: 100%;
        content: var(--content);
        background: var(--dark-gray);
        color: var(--whitish);
        position: absolute;
        padding: 0.25rem 0.5rem;
        border-radius: 0.5rem;
        font-size: 0.8rem;
        // display: flex;
        justify-content: center;
        align-items: center;
        right: 40px;
        top: 0;
        bottom: 0;
        margin: auto;
        transition: 0.3s ease all;
        animation: slideFromleft 0.2s ease-in-out;
        display: none;
      }

      &:hover {
        &::before {
          display: flex;
        }
      }
    }
  }

  .generator {
    max-width: 600px;
    background: var(--light-gray);
    padding: 1rem;
    margin: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.5s ease all;

    .field {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 0;
      transition: 0.5s ease all;
      p {
        font-size: 1.2rem;
      }
      .number {
        color: var(--lime-green);
        font-size: 1.6rem;
      }
    }

    .slider-container {
      width: 100%;
      margin: 1rem 0 2rem 0;

      .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 10px;
        outline: none;
      }
      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50em;
        background: var(--whitish);
        transition: 0.3s ease all;
        cursor: pointer;
        &:hover {
          background: var(--dark-gray);
          border: 1px solid var(--lime-green);
        }
      }

      .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50em;
        background: var(--whitish);
        cursor: pointer;
      }
    }

    .checkbox-area {
      .checkbox-field {
        margin: 1rem 0;
        font-size: 1rem;
        line-height: 1.1;
        display: grid;
        grid-template-columns: 1em auto;
        gap: 0.5em;

        input[type="checkbox"] {
          /* Add if not using autoprefixer */
          -webkit-appearance: none;
          appearance: none;
          /* For iOS < 15 to remove gradient background */
          background-color: transparent;
          /* Not removed via appearance */
          margin: 0;
          font: inherit;
          color: var(--dark-gray);
          width: 1.15em;
          height: 1.15em;
          border: 1px solid var(--whitish);
          //   border-radius: 0.15em;
          position: relative;
          transform: translateY(-0.075em);
          display: grid;
          place-content: center;
          cursor: pointer;
        }
        input[type="checkbox"]::before {
          content: "";
          width: 0.65em;
          height: 0.65em;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em var(--lime-green);
          transform-origin: bottom left;
          clip-path: polygon(
            14% 44%,
            0 65%,
            50% 100%,
            100% 16%,
            80% 0%,
            43% 62%
          );
        }

        input[type="checkbox"]:checked::before {
          transform: scale(1);
        }
      }
    }
    .strength-state {
      background: var(--dark-gray);
      padding: 1rem;
      transition: 0.5s ease all;
      p {
        font-size: 1.1rem;
        text-transform: uppercase;
        color: var(--dark-grayish);
        font-weight: var(--fw-semi-bold);
      }
      .chart {
        display: flex;
        align-items: center;
        .password-power {
          margin-right: 0.5rem;
          color: var(--whitish);
        }
        .pines {
          display: flex;
          .pine {
            margin: 0 0.3rem;
            height: 30px;
            width: 10px;
          }
        }
      }

      @media (max-width: 370px) {
        p {
          font-size: 0.8rem;
        }
      }
    }
    .generate-password-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      background: var(--lime-green);
      border: 1px solid var(--lime-green);
      transition: 0.5s ease all;
      font-weight: var(--fw-bold);
      color: var(--dark-gray);
      cursor: pointer;
      svg {
        height: 15px;
        width: 15px;
        margin-left: 1rem;
      }

      &:hover {
        color: var(--lime-green);
        background: var(--dark-gray);

        svg {
          fill: var(--lime-green);
        }
      }
    }

    .error {
      color: rgba(206, 53, 53, 0.8);
      padding: 0.4rem;
      text-align: center;
      animation: showUp 0.8s,
        shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }
  }

  .neutral {
    border: 2px solid var(--whitish);
    background: transparent;
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 2rem;
    }
    .input-field {
      .psswd {
        font-size: 2rem;
      }

      .copy-btn {
        height: 35px;
        width: 35px;

        &::before {
          font-size: 1rem;
          padding: 0.1rem 0.3rem;
          right: -25px;
          top: -90px;
          bottom: 0;
          margin: auto;
          box-shadow: 0 0 6px 0 var(--light-grayish);
        }
      }
    }

    .generator {
      .field {
        p {
          font-size: 1.2em;
        }
        .number {
          font-size: 2rem;
        }
      }
    }

    .generate-password-btn {
      font-size: 1.4rem;
      svg {
        height: 50px;
        width: 50px;
      }
    }
  }
}
</style>