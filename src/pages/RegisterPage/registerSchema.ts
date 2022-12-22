import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome precisa ter no mínimo 3 caracteres"),
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("O email digitado é inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(
      /(?=.*?[A-Z])/,
      "A senha precisa ter pelo menos uma letra maiúscula"
    )
    .matches(
      /(?=.*?[a-z])/,
      "A senha precisa ter pelo menos uma letra minúscula"
    )
    .matches(/(?=.*?[0-9])/, "A senha precisa ter pelo menos um dígito")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha precisa ter pelo menos um caractere especial"
    )
    .min(8, "A senha precisa ter pelo menos oito caracteres"),
  confirmed_password: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
});
