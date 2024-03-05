<template>
        <div class="form-main">
      <div class="main-wrapper">
        <h2 class="form-head">Let's Sync Up</h2>
        <form class="form-wrapper">
          <div class="form-card">
            <input
              class="form-input"
              type="text"
              name="full_name"
              required="required"
            />
            <label class="form-label" for="full_name">Name</label>
          </div>

          <div class="form-card">
            <input
              class="form-input"
              type="email"
              name="email"
              required="required"
            />
            <label class="form-label" for="email">Email</label>
          </div>

          <div class="form-card">
            <input
              class="form-input"
              type="number"
              name="phone_number"
              required="required"
            />
            <label class="form-label" for="phone_number">Phone number</label>
          </div>

          <div class="form-card">
            <textarea
              class="form-textarea"
              maxlength="420"
              rows="3"
              name="phone_number"
              required="required"
            ></textarea>
            <label class="form-textarea-label" for="phone_number"
              >Address</label
            >
          </div>
          <div class="btn-wrap">
            <button> Submit </button>
          </div>
        </form>
      </div>
    </div>
</template>
<script>
export default {
    name:'ContactUs'
}
</script>
<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap");
$color-gray: rgba(233,33,99,1);
$color-black: #000;


.form-main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .main-wrapper {
    border-radius: 10px;
    padding: 45px;
    width: 40%;
    @media screen and (max-width: 991px) {
      width: 70%;
    }
    @media screen and (max-width: 767px) {
      width: auto;
    }
    .form-head {
      font-size: 30px;
      line-height: 40px;
      font-weight: 600;
      text-align: center;
      margin: 0px 0 25px;
    }
    .form-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 15px;
      .form-card {
        position: relative;
        width: 100%;

        .form-input {
          padding: 20px 25px 15px;
          width: 100%;
          border: 1px solid $color-black;
          border-radius: 5px;
          background: transparent;
          outline: none;
          font-size: 20px;
          line-height: 30px;
          font-weight: 400;
              box-sizing: border-box;

          &:valid,
          &:focus {
            border: 1px solid $color-gray;
          }

          &:valid ~ .form-label,
          &:focus ~ .form-label {
            color: $color-gray;
            top: 30%;
            transform: translateY(-70%);
            font-size: 13px;
            line-height: 23px;
          }

          &:-webkit-autofill,
          &:-webkit-autofill:hover,
          &:-webkit-autofill:focus,
          &:-webkit-autofill:active {
            transition: background-color 9999s ease-in-out 0s;
          }
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }

        .form-label {
          position: absolute;
          left: 25px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          transition: 0.3s;
          margin: 0;
          font-size: 18px;
          line-height: 28px;
          font-weight: 500;
        }
        .form-textarea {
          padding: 20px 25px 15px;
          width: 100%;
          border: 1px solid $color-black;
          border-radius: 5px;
          background: transparent;
          outline: none;
          font-size: 20px;
          line-height: 30px;
          font-weight: 400;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          resize: none;
              box-sizing: border-box;

          &:valid,
          &:focus {
            border: 1px solid $color-gray;
          }

          &:valid ~ .form-textarea-label,
          &:focus ~ .form-textarea-label {
            color: $color-gray;
            top: 18%;
            transform: translateY(-82%);
            font-size: 13px;
            line-height: 23px;
          }

          &:-webkit-autofill,
          &:-webkit-autofill:hover,
          &:-webkit-autofill:focus,
          &:-webkit-autofill:active {
            transition: background-color 9999s ease-in-out 0s;
          }
        }
        .form-textarea-label {
          position: absolute;
          left: 25px;
          top: 30%;
          transform: translateY(-70%);
          pointer-events: none;
          transition: 0.3s;
          margin: 0;
          font-size: 18px;
          line-height: 28px;
          font-weight: 500;
        }
      }
    }
  }
}
.btn-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
padding: 16px 0 0;
  }
.btn-wrap button {
  padding: 0 32px;
  font-size: 18px;
  line-height: 48px;
  border: 1px solid transparent;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.5s ease;
  cursor: pointer; box-shadow: 0 0 5px 5px #00000020;
}
.btn-wrap button:hover {
  border: 1px solid #000;
  background: transparent;
  
}

</style>