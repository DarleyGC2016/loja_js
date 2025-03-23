import FomularioCadastro from "@/components/FomularioCadastro/FomularioCadastro";
import { aoEnviarForm, validaCpf, validaNome, validaSobrenome } from "./util";

const FormUsuario = () => {
  return (
    <FomularioCadastro
      aoEnviar={aoEnviarForm}
      validarCPF={validaCpf}
      validarNome={validaNome}
      validarSobrenome={validaSobrenome}
    />
  );
};

export default FormUsuario;
