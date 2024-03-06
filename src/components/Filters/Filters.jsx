import { useFormik } from "formik";
import makes from "../../makes.json";
import { useDispatch, useSelector } from "react-redux";
import { selectArrayCars, selectFilters } from "../../redux/carsSelectors";
import { changeFilters } from "../../redux/filtersSlice";
import { Form, InputFrom, InputTo, Label, PriceSelect, SearchBtn, Select } from "./Filters.styled";

export const Filters = () => {
  const allCars = useSelector(selectArrayCars);
  const priceStr = allCars.map((item) => item.rentalPrice);
  const priceNumber = priceStr.map((item) => parseInt(item.slice(1), 10));
  const price = priceNumber.sort((a, b) => a - b);
  const newPrice = [...new Set(price)];
  
  const initFilter = useSelector(selectFilters)
    
    const dispatch = useDispatch();

    const formik = useFormik({
    initialValues: initFilter,
    onSubmit: (values) => {
      dispatch(changeFilters(values))
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <div>
        <Label htmlFor="makeSelect">Car brand</Label>
        <Select
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
        </Select>
      </div>
      <div>
        <Label htmlFor="priceSelect">Price/ 1 hour</Label>
        <PriceSelect
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
        </PriceSelect>
      </div>
      <div>
        <Label>Сar mileage / km</Label>
        <InputFrom
          id="from"
          name="from"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="From"
        />
        <InputTo
          id="to"
          name="to"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="To"
        />
      </div>

      <SearchBtn type="submit">Search</SearchBtn>
    </Form>
  );
};
