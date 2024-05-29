import PropTypes from "prop-types";
import styles from "./Checkout.module.css";
import { useForm } from "react-hook-form";

const {
  section,
  title,
  form,
  input,
  input__tag: inputTag,
  input__label: inputLabel,
  "input-wrapper": inputWrapper,
  input__field: inputField,
  "input__field--error": inputFieldError,
  input__hint: inputHint,
  "btn-wrapper": btnWrapper,
  btn,
} = styles;

/** @type {Array} formFields - 表格欄位資料 */
const formFields = [
  {
    displayName: "姓名",
    nameAttribute: "full-name",
    type: "text",
    placeholderText: "桑德斯",
    isRequired: true,
    validateOptions: {
      required: "姓名必填",
    },
  },
  {
    displayName: "手機號碼",
    nameAttribute: "phone",
    type: "tel",
    placeholderText: "0958805298",
    isRequired: true,
    validateOptions: {
      required: "手機號碼必填",
      pattern: {
        value: /^[0-9]{10}$/g,
        message: "號碼格式錯誤",
      },
    },
  },
  {
    displayName: "信箱",
    nameAttribute: "email",
    type: "email",
    placeholderText: "example@email.com",
    isRequired: true,
    validateOptions: {
      required: "信箱必填",
      pattern: {
        value: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm,
        message: "信箱格式錯誤",
      },
    },
  },
  {
    displayName: "地址",
    nameAttribute: "address",
    type: "text",
    placeholderText: "270宜蘭縣蘇澳鎮建福路293號",
    isRequired: true,
    validateOptions: {
      required: "地址必填",
      pattern: {
        value:
          // Reference: https://dotblogs.com.tw/hatelove/2012/06/05/parse-taiwan-address-with-regex
          /(?<zipcode>(^\d{5}|^\d{3})?)(?<city>\D+[縣市])(?<district>\D+?(市區|鎮區|鎮市|[鄉鎮市區]))(?<others>.+)/gm,
        message: "地址格式錯誤",
      },
    },
  },
  {
    displayName: "備註（30 字以內）",
    nameAttribute: "note",
    type: "text",
    placeholderText: "備註內容",
    isRequired: false,
    validateOptions: {
      maxLength: {
        value: 30,
        message: "內容不得超過 30 個字",
      },
    },
  },
];

/** Input - 表單輸入欄位元件 */
function Input({
  displayName,
  nameAttribute,
  type,
  placeholderText,
  register,
  validateOptions,
  errors,
  isRequired,
}) {
  return (
    <div className={input}>
      {/* 欄位名稱 */}
      <div className={inputLabel}>
        <label>{displayName}</label>
        {isRequired && <span className={inputTag}>必填</span>}
      </div>
      {/* 使用者輸入區 */}
      <div className={inputWrapper}>
        <input
          {...register(nameAttribute, validateOptions)}
          type={type}
          name={nameAttribute}
          placeholder={placeholderText}
          className={`${inputField} ${
            errors[nameAttribute] && inputFieldError
          }`}
        />
        {/* 錯誤提示 */}
        <div className={inputHint}>
          {errors[nameAttribute] && errors[nameAttribute].message}
        </div>
      </div>
    </div>
  );
}

Input.propTypes = {
  displayName: PropTypes.string.isRequired,
  nameAttribute: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
  register: PropTypes.func.isRequired,
  validateOptions: PropTypes.object,
  errors: PropTypes.object,
  isRequired: PropTypes.bool.isRequired,
};

export default function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  function onSuccessSubmit() {
    alert("成功送出訂單！\r\n（註：表單僅供示意，不會蒐集個人資料）");
  }

  return (
    <section className={section}>
      <h2 className={title}>訂單資料填寫</h2>
      <form className={form} onSubmit={handleSubmit(onSuccessSubmit)}>
        <div>
          {formFields.map((field, i) => {
            return (
              <Input key={i} register={register} errors={errors} {...field} />
            );
          })}
        </div>
        <div className={btnWrapper}>
          <button type="submit" className={btn}>
            送出資料
          </button>
        </div>
      </form>
    </section>
  );
}
