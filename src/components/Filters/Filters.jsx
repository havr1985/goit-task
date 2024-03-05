import { useFormik } from "formik";
import makes from "../../makes.json";
import { useDispatch, useSelector } from "react-redux";
import { selectArrayCars } from "../../redux/carsSelectors";
import { changeFilters } from "../../redux/filtersSlice";

export const Filters = () => {
  const allCars = useSelector(selectArrayCars);
  const priceStr = allCars.map((item) => item.rentalPrice);
  const priceNumber = priceStr.map((item) => parseInt(item.slice(1), 10));
  const price = priceNumber.sort((a, b) => a - b);
    const newPrice = [...new Set(price)];
    
    const dispatch = useDispatch();

    const formik = useFormik({
    initialValues: {
      makeSelect: "",
      priceSelect: 0,
      from: 0,
      to: 0,
    },
    onSubmit: (values) => {
      dispatch(changeFilters(values))
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="makeSelect">Car brand</label>
      <select
        id="makeSelect"
        name="makeSelect"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.makeSelect}
      >
        <option value="" label="All" />
        {makes.map((item, idx) => (
          <option key={idx} value={item} label={item} />
        ))}
      </select>
      <label htmlFor="priceSelect">Price/ 1 hour</label>
      <select
        id="priceSelect"
        name="priceSelect"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.priceSelect}
      >
        <option value="" label="All" />
        {newPrice.map((item, idx) => (
          <option key={idx} value={item} label={item} />
        ))}
      </select>
      <input
        id="from"
        name="from"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="From"
      />
      <input
        id="to"
        name="to"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="To"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
