export default function CheckoutForm() {
  return (
    <form action="">
      <section>
        <div>
          <div>
            <label htmlFor="">姓名</label>
            <span>必填</span>
          </div>
          <input type="text" name="" id="" required />
        </div>
        <div>
          <div>
            <label htmlFor="">電話</label>
            <span>必填</span>
          </div>
          <input type="tel" name="" id="" required />
        </div>
        <div>
          <div>
            <label htmlFor="">信箱</label>
            <span>必填</span>
          </div>
          <input type="email" name="" id="" />
        </div>
        <div>
          <label htmlFor="">地址</label>
          <span>必填</span>
        </div>
        <div>
          <label htmlFor="">備註</label>
        </div>
      </section>
      <button></button>
    </form>
  );
}
