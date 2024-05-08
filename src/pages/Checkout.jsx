import PropTypes from "prop-types";
import styles from "./Checkout.module.css";

const {
  "section-center": sectionCenter,
  title,
  form,
  input,
  input__tag: inputTag,
  input__label: inputLabel,
  "input-wrapper": inputWrapper,
  input__field: inputField,
  "btn-wrapper": btnWrapper,
  btn,
} = styles;

function Input({ name, type, placeholderText, isRequired }) {
  return (
    <div className={input}>
      <div className={inputLabel}>
        <label>{name}</label>
        {isRequired && <span className={inputTag}>必填</span>}
      </div>
      <div className={inputWrapper}>
        <input
          type={type}
          placeholder={placeholderText}
          className={inputField}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
};

export default function Checkout() {
  return (
    <section className={sectionCenter}>
      <h2 className={title}>訂單資料填寫</h2>
      <form className={form}>
        <div>
          <Input
            name="姓名"
            type="text"
            placeholderText="桑德斯"
            isRequired={true}
          />
          <Input
            name="電話"
            type="tel"
            placeholderText="0919xxxxxx"
            isRequired={true}
          />
          <Input
            name="信箱"
            type="email"
            placeholderText="xxx@email.com"
            isRequired={true}
          />
          <Input
            name="地址"
            type="text"
            placeholderText="270宜蘭縣蘇澳鎮建福路293號"
            isRequired={true}
          />
          <Input
            name="備註"
            type="text"
            placeholderText="備註內容"
            isRequired={false}
          />
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
