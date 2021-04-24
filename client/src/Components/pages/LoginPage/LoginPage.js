import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../providers/AuthContext";
import Axios from "axios";
import LabelInput from "../../Input/LabelInput";
import Container from "../../Layout/Container";
import Content from "../../Layout/Content";
export const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setIsAuthenticated } = useAuth();
  const history = useHistory();
  const login = async (event) => {
    event.preventDefault();
    try {
      const res = await Axios.request("/api/v1/auth", {
        method: "POST",
        data: { email, password },
        baseURL: process.env.REACT_APP_BASE_URL,
      });
      if (res.status === 200) {
        setIsAuthenticated(true);
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Content>
      <Container>
        <Container flexCol alignCenter>
          <h1 className="login-heading">Anmelden</h1>
          <p className="login-p">Gebe deine Nutzerdaten an</p>
        </Container>
        <form>
          <LabelInput
            label="E-Mail"
            id="email"
            type="email"
            inputmode="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            autoFocus
            required
          />
          <LabelInput
            label="Passwort"
            id="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
          />
          <Link className="login-links" to="/forgotpassword">
            Passwort vergessen?
          </Link>
          <Container flexCol alignCenter>
            <input
              className="login-button"
              type="submit"
              value="Anmelden"
              onClick={login}
            />

            <Link className="login-links text-center" to="/register">
              Konto erstellen
            </Link>
          </Container>
        </form>
      </Container>
    </Content>
  );
};
