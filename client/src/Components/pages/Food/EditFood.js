import React, { useState, useEffect } from "react";

import Axios from "axios";
import { useDate } from "../../../providers/DateContext";
import FoodDetails from "../../Food/FoodDetails";
import Header from "../../Layout/Header";
import Button from "../../Layout/Header/Button";
import "./EditFood.css";
import Food from "../../../objects/Food";
import LabelInput from "../../Input/LabelInput";
import Container from "../../Layout/Container";
import Content from "../../Layout/Content";

const EditFood = (props) => {
  const { currentDate } = useDate();

  const [food, setFood] = useState(new Food());
  const [amount, setAmount] = useState(props.location.state.amount || 100);
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await Axios.request({
          url: "/api/v1/food/" + props.location.state.foodId,
          baseURL: process.env.REACT_APP_BASE_URL,
        });
        setFood(new Food(res.data.food));
      } catch (error) {
        console.log(error);
      }
    };
    fetchFood();
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSave = async () => {
    try {
      const res = await Axios.request({
        url:
          "/api/v1/diary/" +
          new Date(currentDate).toISOString() +
          "/" +
          props.location.state.mealtime +
          "/" +
          props.location.state.entryId,
        method: "PUT",
        baseURL: process.env.REACT_APP_BASE_URL,
        data: {
          amount,
        },
      });
      props.history.push({
        pathname: "/dashboard",
        state: {
          date: props.location.state.date,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteEntry = async (e) => {
    try {
      const res = await Axios.request({
        method: "DELETE",
        url:
          "/api/v1/diary/" +
          new Date(currentDate).toISOString() +
          "/" +
          props.location.state.mealtime +
          "/" +
          props.location.state.entryId,
        baseURL: process.env.REACT_APP_BASE_URL,
      });
      props.history.push({
        pathname: "/dashboard",
        state: {
          date: props.location.state.date,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header>
        <Button target="/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.429"
            height="14.03"
            viewBox="0 0 8.429 14.03"
          >
            <path
              d="M149.076,42.925l-5.6,5.6,5.6,5.6"
              transform="translate(-142.061 -41.511)"
              fill="none"
              stroke="#343540"
              stroke-linecap="round"
              stroke-width="2"
            />
          </svg>
        </Button>
        <Button handleSubmit={handleSave}>
          <div className="save">Speichern</div>
        </Button>
      </Header>
      <Content>
        {!food ? (
          <Container flexRow alignCenter>
            Loading...
          </Container>
        ) : (
          <Container noPadding>
            <Container noMargin>
              <LabelInput
                type="number"
                inputmode="numeric"
                onChange={handleAmountChange}
                value={amount}
                label="Menge"
              />
            </Container>
            <FoodDetails food={food} setFood={setFood} amount={amount} />
            <input
              className="btn-delete"
              type="submit"
              onClick={deleteEntry}
              value="Eintrag löschen"
            />
          </Container>
        )}
      </Content>
    </>
  );
};
export default EditFood;
