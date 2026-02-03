import { useMemo, useState } from "react";

export default function CartPage() {
  // 1) 초기 데이터 (실제론 API로 받아온다고 가정)
  const initialItems = useMemo(
    () => [
      { id: 1, name: "Apple iPad Mini", model: "G2356", price: 2.99, qty: 1 },
      { id: 2, name: "Apple iPad Mini", model: "G2356", price: 2.99, qty: 1 },
      { id: 3, name: "Apple iPad Mini", model: "G2356", price: 2.99, qty: 1 },
    ],
    []
  );

  // 2) 상태
  const [items, setItems] = useState(initialItems);
  const [coupon, setCoupon] = useState("");

  // 3) 파생 값 계산
  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [items]);

  const shipping = 3.0; // 예시 고정
  const total = subtotal + shipping;

  // 4) 핸들러
  const decQty = (id) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it
      )
    );
  };

  const incQty = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it))
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const onChangeQtyInput = (id, value) => {
    // 숫자 아닌 입력 방어 + 최소 1
    const num = Number(value);
    if (Number.isNaN(num)) return;

    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, Math.floor(num)) } : it
      )
    );
  };

  const applyCoupon = () => {
    // 여기서 쿠폰 검증/할인 로직 연결
    alert(`쿠폰 적용: ${coupon || "(빈 값)"}`);
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Model</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>

            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-5">
                    장바구니가 비어있습니다.
                  </td>
                </tr>
              ) : (
                items.map((item) => {
                  const rowTotal = item.price * item.qty;

                  return (
                    <tr key={item.id}>
                      <th scope="row">
                        <p className="mb-0 py-4">{item.name}</p>
                      </th>

                      <td>
                        <p className="mb-0 py-4">{item.model}</p>
                      </td>

                      <td>
                        <p className="mb-0 py-4">{formatMoney(item.price)}</p>
                      </td>

                      <td>
                        <div
                          className="input-group quantity py-4"
                          style={{ width: "120px" }}
                        >
                          <div className="input-group-btn">
                            <button
                              type="button"
                              className="btn btn-sm btn-minus rounded-circle bg-light border"
                              onClick={() => decQty(item.id)}
                              aria-label="decrease quantity"
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>

                          <input
                            type="text"
                            inputMode="numeric"
                            className="form-control form-control-sm text-center border-0"
                            value={item.qty}
                            onChange={(e) =>
                              onChangeQtyInput(item.id, e.target.value)
                            }
                          />

                          <div className="input-group-btn">
                            <button
                              type="button"
                              className="btn btn-sm btn-plus rounded-circle bg-light border"
                              onClick={() => incQty(item.id)}
                              aria-label="increase quantity"
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>

                      <td>
                        <p className="mb-0 py-4">{formatMoney(rowTotal)}</p>
                      </td>

                      <td className="py-4">
                        <button
                          type="button"
                          className="btn btn-md rounded-circle bg-light border"
                          onClick={() => removeItem(item.id)}
                          aria-label="remove item"
                        >
                          <i className="fa fa-times text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-5">
          <input
            type="text"
            className="border-0 border-bottom rounded me-5 py-3 mb-4"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button
            className="btn btn-primary rounded-pill px-4 py-3"
            type="button"
            onClick={applyCoupon}
          >
            Apply Coupon
          </button>
        </div>

        <div className="row g-4 justify-content-end">
          <div className="col-8"></div>

          <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
            <div className="bg-light rounded">
              <div className="p-4">
                <h1 className="display-6 mb-4">
                  Cart <span className="fw-normal">Total</span>
                </h1>

                <div className="d-flex justify-content-between mb-4">
                  <h5 className="mb-0 me-4">Subtotal:</h5>
                  <p className="mb-0">{formatMoney(subtotal)}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <h5 className="mb-0 me-4">Shipping</h5>
                  <div>
                    <p className="mb-0">Flat rate: {formatMoney(shipping)}</p>
                  </div>
                </div>

                <p className="mb-0 text-end">Shipping to Ukraine.</p>
              </div>

              <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                <h5 className="mb-0 ps-4 me-4">Total</h5>
                <p className="mb-0 pe-4">{formatMoney(total)}</p>
              </div>

              <button
                className="btn btn-primary rounded-pill px-4 py-3 text-uppercase mb-4 ms-4"
                type="button"
              >
                Proceed Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatMoney(value) {
  return `${value.toFixed(2)} $`;
}
