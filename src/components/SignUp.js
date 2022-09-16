import Form from "../styles/Form";
import Page from "../styles/Page";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../services/for-pets";
import logo from "../assets/logo.png";
import Logo from "../styles/Logo";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  function handleForm({ name, value }) {
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
      confirm_password: form.confirm_password,
    };

    if (body.confirm_password !== body.password) {
      alert("As senhas devem ser iguais!");
    } else {
      const promise = postSignUp(body);

      promise.then((answer) => {
        navigate("/");
      });

      promise.catch((answer) => {
        setForm({ ...form, password: "", confirm_password: "" });

        alert(answer.response.data);
      });
    }
  }

  return (
    <Page page="SignUp">
      <Logo src={logo} alt="logo" />

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          name="name"
          required
          value={form.name}
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="E-mail"
          name="email"
          required
          value={form.email}
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Senha"
          name="password"
          required
          value={form.password}
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Confirme a senha"
          name="confirm_password"
          required
          value={form.confirm_password}
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />

        <input type="submit" value="Cadastrar" />
      </Form>

      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Page>
  );
}
