import { useMemo, useState } from "react";

export default function CheckoutPage() {
  // ---- 주문 아이템(데모) ----
  const items = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, idx) => ({
        id: idx + 1,
        name: "Apple iPad Mini",
        model: "G2356",
        price: 269,
        qty: 2,
      })),
    []
  );

  // ---- 배송/결제 옵션 ----
  const shippingOptions = useMemo(
    () => [
      { id: "free", label: "Free Shipping", fee: 0 },
      { id: "flat", label: "Flat rate", fee: 15 },
      { id: "pickup", label: "Local Pickup", fee: 8 },
    ],
    []
  );

  const paymentOptions = useMemo(
    () => [
      {
        id: "bank",
        label: "Direct Bank Transfer",
        description:
          "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
      },
      { id: "check", label: "Check Payments" },
      { id: "cod", label: "Cash On Delivery" },
      { id: "paypal", label: "Paypal" },
    ],
    []
  );

  // ---- 폼 필드 정의 ----
  const billingFields = useMemo(
    () => [
      {
        key: "firstName",
        label: "First Name",
        required: true,
        type: "text",
        colClass: "col-md-12 col-lg-6",
      },
      {
        key: "lastName",
        label: "Last Name",
        required: true,
        type: "text",
        colClass: "col-md-12 col-lg-6",
      },
      { key: "company", label: "Company Name", required: true, type: "text" },
      {
        key: "address",
        label: "Address",
        required: true,
        type: "text",
        placeholder: "House Number Street Name",
      },
      { key: "city", label: "Town/City", required: true, type: "text" },
      { key: "country", label: "Country", required: true, type: "text" },
      { key: "zip", label: "Postcode/Zip", required: true, type: "text" },
      { key: "mobile", label: "Mobile", required: true, type: "tel" },
      { key: "email", label: "Email Address", required: true, type: "email" },
    ],
    []
  );

  // ---- state ----
  const [form, setForm] = useState(() => ({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    mobile: "",
    email: "",
    createAccount: false,
    differentAddress: false,
    notes: "",
  }));

  const [shippingId, setShippingId] = useState("free");
  const [paymentId, setPaymentId] = useState("bank");

  // ---- 계산 ----
  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.qty, 0),
    [items]
  );

  const shippingFee = useMemo(() => {
    const found = shippingOptions.find((o) => o.id === shippingId);
    return found ? found.fee : 0;
  }, [shippingId, shippingOptions]);

  const total = subtotal + shippingFee;

  // ---- handlers ----
  const setField = (key) => (e) => {
    const isCheck = e.target.type === "checkbox";
    const value = isCheck ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const placeOrder = () => {
    // TODO: 실제 주문 API 연동
    const payload = {
      billing: form,
      items,
      shippingId,
      paymentId,
      subtotal,
      shippingFee,
      total,
    };
    alert(`Place Order (demo)\n${JSON.stringify(payload, null, 2)}`);
  };

  return (
    <div className="container-fluid bg-light overflow-hidden py-5">
      <div className="container py-5">
        <h1 className="mb-4 wow fadeInUp" data-wow-delay="0.1s">
          Billing details
        </h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row g-5">
            {/* LEFT: Billing */}
            <div
              className="col-md-12 col-lg-6 col-xl-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="row">
                {billingFields.slice(0, 2).map((f) => (
                  <div key={f.key} className={f.colClass}>
                    <FormField
                      id={f.key}
                      label={f.label}
                      required={f.required}
                      type={f.type}
                      value={form[f.key]}
                      onChange={setField(f.key)}
                    />
                  </div>
                ))}
              </div>

              {billingFields.slice(2).map((f) => (
                <FormField
                  key={f.key}
                  id={f.key}
                  label={f.label}
                  required={f.required}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={setField(f.key)}
                />
              ))}

              <Checkbox
                id="Account-1"
                label="Create an account?"
                checked={form.createAccount}
                onChange={setField("createAccount")}
              />

              <hr />

              <Checkbox
                id="Address-1"
                label="Ship to a different address?"
                checked={form.differentAddress}
                onChange={setField("differentAddress")}
              />

              <div className="form-item">
                <textarea
                  name="notes"
                  className="form-control"
                  spellCheck={false}
                  cols={30}
                  rows={11}
                  placeholder="Order Notes (Optional)"
                  value={form.notes}
                  onChange={setField("notes")}
                />
              </div>
            </div>

            {/* RIGHT: Order Summary */}
            <div
              className="col-md-12 col-lg-6 col-xl-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className="text-center">
                      <th scope="col" className="text-start">
                        Name
                      </th>
                      <th scope="col">Model</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {items.map((it) => (
                      <tr key={it.id} className="text-center">
                        <th scope="row" className="text-start py-4">
                          {it.name}
                        </th>
                        <td className="py-4">{it.model}</td>
                        <td className="py-4">{money(it.price)}</td>
                        <td className="py-4">{it.qty}</td>
                        <td className="py-4">{money(it.price * it.qty)}</td>
                      </tr>
                    ))}

                    {/* Subtotal */}
                    <tr>
                      <th scope="row"></th>
                      <td className="py-4"></td>
                      <td className="py-4"></td>
                      <td className="py-4">
                        <p className="mb-0 text-dark py-2">Subtotal</p>
                      </td>
                      <td className="py-4">
                        <div className="py-2 text-center border-bottom border-top">
                          <p className="mb-0 text-dark">{money(subtotal)}</p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td className="py-4">
                        <p className="mb-0 text-dark py-4">Shipping</p>
                      </td>
                      <td colSpan={3} className="py-4">
                        <OptionGroup
                          name="shipping"
                          options={shippingOptions.map((o) => ({
                            id: o.id,
                            label: o.fee === 0 ? o.label : `${o.label}: ${money(o.fee)}`,
                          }))}
                          value={shippingId}
                          onChange={setShippingId}
                        />
                      </td>
                    </tr>

                    {/* Total */}
                    <tr>
                      <th scope="row"></th>
                      <td className="py-4">
                        <p className="mb-0 text-dark text-uppercase py-2">
                          TOTAL
                        </p>
                      </td>
                      <td className="py-4"></td>
                      <td className="py-4"></td>
                      <td className="py-4">
                        <div className="py-2 text-center border-bottom border-top">
                          <p className="mb-0 text-dark">{money(total)}</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <PaymentSection
                options={paymentOptions}
                value={paymentId}
                onChange={setPaymentId}
              />

              <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                <button
                  type="button"
                  className="btn btn-primary border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                  onClick={placeOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------------- Reusable UI ---------------- */

function FormField({ id, label, required, type, value, onChange, placeholder }) {
  return (
    <div className="form-item w-100">
      <label className="form-label my-3" htmlFor={id}>
        {label}
        {required ? <sup>*</sup> : null}
      </label>
      <input
        id={id}
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

function Checkbox({ id, label, checked, onChange }) {
  return (
    <div className="form-check my-3">
      <input
        type="checkbox"
        className="form-check-input"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

function OptionGroup({ name, options, value, onChange }) {
  return (
    <>
      {options.map((o, idx) => {
        const id = `${name}-${o.id ?? idx}`;
        return (
          <div className="form-check text-start" key={id}>
            <input
              type="radio"
              className="form-check-input bg-primary border-0"
              id={id}
              name={name}
              checked={value === o.id}
              onChange={() => onChange(o.id)}
            />
            <label className="form-check-label" htmlFor={id}>
              {o.label}
            </label>
          </div>
        );
      })}
    </>
  );
}

function PaymentSection({ options, value, onChange }) {
  return (
    <>
      {options.map((p, idx) => {
        const id = `pay-${p.id ?? idx}`;
        return (
          <div
            key={id}
            className={`row g-0 text-center align-items-center justify-content-center border-bottom py-2`}
          >
            <div className="col-12">
              <div className="form-check text-start my-2">
                <input
                  type="radio"
                  className="form-check-input bg-primary border-0"
                  id={id}
                  name="payment"
                  checked={value === p.id}
                  onChange={() => onChange(p.id)}
                />
                <label className="form-check-label" htmlFor={id}>
                  {p.label}
                </label>
              </div>

              {p.description ? (
                <p className="text-start text-dark">{p.description}</p>
              ) : null}
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ---------------- Helpers ---------------- */

function money(n) {
  // 원본처럼 $269.00 형태
  return `$${Number(n).toFixed(2)}`;
}
