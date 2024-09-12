import { useState, useEffect } from "react";

const correct = {
  login: "admin",
  password: "password1",
};
// * Проверка пароля и логина
// * TODO Валидация логина и пароля (Логин от 3 символов, пароль мин 8 символов, пароль должен содержать цифру)
// * TODO Модальное окно по отправке

function hasNumber(password) {
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      return true;
    }
  }
  return false;
}

const LoginForm = ({ setOpen }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    login: "",
    password: "",
    root: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    if (!login) {
      setErrors({ ...errors, login: "Введите это поле" });
      return;
    }
    if (!password) {
      setErrors({ ...errors, password: "Введите это поле" });

      return;
    }

    if (login.length < 3) {
      setErrors({ ...errors, login: "Минимум 3 символа" });

      return;
    }
    if (password.length < 8) {
      setErrors({ ...errors, password: "Минимум 8 символов" });

      return;
    }

    if (!hasNumber(password)) {
      setErrors({ ...errors, password: "Хотя бы 1 цифра" });

      return;
    }

    if (correct.login !== login || correct.password !== password) {
      // * const body = {
      // *   login: login,
      // *   password: password,
      // * };

      // *Изучить подход объектов
      setErrors({ ...errors, root: "Неправильный логин или пароль" });

       setLogin("")
       setPassword("")
      return;
    }else{
      setLogin("")
      setPassword("")
    }


    setErrors({ login: "", password: "", root: "" });

    // const body = {
    //   login,
    //   password,
    // };

    setOpen(true);



    // console.log(body);
  };

  console.log(login)


  return (
    <form
      onSubmit={submitHandler}
      className="bg-slate-100 flex flex-col p-12 rounded-3xl"
    >
      <label className="flex flex-col">
        Имя пользователя
        <input
          onChange={(event) => setLogin(event.target.value)}
          value={login}
          className="input"
          type="text"
        />
        {errors.login && (
          <span className="text-red-500 my-2">{errors.login}</span>
        )}
      </label>
      <label className="flex flex-col">
        Пароль
        <input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="password"
          className="input"
        />
        {errors.password && (
          <span className="text-red-500 my-2">{errors.password}</span>
        )}
      </label>
      {errors.root && <span className="text-red-500 my-2">{errors.root}</span>}
      <button
        type="submit"
        className="bg-indigo-700 text-white rounded-xl w-full py-2 hover:bg-indigo-500 active:bg-indigo-900"
      >
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
