import * as yup from "yup";
import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const UseUserNameForm = () => {
  const { setName } = useStore();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const inputName = watch("name");

  // запись в localStorage и store только если соблюдена валидация
  useEffect(() => {
    const onValidSubmit = (data: { name: string }) => {
      localStorage.setItem("name", data.name);
      setName(data.name);
    };

    if (inputName) {
      handleSubmit(onValidSubmit)();
    }
  }, [inputName, handleSubmit, setName]);

  return {
    inputName,

    handleSubmit,
    register,
    errors,
    watch,
  };
};

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Ваше имя не записано, напишите минимум 3 символа!")
    .max(20, "Ваше имя не записано, напишите максимум 20 символов!")
    .matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, "Имя может содержать только буквы")
    .required("Введите ваше имя"),
});
